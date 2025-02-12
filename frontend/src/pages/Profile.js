import React, { useContext } from 'react';
import { Container, Typography, Button } from '@mui/material';
import AuthContext from '../context/AuthContext';

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Container>
      <Typography variant="h3">Welcome, {user?.name}</Typography>
      <Button onClick={logout} variant="contained" color="secondary">Logout</Button>
    </Container>
  );
}

export default Profile;
