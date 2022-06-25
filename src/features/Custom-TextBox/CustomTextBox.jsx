import React from 'react';
import { Typography } from '@mui/material';

const CustomTextBox = ({
  content,
  bgColor = 'white',
  fontWeight = 'fontWeightRegular',
  textAlign = 'left',
}) => {
  return (
    <>
      <Typography
        fontWeight={fontWeight}
        textAlign={textAlign}
        sx={{ padding: '50px', backgroundColor: bgColor }}
      >
        {content}
      </Typography>
    </>
  );
};

export default CustomTextBox;
