import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Header from '../components/Header/Header';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import KTLogoPNG from './../assets/images/KTLogoPNG.png';

const DefaultLayout = ({ children }) => {
  return (
    <Box minHeight="100%" position={'relative'} area-label="root container">
      <Header name={'KT '} content={'system status'} />
      {/* <Title /> */}
      <Box

      >
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default DefaultLayout;
