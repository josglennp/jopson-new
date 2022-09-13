import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/jopson-logo.png'

const Header = () => {
    return (
        <div>
        <div style={{width:'100%', backgroundColor:'#112952',border:'1px solid black', textAlign:'right', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <Link to='/admin'>
            <img src={logo} 
            alt="logo"
            style={{
                height:'4em',
                width:'9em', 
                margin: '.5em',
                marginLeft:'.9em',
            }}
            />
            </Link>
            <Typography variant='h4' style={{color: '#FFFF', paddingRight:'20px'}}>Jop-Son Enterprises</Typography>
        </div>
    </div>
    )
}

export default Header