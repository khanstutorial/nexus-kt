import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const DisplayStatus = (props) => {
  return (
    <div>
        <span>{props.labelName}</span><br />
        <span>||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</span>
    </div>
  );
};

export default DisplayStatus;
