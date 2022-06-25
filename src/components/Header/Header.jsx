import React from 'react';
import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomPopover from '../../features/CustomPopover/CustomPopover';
import { SECTIONS, AFTER_LOGIN } from '../../constants';
import useMediaQuery from '@mui/material/useMediaQuery';

// import KT from './../../assets/images/svgs/KTLogo';
import favicon from './../../assets/images/favicon.png';

const Header = props => {
  const theme = useTheme();
  const [isLoggedIn, setLoggedIn] = useState(false);

  function showProfileOptions(e) {
    e.preventDefault();
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="flex-end"
      paddingRight={'15px'}
      direction={'row'}
    >
      <Grid item md={6}>
        <img
          src={favicon}
          style={{ paddingTop: '15px', paddingBottom: '15px' }}
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
            <CustomPopover
              key={'profileIcon'}
              label={'profile'}
              options={AFTER_LOGIN}
            />
            {/* </div> */}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
