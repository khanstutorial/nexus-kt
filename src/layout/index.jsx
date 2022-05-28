import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import KTLogoPNG from './../assets/images/KTLogoPNG.png'

const Layout = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Grid container direction={'row'} sx={{ padding: '20px 0px', height: '41px' }}>
        <Grid item xs={6} justifyContent={'flex-start'} alignItems={'center'}>
          <Header name={'KT '} content={'system status'} />
        </Grid>
        <Grid item xs={6} justifyContent={'flex-end'} alignItems={'flex-end'}>
          <img src={KTLogoPNG} style={{height:'30px'}}></img>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: '100%',
          paddingTop: '5px',
          paddingBottom: '20px',
          minHeight: '100%',
          backgroundColor: 'white',
        }}
      >
      {children}
      </Box>
      <Box
        sx={{
          width: '100%',
          paddingTop: '5px',
          paddingBottom: '20px',
          minHeight: '100%',
          backgroundColor: 'white',
        }}
      >
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
