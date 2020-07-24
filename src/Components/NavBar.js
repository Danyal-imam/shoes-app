import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    justifyContent:'space-around',
    alignItems:'center',
  },
 
  link: {
   textDecoration:"none",
   color:"#fff",

  },
  title: {
  }

}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" >
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.link}>Home</Link>
          </Typography>
          
          <Typography >
            <Link to='men'className={classes.link}>Men</Link>
          </Typography>
          <Typography >
          <Link to='women' className={classes.link}>Women</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
