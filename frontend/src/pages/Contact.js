import React, { useState} from 'react';
import { Container, Typography, Card, CardContent, Button, TextField, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Contact Page
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', form)
      .then(() => alert('Message sent successfully'))
      .catch(err => console.error(err));
  };

  return (
    <Container>
      <Helmet>
        <title>Contact Us - WaysAhead Global</title>
        <meta name="description" content="Get in touch with WaysAhead Global for AI solutions and business inquiries." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5">
          We’d love to hear from you!
        </Typography>
      </motion.div>

      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
        <Paper elevation={3} sx={{ flex: 1, padding: 3 }}>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Name" name="name" onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Message" name="message" multiline rows={4} onChange={handleChange} margin="normal" />
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>Send Message</Button>
          </form>
        </Paper>
        <Box sx={{ flex: 1, height: '300px', width: '100%' }}>
          <MapContainer center={[40.7128, -74.0060]} zoom={10} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[27.212532208298644, 75.70025241137851]}>
              <Popup>WaysAhead Global Headquarters</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
