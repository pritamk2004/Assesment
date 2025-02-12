import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Helmet } from 'react-helmet';

// Home Page Component
function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/api/news')
      .then(res => setNews(res.data))
      .catch(err => console.error('Error fetching news:', err));
  }, []);

  return (
    <Container>
      <Helmet>
        <title>WaysAhead Global - AI & Data Solutions</title>
        <meta name="description" content="Explore AI-driven solutions with WaysAhead Global." />
      </Helmet>

      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to WaysAhead Global
        </Typography>
        <Typography variant="h5">
          Empowering Businesses with AI & Data Analytics
        </Typography>
      </motion.div>

      {/* News Section */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} mt={3}>
        {news.length > 0 ? (
          news.map((article, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card elevation={4} sx={{ borderRadius: 2, overflow: 'hidden', width: 300, padding: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.content}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <Box display="flex" justifyContent="center" width="100%">
            <Typography variant="body1">
              No news available at the moment.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Home;
