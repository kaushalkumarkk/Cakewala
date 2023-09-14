import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import cakeimg from '../images/cake.png'
const Section = () => {
  return (
    <Grid container direction= 'row' alignItems='center'>
        <Grid item xs={12} sm={6} order={{xs:2, sm:1}}>
            <Typography variant='h3'>
                welcome to cake Wala
            </Typography>
            <Typography variant='h5'>
                We offer testy cakes and sweets for you.
            </Typography>
            <Button variant='contained' size='large' sx={{borderRadius:5}}>
                Order Now

            </Button>
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent='center' order={{xs:1, sm:2}}>
            <Box component="img" src= {cakeimg}>

            </Box>
        </Grid>
    </Grid>
  )
}

export default Section