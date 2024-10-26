import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; 

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json(); 
        localStorage.setItem('userToken', data.token);
        navigate('/dashboard'); 
      } else {
        console.error('Sign-up failed:', response.status);
      }
    } catch (error) {
      console.error('Sign-up error:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ backgroundColor: 'white', minHeight: '100vh', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" fullWidth style={{ marginTop: '10px' }}>
          Sign Up
        </Button>
        <Typography variant="body2" align="center">
          Already have an account? <Link to="/signin">Sign In</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default SignUp;
