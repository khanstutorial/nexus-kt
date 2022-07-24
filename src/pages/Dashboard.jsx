import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Status from './Status';
import Artboard from './../assets/images/Artboard.png';
import CustomTextBox from '../features/Custom-TextBox/CustomTextBox';
import Title from '../components/Title/Title';

const Dashboard = () => {
  return (
    <>
      <Title />
      <div
        style={{
          marginLeft: '100px',
          marginRight: '100px',
          paddingTop: '5px',
          paddingBottom: '20px',
          minHeight: 'fit-content',

        }}>

        <Grid container>
          <Grid
            item
            xs={4}
            sx={{
              border: '1px solid',
              borderRadius: '10px',
              marginTop: '3%',
              marginRight: '3%',
              padding: '3%',
              backgroundColor: 'white',
            }}
          >
            <Status />
          </Grid>
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            xs={7}
            sx={{
              border: '1px solid',
              borderRadius: '10px',
              marginTop: '3%',
              marginLeft: '2%',
              padding: '3%',
              backgroundColor: 'white',
            }}
          >
            <Grid item>
              <img
                src={Artboard}
                style={{ paddingTop: '15px', paddingBottom: '15px' }}
              ></img>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="h2">
                Next Scheduled Maintenance
              </Typography>
              <Typography variant="h6" component="h2">
                MAINTENANCE TITLE
              </Typography>
              <Typography variant="h6" component="h2">
                MAINTENANCE DESCRIPTION
              </Typography>
              <Typography variant="h6" component="h2">
                MAINTENANCE TIME
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={11.6}
            sx={{
              border: '1px solid',
              borderRadius: '10px',
              marginTop: '3%',
              padding: '3%',
              backgroundColor: 'white',
            }}
          >
            <Typography variant="h6" component="h2" sx={{ textAlign: 'center' }}>
              KT Gazette
            </Typography>
            <CustomTextBox
              content={`Lorem Ipsum: usage Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original. In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. `}
            />
          </Grid>
        </Grid>
      </div>

    </>
  );
};

export default Dashboard;
