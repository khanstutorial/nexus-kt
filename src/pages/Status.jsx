import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import DisplayStatus from '../features/DisplayStatus';

const Status = () => {
  return (
    <Container>

      <Paper component={Stack} sx={{
          textAlign:'center',
          minHeight: '155px',
        }} direction="column" justifyContent="center">
        <div>Fetching system status…</div>
      </Paper>
      <Stack
        spacing={2}
        sx={{ backgroundColor: '#f1faff', minHeight: '400px' }}
      >
        <DisplayStatus labelName={'API'} />
        <DisplayStatus labelName={'Dashboard'} />
        <DisplayStatus labelName={'Stripe.js'} />
        <DisplayStatus labelName={'Checkout.js'} />
      </Stack>
    </Container>
  );
};

export default Status;
