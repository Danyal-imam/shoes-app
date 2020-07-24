import React from 'react'
import {Grid, Typography,Button} from '@material-ui/core';
import  styles from './Alert.css'

function Alert() {
    return (
        <div className="alert-bg">
            <Grid container >
                <Grid item xs={12} sm={6} className="mid" >
                <div >
                <Typography variant="h3" gutterBottom>WE’LL KEEP YOU POSTED</Typography>
                <Typography variant="body1" gutterBottom>Get the latest news on deals, product launches, collaborations and more</Typography>
                </div>
                <Button variant="contained" color="secondary" className="btn">SIGN UP</Button>
                </Grid>
                <Grid item xs={12} sm={6} className="pic1">
                    <img  src="https://www.converse.com.au/media/wysiwyg/D_HP_Sign-Up.jpg" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Alert
