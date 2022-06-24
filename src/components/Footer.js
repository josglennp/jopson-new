import React from 'react'

const Footer = () => {
    return (
        <div style={styles.footerContainer} >
            Copyright Ⓒ 2020-2022 Jop-Son Enterprises - All Rights Reserve.
        </div>
    )
}


const styles = {
    footerContainer: {
    padding: '10px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#888',
    color: 'white',
    textAlign: 'center',
    },

}
export default Footer