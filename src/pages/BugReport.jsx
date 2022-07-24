import React from 'react';
import { Grid, Card, Box, Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';
import CustomInput from '../features/Custom-Input/CustomInput';
import Title from '../components/Title/Title';
const BugReport = () => {
  return (
    <>
      <Title title="Bug Report" />
      <Container maxWidth="md" sx={{ marginLeft: '100px', marginRight: '100px', paddingLeft: '0px !important', paddingRight: '0px !important' }}>
        {/* <Box
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
            Bug Report
          </Typography>
        </Box> */}
        <Box sx={{
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '5%',
          paddingBottom: '5%'
        }}>
          <Box >
            <Grid container justifyContent='space-between' spacing={2} alignItems='center'>
              <Grid item xs={5}>
                <CustomInput
                  label={'Name'}
                  value={''}
                  id={'firstName'}
                  name={'firstName'}
                  placeholder={''}
                />
              </Grid>
              <Grid item xs={5}>
                <CustomInput
                  label={'Title'}
                  value={''}
                  id={'title'}
                  name={'title'}
                  placeholder={''}
                />
              </Grid>
              <Grid item xs={5}>
                <CustomInput
                  label={'Bug Type'}
                  value={''}
                  id={'bugType'}
                  name={'bugType'}
                  placeholder={''}
                />
              </Grid>
              <Grid item xs={5}>
                <CustomInput
                  label={'Attach Screenshot'}
                  value={''}
                  type={'upload'}
                  id={'screenshot'}
                  name={'screenshot'}
                  placeholder={''}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomInput
                  label={'Description'}
                  value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of. xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of `}
                  id={'description'}
                  name={'description'}
                  placeholder={'Enter bug description'}
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
    </>
  );
};

export default BugReport;
