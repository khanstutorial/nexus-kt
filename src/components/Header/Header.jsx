import React from 'react';
import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomPopover from '../../features/CustomPopover/CustomPopover';
import { SECTIONS } from '../../constants';
import useMediaQuery from '@mui/material/useMediaQuery';

// import KT from './../../assets/images/svgs/KTLogo';
import favicon from './../../assets/images/favicon.png';

const Header = props => {
  const theme = useTheme();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const optionsH = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="flex-start"
      marginLeft='100px'
      marginRight='100px'
      width='unset !important'
      direction={'row'}
    >
      <Grid item md={6}>
        <img height='100px'
          src={favicon}
        ></img>
      </Grid>
      {SECTIONS.map(section => {
        return (
          <Grid item xs={1.5} md={1.5}>
            <CustomPopover
              key={section.id}
              label={section.name}
              options={section.options}
            />
          </Grid>
        );
      })}
      <Grid item xs={1.5} md={1}>
        {isLoggedIn ? (
          <Typography
            variant="h5"
            fontWeight="fontWeightBold"
            sx={{
              border: '1px solid',
              textAlign: 'center',
              backgroundColor: '#58a8dc',
              color: 'white',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            Login
          </Typography>
        ) : (
          <>
            {/* <img
              src={favicon}
              alt="Avatar"
              style={{
                border: '1px solid',
                borderRadius: '50%',
                paddingRight: '5px',
              }}
            /> */}
            {/* <div
              style={{
                backgroundColor: '#959FFF',
                border: '1px solid',
                borderRadius: '50%',
                paddingRight: '5px',
                width: '50px',
                height: '50px',
              }}
            > */}
            <CustomPopover
              key={'234'}
              label={"image"}
              options={optionsH}
            />
            {/* </div> */}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
