import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import KTLogoPNGWhite from './../../assets/images/KTLogoPNGWhite.png';

const Footer = () => {
  return (
    <Grid container direction={'row'} spacing={0} alignItems='center' justifyContent={'center'} style={{ padding: '35px', minHeight: '425px', backgroundColor: '#2151A1', color: 'white' }}>
      <Grid item xs={5} style={{ paddingLeft: '95px' }}>
        <img src={KTLogoPNGWhite}></img>
      </Grid>
      <Grid item container direction={'column'} xs={3}>
        <Typography variant='h5' fontWeight={'medium'} sx={{ textTransform: 'uppercase', paddingBottom: '16px' }}>Important Links</Typography>
        <Grid item>
          <Typography>Fetching new tweets</Typography>
        </Grid>
        <Grid item>
          <Typography>Fetching new tweets</Typography>
        </Grid>
      </Grid>
      <Grid item container direction={'column'} xs={3}>
        <Typography variant='h5' fontWeight={'medium'} sx={{ textTransform: 'uppercase', paddingBottom: '16px' }}>Company Links</Typography>
        <Grid item>
          <Typography>Fetching new tweets</Typography>
        </Grid>
        <Grid item>
          <Typography>Fetching new tweets</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer