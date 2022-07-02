import React from 'react';
import { Grid, Card, Box, Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';
import CustomInput from '../features/Custom-Input/CustomInput';

const ContactUs = () => {
  return (
    <Container sx={{ width: '1013px' }}>
      <Box
        sx={{
          width: '100%',
          marginTop: '5%',
          marginBottom: '5%',
          textAlign: 'center',
          minHeight: '100%',
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h3" fontWeight='fontWeightBold' sx={{ backgroundColor: '#F5F5F5' }}>
          Contact Us
        </Typography>
      </Box>
      <Box sx={{
        border: '1px solid',
        borderRadius: '15px',
        width: '1013px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingBottom: '5%'
      }}>
        <Box sx={{ width: '473px' }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <CustomInput
                label={'Name'}
                value={''}
                id={'firstName'}
                name={'firstName'}
                placeholder={''}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInput
                label={'Title'}
                value={''}
                id={'title'}
                name={'title'}
                placeholder={''}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInput
                label={'Email'}
                value={''}
                id={'emailAddress'}
                name={'emailAddress'}
                placeholder={''}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInput
                label={'Phone'}
                value={''}
                type={'phone'}
                id={'phone'}
                name={'phone'}
                placeholder={''}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomInput
                label={'Message'}
                value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of `}
                id={'message'}
                name={'message'}
                placeholder={'Enter user description'}
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" href="http://auth.ktemail.com/">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
