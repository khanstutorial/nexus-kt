import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: '20px 0px', height: '41px' }}>
        <Header content={'system status'} />
      </Box>
      <br />
      <Box
        style={{
          border: '1px solid black',
          width: '100%',
          paddingTop: '5px',
          paddingBottom: '20px',
          minHeight: '100%',
          backgroundColor: 'white',
        }}
      >
        {' '}
        {children}
      </Box>
      <Box
        sx={{
          background: 'white',
          marginTop: '40px',
          border: '1px solid black',
          overflow: 'hidden',
        }}
      >
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
