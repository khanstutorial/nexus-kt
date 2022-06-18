import React from 'react';
import { Typography } from '@mui/material';

const CustomTextBox = ({ content }) => {
  return (
    <>
      <Typography sx={{ padding: '50px', backgroundColor: 'white' }}>
        {content}
      </Typography>
    </>
  );
};

export default CustomTextBox;
