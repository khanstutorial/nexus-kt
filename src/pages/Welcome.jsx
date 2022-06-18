import React from 'react';
import Header from '../components/Header/Header';
import KTLogo from '../assets/images/svgs/KTLogo';
import { Typography } from '@mui/material';
import CustomTextBox from '../features/Custom-TextBox/CustomTextBox';

const Welcome = () => {
  return (
    <CustomTextBox
      content={` I recommend for the navigation bar at the top of your page, use the font
        we use everywhere (at least I try to get people to use it as much as I
        can -- I am only one person), which is Poppins. Stick with the bold
        version of the typeface. Bold black text on plain white is your best bet
        of people actually paying attention to what’s in front of them. Follow
        the grey login button but if you really don’t like it, use our carolina
        blue color. HEX code: #58a8dc You should also do hover animations like
        transitioning color or something to just make people feel good about
        clicking (which is the end goal). Always have a 0.4s transision on the
        animations with ease-all animation timing (at least thats the term for
        html css code -- idk what you’re using).`}
    />
  );
};

export default Welcome;
