import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import AuthContext from '../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    window.location.href = "https://waysaheadglobal-backend.onrender.com/profile";
  };

  return (
    <Container>
      <Typography variant="h3">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" />
        <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </Container>
  );
}

export default Login;
