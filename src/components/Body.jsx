import React from 'react';
import '../assets/styles/body.css';
import { Box, Grid} from '@mui/material';

function Body() {
    return(
        <Box className='container'>
          <Grid container spacing={1}>
            <Grid item xs={4} md={8}>
              <h1>
                Hello! Greeting
              </h1>
              <h2>
                I'm Pramudya Arya Wicaksana
              </h2>
            </Grid>
          </Grid>
        </Box>
    );
}

export default Body;
