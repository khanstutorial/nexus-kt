import React from 'react';
import { Grid, Card, Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CustomInput from '../features/Custom-Input/CustomInput';

const Profile = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          width: '100%',
          marginTop: '10%',
          paddingBottom: '20px',
          textAlign: 'center',
          minHeight: '100%',
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5">Personal Profile</Typography>
      </Box>
      <Card sx={{ padding: '35px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomInput
              label={'First Name'}
              value={'Saqib'}
              id={'firstName'}
              name={'firstName'}
              placeholder={'Enter first name'}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              label={'Last Name'}
              value={'Hasanie'}
              id={'lastName'}
              name={'lastName'}
              placeholder={'Enter last name'}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              label={'Email Address'}
              value={'test@gmail.com'}
              id={'emailAddress'}
              name={'emailAddress'}
              placeholder={'Enter email address'}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              label={'Password'}
              value={'Hasanie'}
              type={'password'}
              id={'lastName'}
              name={'lastName'}
              placeholder={'Enter last name'}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              label={'Phone Number'}
              value={'+541 326 4970'}
              id={'phoneNumber'}
              name={'phoneNumber'}
              placeholder={'Enter phone number'}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              label={'Job Title'}
              value={'Software Engineer'}
              type={'jobTitle'}
              id={'jobTitle'}
              name={'jobTitle'}
              placeholder={'Enter job title'}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              label={'Department'}
              value={'Software'}
              id={'dept'}
              name={'dept'}
              placeholder={'Enter department'}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              label={'Last Logged In'}
              value={'June 05, 2022.  12:24:55 GMT +5'}
              id={'lastlgin'}
              name={'lastlgin'}
              isDisable={true}
              placeholder={'Enter department'}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              label={'User Description'}
              value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              id={'userDes'}
              name={'userDes'}
              placeholder={'Enter user description'}
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Profile;
