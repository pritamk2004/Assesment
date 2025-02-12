import mongoose from 'mongoose';

const ChatbotLogSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },
  botResponse: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('ChatbotLog', ChatbotLogSchema);
