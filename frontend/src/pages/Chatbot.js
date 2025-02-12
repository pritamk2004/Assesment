import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Paper, Switch, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { io } from "socket.io-client";

const socket = io("https://waysaheadglobal-backend.onrender.com/");

// Chatbot Page
function Chatbot() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setResponses((prev) => [...prev, { user: false, text: data.text }]);
      setIsTyping(false);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);
  
  const handleSend = async () => {
    if (!message.trim()) return;
    setResponses((prev) => [...prev, { user: true, text: message }]);
    setIsTyping(true);
    socket.emit("sendMessage", { userMessage: message });
    setMessage('');
    
    try {
      const res = await axios.post('https://waysaheadglobal-backend.onrender.com/api/chatbot', { userMessage: message });
      setResponses((prev) => [...prev, { user: false, text: res.data.botResponse }]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents new line in the input
      handleSend();
    }
  };

  return (
    <Container style={{ background: darkMode ? '#121212' : '#fff', color: darkMode ? '#fff' : '#000', minHeight: '100vh', padding: '20px' }}>
      <Helmet>
        <title>Chatbot - WaysAhead Global</title>
        <meta name="description" content="Interact with our AI-powered chatbot to learn more about WaysAhead Global." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <Typography variant="h3" gutterBottom>
          AI Chatbot Assistant
        </Typography>
        <Typography variant="h5">
          Ask about our services, careers, and more!
        </Typography>
      </motion.div>
      <Box textAlign="center" mb={2}>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Typography variant="body2">Toggle Dark Mode</Typography>
      </Box>
      <Paper elevation={3} sx={{ maxHeight: 300, overflowY: 'auto', padding: 2, marginBottom: 2 }}>
        {responses.map((res, index) => (
          <Typography key={index} align={res.user ? 'right' : 'left'} sx={{ color: res.user ? 'blue' : 'green' }}>
            {res.text}
          </Typography>
        ))}
      </Paper>
      {isTyping && <Typography variant="body2" align="left" color="gray">AI is typing...</Typography>}
      <TextField 
        fullWidth 
        label="Type a message..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        onKeyDown={handleKeyDown} 
        variant="outlined" 
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSend} fullWidth>
        Send
      </Button>
    </Container>
  );
}

export default Chatbot;
