import * as React from 'react';
import { Popover, Typography, Button } from '@mui/material';
import './style.css'

const CustomPopover = ({ label, options, key }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = event => {
  //   console.log("oyeee");
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Typography
        variant="h5"
        key={key}
        className="section"
        fontWeight="fontWeightBold"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {label}
      </Typography>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        disableRestoreFocus
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div
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
