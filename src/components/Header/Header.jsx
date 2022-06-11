import React from 'react';
import { Typography, Box } from '@mui/material';
import KT from './../../assets/images/KT.svg';
import { Grid } from '@mui/material';
import favicon from './../../assets/images/favicon.png';

const Header = props => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="flex-end"
      direction={'row'}
      sx={{ margin: 0 }}
    >
      <Grid
        item
        sx={{ border: '1px solid red' }}
        justifyContent="flex-start"
        md={8}
        xs={1}
      >
        <img src={favicon}></img>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6" color={'blue'}>
          Section 1
        </Typography>{' '}
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6" color={'blue'}>
          Section 2
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6" color={'blue'}>
          Section 3
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6" color={'blue'}>
          Login
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
