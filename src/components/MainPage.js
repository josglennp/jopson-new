import React, {useState} from 'react'
import Header from './Header'
import {Tab, Box} from '@mui/material'
import {TabContext,TabList,TabPanel,} from '@mui/lab'

import Dashboard from '../components/admin/Dashboard'

const MainPage = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
    setValue(newValue);
    }
    return (
        <div>
            <Header />
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Dashboard" value="1" />
                    <Tab label="Projects" value="2" />
                    <Tab label="Manage Accounts" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1"><Dashboard /></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </div>
    )
}

export default MainPage