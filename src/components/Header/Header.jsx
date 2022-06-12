import React from 'react';
import { Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Variant } from '@mui/material/styles/createTypography';

// import KT from './../../assets/images/svgs/KTLogo';
import favicon from './../../assets/images/favicon.png';

const Header = props => {
  const theme = useTheme();
  // To check for the breakpoint to occur - Mobile Responsive
  // const isSmall = useMediaQuery(theme.breakpoints.up('md'));

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
      <Grid item xs={1.5} md={1.5}>
        <Typography variant="h5" fontWeight="fontWeightBold">
          Section 1
        </Typography>
      </Grid>
      <Grid item xs={1.5} md={1.5}>
        <Typography variant="h5" fontWeight="fontWeightBold">
          Section 2
        </Typography>
      </Grid>
      <Grid item xs={1.5} md={1.5}>
        <Typography variant="h5" fontWeight="fontWeightBold">
          Section 3
        </Typography>
      </Grid>
      <Grid item xs={1.5} md={1}>
        <Typography
          variant="h5"
          fontWeight="fontWeightBold"
          sx={{
            border: '1px solid',
            textAlign: 'center',
            backgroundColor: '#58a8dc',
            color: 'white',
            borderRadius: '10px',
          }}
        >
          Login
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
