import React from 'react';
import { Button, Grid } from '@mui/material';

const Login = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Button variant="contained" href="http://auth.ktemail.com/">
          Login with KeyCloak
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
