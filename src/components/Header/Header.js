import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <Container className="wrap">
            <Grid container alignItems='center' item xs={12}>
                <Grid item xs={6}> 
                    <img id='logo' src={logo} alt="web logo"/>
                </Grid>
                <Grid container justify='space-around' alignItems='center' item xs={6}>
                    <Link style={{textDecoration:'none', color:'black', fontSize:'18px'}} to='/'>Home</Link>
                    <Link style={{textDecoration:'none', color:'black', fontSize:'18px', marginLeft: '15px'}} to='/'>Donation</Link>
                    <Link style={{textDecoration:'none', color:'black', fontSize:'18px', marginLeft: '15px'}} to='/event'>Events</Link>
                    <Link style={{textDecoration:'none', color:'black', fontSize:'18px', marginLeft: '15px'}} to='/'>Blog</Link>
                    <Link to='/register'><Button style={{color:'white', background:'#3F90FC', padding: '8px 25px', marginLeft: '15px'}} variant="contained">Register</Button></Link>
                    <Link to='/login'><Button style={{color:'white', background:'#434141', padding: '8px 25px'}} variant="contained">Admin</Button></Link>
                </Grid>
            </Grid>
            </Container>
    );
};

export default Header;