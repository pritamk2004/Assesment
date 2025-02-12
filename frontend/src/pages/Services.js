import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Services Page
function Services() {
  const services = [
    { title: 'AI Shop Assist', description: 'AI-powered virtual shopping assistant to enhance customer experience.' },
    { title: 'Geo-Spatial Analytics', description: 'Advanced location-based insights for strategic decision-making.' },
    { title: 'In-Store Analytics', description: 'Real-time customer behavior tracking and predictive insights.' },
    { title: 'SCM Analytics', description: 'Supply Chain optimization using AI-driven analytics.' },
    { title: 'Video Analytics', description: 'AI-based video surveillance and behavior detection.' },
    { title: 'Robotics', description: 'Intelligent automation solutions for various industries.' }
  ];

  return (
    <Container>
      <Helmet>
        <title>Our Services - WaysAhead Global</title>
        <meta name="description" content="Explore AI-driven solutions like AI Shop Assist, Geo-Spatial Analytics, Video Analytics, and Robotics." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <Typography variant="h3" gutterBottom>
          Our AI-Driven Services
        </Typography>
        <Typography variant="h5">
          Cutting-edge AI solutions tailored for business growth
        </Typography>
      </motion.div>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
        {services.map((service, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card sx={{ minWidth: 275, maxWidth: 350, padding: 2 }}>
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default Services;
