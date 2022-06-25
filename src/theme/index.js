import { createTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import { responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
 createTheme({
  // palette: {
  //   background: {
  //     default: colors.ostrichEgg,
  //   },
  //   primary: {
  //     main: colors.purple01,
  //   },
  //   secondary: {
  //     main: colors.marsMaroon,
  //   },
  //   text: {
  //     primary: colors.purple01,
  //     secondary: colors.fiord,
  //     disabled: colors.purple03,
  //   },
  //   success: {
  //     main: '#366f55',
  //   },
  //   error: {
  //     main: '#ab3c3c',
  //   },
  // },
  typography: {
   fontSize: 16,
   fontFamily: 'Poppins',
   fontWeightLight: 300,
   fontWeightRegular: 400,
   fontWeightMedium: 600,
   fontWeightBold: 900,
   //    rating: {
   //     color: colors.sepia,
   //     fontFamily: 'Poppins',
   //     fontSize: '2.5em',
   //     marginRight: '10px',
   //    },
   h1: {
    fontSize: '80px',
   },
   h2: {
    fontSize: '72px',
    lineHeight: '0.95',
   },
   h3: { fontSize: '48px' },
   h4: { fontSize: '36px' },
   h5: { fontSize: '25px' },
   h6: { fontSize: '22px' },
   subtitle1: {
    fontSize: '18px',
   },
   subtitle2: {
    fontSize: '20px',
   },
   body1: { fontSize: '16px' },
   body2: { fontSize: '14px' },
   caption: { fontSize: '12px' },
  },
  breakpoints: {
   values: {
    xs: 0,
    sm: 600,
    md: 1280,
    lg: 1456,
    xl: 1600,
   },
   step: 4,
  },
  // spacing: 8,
  // components: {
  //   MuiButtonBase: {
  //     defaultProps: {
  //       disableRipple: true,
  //       disableTouchRipple: true,
  //     },
  //   },
  //   MuiButton: {
  //     defaultProps: {
  //       disableRipple: true,
  //       disableTouchRipple: true,
  //     },
  //     styleOverrides: {
  //       root: {
  //         height: '48px',
  //         textTransform: 'capitalize',
  //       },
  //       outlined: {
  //         border: `solid 2px ${colors.periwinkle}`,
  //         ':hover': {
  //           border: `solid 2px ${colors.periwinkle}`,
  //         },
  //       },
  //       text: {
  //         ':hover': {
  //           color: colors.indigoPrairie,
  //           backgroundColor: 'transparent',
  //         },
  //       },
  //     },
  //     variants: [
  //       {
  //         props: { variant: 'dashed' },
  //         style: {
  //           textTransform: 'uppercase',
  //           border: `2px dashed ${blue[500]}`,
  //         },
  //       },
  //       {
  //         props: { variant: 'dashed', color: 'secondary' },
  //         style: {
  //           textTransform: 'none',
  //           border: `4px dashed ${red[500]}`,
  //         },
  //       },
  //     ],
  //   },
  //   MuiFormHelperText: {
  //     styleOverrides: {
  //       root: {
  //         margin: '0px',
  //         color: colors.marsMaroon,
  //         backgroundColor: 'transparent',
  //       },
  //     },
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       input: {
  //         fontSize: '16px',
  //       },
  //       root: {
  //         width: '100%',
  //         height: '48px',
  //         padding: '14px',
  //         borderRadius: '4px',
  //         background: colors.white,
  //       },
  //     },
  //   },
  //   MuiAlert: {
  //     styleOverrides: {
  //       icon: {
  //         pading: '0px',
  //         alignItems: 'center',
  //       },
  //       action: {
  //         padding: '0px 0px 0px 16px',
  //         alignItems: 'center',
  //         '& .MuiIconButton-root': {
  //           padding: '0px 5px',
  //         },
  //       },
  //     },
  //   },
  //   MuiTextField: {
  //     styleOverrides: {
  //       root: {
  //         fontSize: '16px',
  //         borderRadius: '4px !important',
  //       },
  //     },
  //   },
  //   MuiLink: {
  //     styleOverrides: {
  //       root: {
  //         cursor: 'pointer',
  //       },
  //     },
  //   },
  //   MuiAccordion: {
  //     styleOverrides: {
  //       root: {
  //         boxShadow: 'none',
  //         '::before': { height: 0 },
  //       },
  //     },
  //   },
  //   MuiPopover: {
  //     styleOverrides: {
  //       root: {
  //         '&& svg': {
  //           paddingRight: '20px',
  //           color: colors.faInactive,
  //         },
  //         '&& ul': {
  //           padding: 0,
  //           borderRadius: 2,
  //           width: '250px',
  //           lineHeight: '3.44',
  //         },
  //         '&& li': {
  //           padding: '18px 20px',
  //           color: colors.menuText,
  //           '&:hover': {
  //             color: colors.menuText,
  //           },
  //           '&:hover svg': {
  //             color: colors.faActive,
  //           },
  //           // display: 'block',
  //           // lineHeight: 0,
  //         },
  //       },
  //     },
  //   },
  //   MuiCssBaseline: {
  //     styleOverrides: fontFace,
  //   },
  //   MuiIconButton: {
  //     styleOverrides: {
  //       root: {
  //         ':hover': { backgroundColor: 'transparent !important' },
  //       },
  //     },
  //   },
  //   // MuiList: {
  //   //   styleOverrides: {
  //   //     root: {
  //   //       padding: 0,
  //   //       borderRadius: '2px',
  //   //       // '&:hover': {
  //   //       //   backgroundColor: 'blue',
  //   //       // },
  //   //     },
  //   //   },
  //   // },
  // },
 })
);
