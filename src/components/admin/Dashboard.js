import React from 'react'
import { Typography, Grid, Paper } from '@mui/material'
import accountLogo from '../../assets/images/account-icon.png'
import { colorStyle } from '../../assets/colors'

const Dashboard = () => {

    const menu = [
       {
        name: 'Total Project',
        statu: '(Active)',
        outOf: 12
        },
        {
        name: 'Total Preventive Maintenance',
        statu: '(Active)',
        outOf: 4
        },
        {
        name: 'Total Retentions',
        statu: '(Active)',
        outOf: 34
        },
    ]
    const menu2 = [
        {
         name: 'Total Collectibles',
         statu: '(Active)',
         outOf: 11
         },
         {
         name: 'Total Retention Collectibles',
         statu: '(Active)',
         outOf: 23
         },
         {
         name: 'Total Net Expenses',
         statu: '(Active)',
         outOf: 12
         },
     ]
    return (
        <div>
            <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item  xs={6}>
            <Typography variant='h4' sx={{color: colorStyle.primaryColor}}>ADMIN DASHBOARD</Typography>
            </Grid>
            <Grid item>
            <img src={accountLogo} 
            style={{
                height:'4em',
                width:'7em', 
            }}
            />
            </Grid>
            </Grid>
            <hr style={{width: '100%', border:'1px solid grey', marginLeft: 30}}/>

            {/* Dashboard Data */}
            <Grid container justifyContent='space-around' sx={{padding:'0 10%',}}>
                {
                    menu.map((menu) => (
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Paper sx={{height:'10em', marginTop: '5px', cursor:'pointer'}}>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'100%'}}>
                                <div>
                                <Typography variant='h6' textAlign='center' component='div' sx={{display:'flex', flexDirection:'column'}}>
                                    <span>{menu.name}</span>
                                    <span>{menu.statu}</span>
                                </Typography>
                                </div>
                                <div style={{width:'100%'}}>
                                <Typography variant='h5' textAlign='center' component='div' sx={{width:'100%'}}>
                                    <span >{menu.outOf} out of 123</span>
                                </Typography>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    ))
                }
                
            </Grid>
            <Grid container justifyContent='space-around' sx={{padding:'0 10%',}}>
                {
                    menu2.map((menu) => (
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Paper sx={{height:'10em', marginTop: '5px', cursor:'pointer'}}>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'100%'}}>
                                <div>
                                <Typography variant='h6' textAlign='center' component='div' sx={{display:'flex', flexDirection:'column'}}>
                                    <span>{menu.name}</span>
                                    <span>{menu.statu}</span>
                                </Typography>
                                </div>
                                <div style={{width:'100%'}}>
                                <Typography variant='h5' textAlign='center' component='div' sx={{width:'100%'}}>
                                    <span >{menu.outOf} out of 123</span>
                                </Typography>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    ))
                }
                
            </Grid>
        </div>
    )
}

export default Dashboard