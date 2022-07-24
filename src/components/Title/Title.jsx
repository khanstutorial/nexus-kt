import React from 'react'
import { Box, Grid, Typography } from '@mui/material';

const Title = ({ title = "Welcome to Khan's Tutorial", align = 'center' }) => {
  return (
    <div
      style={{
        backgroundColor: '#2151A1',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
      }}>
      <Typography variant='h3' fontWeight={'bold'} sx={{ textTransform: 'capitalize', letterSpacing: '0.2rem' }}>
        {title}
      </Typography>
    </div>
  )
}

export default Title

