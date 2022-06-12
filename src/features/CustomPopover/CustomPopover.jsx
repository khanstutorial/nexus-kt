import * as React from 'react';
import { Popover, Typography, Button } from '@mui/material';

const CustomPopover = ({ label, options }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Typography
        variant="h5"
        fontWeight="fontWeightBold"
        aria-describedby={id}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      >
        {label}
      </Typography>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div
          name="saqib"
          style={{
            backgroundColor: '#2151A1',
            opacity: '75%',
            color: 'white',
            padding: '20px',
          }}
        >
          {options.map(opt => {
            return (
              <Typography key={opt} variant="h5" fontWeight={'fontWeightBold'}>
                {opt}
              </Typography>
            );
          })}
        </div>
      </Popover>
    </div>
  );
};

export default CustomPopover;
