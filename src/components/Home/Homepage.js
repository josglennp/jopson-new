import { Button, Typography } from '@mui/material';
import React from 'react';
import BgImage from '../../assets/images/bg.jpeg'
import gearGif from '../../assets/images/gear.gif'
import JopsonLogo from '../../assets/images/jopson-logo.png'
import './style.css'
function Homepage(props) {
    return (
        <div style={styles.padding}>
            <div className='bg-container'>
                <div style={styles.gearContainer}>
                    <img alt="gear" src={gearGif}  style={styles.gear}/>
                </div>
                <div style={styles.titleContainer}>
                    <img alt='logo' src={JopsonLogo}  style={styles.logo}/>
                    <Typography variant='h2' style={styles.homeName}> Jop-Son Enterprises </Typography>
                    <Button size='large' variant='outlined' style={styles.homeButton}>Get Started</Button>
                </div>
            </div>
                <img alt='bg' src={BgImage} className="bg" />
        </div>
    );
}

export default Homepage;


const styles = {
    container: { 
        padding: 0
    },
    homeName: {
        padding: 2,
        fontWeight: '350'
    },
    homeButton: {
        margin: 10,
        fontSize: '30px',
        borderRadius: '10px'
    },
    gearContainer: {
        position: 'absolute',
        marginTop: '5%',
        alignItems: 'right',
        // border: '1px solid green',
        width: '100%',
        paddingLeft : '70%'
    },
    gear: {
        height: '100%',
        width: '15%'
    },
    logo: {
        height: '30%',
        width: '30%'
    },
    titleContainer: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid green',
        height: '100%',

    }

}