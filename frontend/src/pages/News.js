import React, { useState, useEffect } from 'react';
import { Container, Typography, Button,  Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import axios from 'axios';

// News & Media Page
function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/api/news')
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Helmet>
        <title>News & Media - WaysAhead Global</title>
        <meta name="description" content="Stay updated with the latest news and press releases from WaysAhead Global." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <Typography variant="h3" gutterBottom>
          News & Media
        </Typography>
        <Typography variant="h5">
          Stay updated with the latest developments
        </Typography>
      </motion.div>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
        {news.map((article, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index}>
            <Paper elevation={3} sx={{ padding: 3, width: 300 }}>
              <Typography variant="h6">{article.title}</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>{article.content}</Typography>
              <Button variant="contained" color="primary">Read More</Button>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default News;
