import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';
import DisplayStatus from '../features/DisplayStatus';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@mui/material';
import UptimeGraphBar from '../components/Uptime-Graph-Bar/UptimeGraphBar';
import moment from "moment";

const Status = () => {
  let date = moment()
    .utcOffset('-4')
    .format('DD MMMM, YYYY hh:mm');

  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];

  function x(num){
    return num*5;
  }


  return (
    <Card sx={{ padding: '0px !important' }}>
      <Box sx={{ minHeight: "155px", padding: '0 36px' }}>
        <Box sx={{ padding: "50px 0px" }}>
          <CircleIcon sx={{ color: '#2cfa2c', paddingRight: '22px', float: 'left' }} />
          <Box sx={{ paddingLeft: '24px' }}>
            <Typography variant="h5" component="h2">
              All services are online.
            </Typography>
            <Typography mt={2} sx={{ paddingLeft: '22px' }} variant="subtitle1">
              As of {date}
            </Typography>
          </Box>

        </Box>
      </Box>
      <Stack
        spacing={2}
        sx={{ backgroundColor: '#f2f8fb', padding: '35px', minHeight: '400px' }}
      >
        <DisplayStatus labelName={'API'} />
        <div sx={{ display: 'flex', flexDirection: 'row' }}>
        </div>
{        data.map((number) => <UptimeGraphBar></UptimeGraphBar>)
}        <DisplayStatus labelName={'Dashboard'} />
        <DisplayStatus labelName={'Stripe.js'} />
        <DisplayStatus labelName={'Checkout.js'} />
      </Stack>
    </Card>
  );
};

export default Status;
