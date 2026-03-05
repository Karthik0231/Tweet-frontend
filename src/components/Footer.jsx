import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <Box sx={{border:'2px solid black', borderRadius:5, backgroundColor:'grey'}}>
            <Typography sx={{textAlign:'center', fontWeight:'bold', padding:'10px'}}>
                Designed by EcomXpress.com
            </Typography>
        </Box>
    </div>
  )
}
