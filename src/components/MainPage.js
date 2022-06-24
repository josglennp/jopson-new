import React, {useState} from 'react'
import Header from './Header'
import {Tab, Box, Grid, Typography, Tooltip} from '@mui/material'
import {TabContext,TabList,TabPanel,} from '@mui/lab'

import accountLogo from '../assets/images/account-icon.png'
import { colorStyle } from '../assets/colors'

import Dashboard from '../components/admin/Dashboard'
import Project from './admin/Project'
import Footer from './Footer'

const MainPage = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
    setValue(newValue);
    }
    return (
        <div>
            <Header />
            <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item  xs={6}>
            <Typography variant='h4' sx={{color: colorStyle.primaryColor, padding:2}}>ADMIN DASHBOARD</Typography>
            </Grid>
            <Grid item>
            <Tooltip >
            <img src={accountLogo} 
            style={{
                height:'4em',
                width:'7em', 
                paddingTop:4,
                paddingRight:10
            }}
            />
            </Tooltip>
            </Grid>
            </Grid>


            <TabContext value={value}>
                <Box sx={{ borderBottom: 2, borderColor: 'divider', marginLeft: 10 }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" scrollButtons={true}>
                    <Tab label="Dashboard" value="1" />
                    <Tab label="Projects" value="2" />
                    <Tab label="Manage Accounts" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1"><Dashboard /></TabPanel>
                <TabPanel value="2"><Project /></TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>


            <Footer />
        </div>



    )
}

export default MainPage