import React from 'react';
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CustomInput = ({
  label,
  value,
  id,
  name,
  placeholder,
  type = 'text',
  isDisable = false,
}) => {
  return (
    <Stack spacing={0.75}>
      {label && (
        <Typography
          variant="body1"
          color={'blue'}
          fontWeight="fontWeightMedium"
        >
          {label}
        </Typography>
      )}
      {isDisable ? (
        <Box height={'48px'} display="flex" alignItems="center">
          <Typography
            variant="body1"
            color={'grey'}
            fontWeight="fontWeightMedium"
          >
            {value}
          </Typography>
        </Box>
      ) : (
        <>
          <TextField
            maxRows={4}
            id={id}
            multiline
            name={name}
            value={value}
            type={type}
          />
        </>
      )}
    </Stack>
  );
};

export default CustomInput;
