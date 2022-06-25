import React from 'react';
import moment from 'moment';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Card } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@mui/material';
import { SERVICES } from './../constants/index';
import UptimeGraphBar from '../components/Uptime-Graph-Bar/UptimeGraphBar';

const Status = () => {
  let date = moment().utcOffset('-4').format('DD MMMM, YYYY hh:mm');

  const data = [
    1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0,
    1, 1, 1, 1, 0,
  ];

  return (
    <div style={{ paddingBottom: '5px' }}>
      <Box sx={{ padding: '0 36px' }}>
        <Box sx={{ padding: '50px 0px' }}>
          <CircleIcon
            sx={{
              color: '#2cfa2c',
              float: 'left',
            }}
          />
          <Box>
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
        sx={{
          backgroundColor: '#f2f8fb',
        }}
      >
        {SERVICES.map(service => (
          <div
            style={{
              textAlign: 'center',
              paddingTop: '15px',
              paddingBottom: '20px',
            }}
          >
            <span key={service}>{service.value}</span>
            <div
              key={service}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: '20px',
              }}
            >
              {data.map(number => (
                <UptimeGraphBar value={number} />
              ))}
            </div>
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default Status;
