import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from "axios";


function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/auth/register', form);
        alert('Registration successful!');
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Container>
        <Typography variant="h3">Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Password" name="password" type="password" onChange={handleChange} margin="normal" />
          <Button type="submit" variant="contained" color="primary">Register</Button>
        </form>
      </Container>
    );
  }
  
  export default Register;
