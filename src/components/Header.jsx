import React from 'react';
import '../assets/styles/header.css';
import ComputerIcon from '@mui/icons-material/Computer';
import { AppBar, Grid, Link, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function Header() {
    const theme = useTheme();
    const isPhoneScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const appBarHeight = isPhoneScreen ? '80px' : '64px';
	return (
            <AppBar position='static' sx={{background: '#b2b2b2', justifyContent: 'center', padding: '20px', height: appBarHeight}}>
              <Toolbar sx={{ justifyContent: 'center' }}>
                <Grid container columnSpacing={3} sx={{display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Grid item>
                    <Link href='/' style={{ textDecoration: 'none' }} sx={{ fontSize: '2rem', color: '#fff' }}><ComputerIcon sx={{ fontSize: '3rem', color: '#fff' }}/></Link>
                  </Grid>
                  <Grid item>
                    <Link href='https://blog.yuuriya.tech' style={{ textDecoration: 'none' }} sx={{ fontSize: '2rem', color: '#fff' }}>Blog</Link>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
	);

}

export default Header;
