import React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import './style.css'
import { colorStyle } from '../assets/colors'
import logo from '../assets/images/jopson-logo.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const LoginPage = () => {
    return (
        <div className='login'>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item lg={6} md={6} sm={10} xs={10}>
                    <Paper justifyContent="center">
                        <div className='login_form_container'>
                            <img src={logo} alt="jopson-logo" className='jopson_form_logo' />
                                <Typography variant='h4' style={{color:colorStyle.primaryColor, textAlign:'center'}}>Jop-son Enterprises</Typography>
                            <TextField label="USER NAME" type="text" fullWidth margin='normal' size='small'  />
                            <TextField label="PASSWORD" type="password" fullWidth size='small' />
                            <br/>
                            <Link to='/dashboard' style={{width:'100%', textDecoration: 'none'}}>
                                <Button variant='contained' fullWidth size='large'>
                                    LOGIN
                                </Button>
                            </Link>
                            <br/>
                            <span><a>Forgot Password? Click here</a></span>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            
            <Footer />
        </div>
    )
}

export default LoginPage