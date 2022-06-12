import React from 'react';
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
  console.log(SECTIONS);

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
          <Grid item xs={1.5} key={section.id} md={1.5}>
            <CustomPopover label={section.name} options={section.options} />
          </Grid>
        );
      })}

      {/* <Grid item xs={1.5} md={1.5}>
        <CustomPopover label={'Section 1'} options={['Option-1', 'Option-2']} />
      </Grid> */}
      {/* <Grid item xs={1.5} md={1.5}>
        <CustomPopover label={'Section 2'} options={['Option-1', 'Option-2']} />
      </Grid>
      <Grid item xs={1.5} md={1.5}>
        <CustomPopover label={'Section 3'} options={['Option-1', 'Option-2']} />
      </Grid> */}
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
