import React from 'react'
import {Card} from '@mui/material';

const Footer = () => {
  return (
    <Card sx={{ padding: '35px' }}>
      <span>Fetching new tweets</span><br />
      <span>Updates provided via the @stripestatus Twitter feed—follow us there!</span>
    </Card>
  )
}

export default Footer