import React from 'react';
import { Grid, Card, Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const Profile = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          width: '100%',
          marginTop: '10%',
          paddingBottom: '20px',
          textAlign: 'center',
          minHeight: '100%',
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5">Personal Profile</Typography>
      </Box>
      <Card sx={{ padding: '35px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <span>First Name</span>
          </Grid>
          <Grid item xs={6}>
            <span>Last Name</span>
          </Grid>
          <Grid item xs={6}>
            <span>Email Address</span>
          </Grid>
          <Grid item xs={6}>
            <span>Phone Number</span>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Profile;
