import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import axios from 'axios';

// Careers Page
function Careers() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://waysaheadglobal-backend.onrender.com/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error('Error fetching jobs:', err));
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Careers - WaysAhead Global</title>
        <meta name="description" content="Explore job opportunities in AI and apply for Internships, Graduate Roles, or Professional Positions." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <Typography variant="h3" gutterBottom>
          Join Our Team
        </Typography>
        <Typography variant="h5">
          Explore exciting opportunities at WaysAhead Global
        </Typography>
      </motion.div>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} mt={3}>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card elevation={4} sx={{ borderRadius: 2, overflow: 'hidden', width: 300, padding: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography>{job.description}</Typography>
                  <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <Box display="flex" justifyContent="center" width="100%">
            <Typography variant="body1">
              No job openings at the moment.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Careers ;
