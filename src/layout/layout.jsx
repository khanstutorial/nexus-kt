import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import KTLogoPNG from './../assets/images/KTLogoPNG.png';

const DefaultLayout = ({ children }) => {
  return (
    <Box minHeight="100%" position={'relative'}>
      <Header name={'KT '} content={'system status'} />
      <Box
        sx={{
          width: '100%',
          paddingTop: '5px',
          paddingBottom: '20px',
          minHeight: '100px',
          backgroundColor: '#F5F5F5',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
