import React from 'react'
import { Typography, Box } from '@mui/material'

const Header = (props) => {
  return (
    <Box sx={{marginTop:'20px'}}>
      <Typography variant='h6' sx={{  paddingRight:'2px', float:'left' }}>
        <b>{props.name}</b>
      </Typography>
      <Typography  variant='h6' color={'blue'}>{props.content}</Typography>
    </Box>
  )
}

export default Header