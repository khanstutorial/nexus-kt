import React from 'react';
import { Typography } from '@mui/material';
import CustomTextBox from './../features/Custom-TextBox/CustomTextBox';

const About = () => {
  return (
    <div style={{ paddingTop: '3%', paddingBottom: '3%' }}>
      <Typography
        variant="h3"
        fontWeight="fontWeightBold"
        component="h2"
        sx={{ textAlign: 'center' }}
      >
        About Us
      </Typography>
      <CustomTextBox
        bgColor="#F5F5F5"
        fontWeight={'fontWeightMedium'}
        textAlign={'center'}
        content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
      />
    </div>
  );
};

export default About;
