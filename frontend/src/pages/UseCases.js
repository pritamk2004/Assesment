import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Use Cases Page
function UseCases() {
  const cases = [
    { industry: 'Fintech', description: 'AI solutions for financial technology.', link: '#' },
    { industry: 'Retail', description: 'Data-driven insights for retail businesses.', link: '#' },
    { industry: 'F&B', description: 'Optimizing food and beverage operations with AI.', link: '#' },
    { industry: 'Mobility', description: 'Smart analytics for transportation.', link: '#' },
    { industry: 'Entertainment', description: 'AI-driven recommendations and content optimization.', link: '#' }
  ];

  return (
    <Container>
      <Helmet>
        <title>Use Cases - WaysAhead Global</title>
        <meta name="description" content="Explore AI industry applications in Fintech, Retail, F&B, Mobility, and Entertainment." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          AI Industry Applications
        </Typography>
        <Typography variant="h5" align="center">
          Explore how AI transforms various industries
        </Typography>
      </motion.div>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} mt={3}>
        {cases.map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card sx={{ width: 300, minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
              <CardContent>
                <Typography variant="h6">{item.industry}</Typography>
                <Typography>{item.description}</Typography>
              </CardContent>
              <Button variant="contained" color="primary" href={item.link} sx={{ m: 2 }}>
                Learn More
              </Button>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default UseCases;
