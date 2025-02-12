import OpenAI from 'openai';
import dotenv from 'dotenv';
import ChatbotLog from '../models/ChatbotLog.js';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Rule-based chatbot responses
const ruleBasedResponses = {
  "hello": "Hello! How can I assist you today?",
  "services": "We offer AI solutions such as AI Shop Assist, Geo-Spatial Analytics, and Robotics.",
  "careers": "Visit our Careers page to explore job opportunities!",
  "default": "I'm not sure about that. Can you rephrase your question?",
};

// Handle chatbot messages
export const chatWithBot = async (req, res) => {
  try {
    const { userMessage } = req.body;
    
    // Step 1: Check for predefined rule-based responses
    const lowerCaseMessage = userMessage.toLowerCase();
    if (ruleBasedResponses[lowerCaseMessage]) {
      const botResponse = ruleBasedResponses[lowerCaseMessage];

      await ChatbotLog.create({ userMessage, botResponse });
      return res.status(200).json({ botResponse });
    }

    // Step 2: Use OpenAI API for dynamic response if no predefined response is found
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "system", content: "You are an AI assistant for WaysAhead Global." }, 
                 { role: "user", content: userMessage }],
      temperature: 0.7,
    });

    const botResponse = aiResponse.choices[0].message.content;

    // Step 3: Store interaction in MongoDB
    await ChatbotLog.create({ userMessage, botResponse });

    res.status(200).json({ botResponse });

  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ message: "Error processing chatbot request." });
  }
  // Human Takeover
  if (botResponse.includes("not sure") || botResponse.includes("I don't know")) {
    return res.status(200).json({ botResponse: "I am not sure about that. Would you like to chat with a human support agent?" });
  }
};

// Get Chatbot Logs (For analytics or debugging)
export const getChatbotLogs = async (req, res) => {
  try {
    const logs = await ChatbotLog.find().sort({ timestamp: -1 }).limit(50);
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chatbot logs' });
  }
};

