import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// About Us Page
function About() {
  const offices = [
    { location: 'New York, USA', address: '123 AI Street, NY 10001' },
    { location: 'London, UK', address: '456 Data Drive, London WC2' },
    { location: 'Tokyo, Japan', address: '789 Robotics Ave, Tokyo 110' },
  ];

  return (
    <Container>
      <Helmet>
        <title>About Us - WaysAhead Global</title>
        <meta name="description" content="Learn about WaysAhead Global, our mission, vision, and leadership." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5">
          Our Mission: Innovating with AI for a Smarter Future
        </Typography>
      </motion.div>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} mt={3}>
        {offices.map((office, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card elevation={4} sx={{ borderRadius: 2, overflow: 'hidden', width: 300, padding: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {office.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {office.address}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default About;
