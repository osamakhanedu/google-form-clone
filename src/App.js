import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  container:{
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  toolsContainer:{
    position: 'fixed',
    right: '20px',
    top: '20px',
    width: '80px',
    height: '150px',

  },
  tools:{
    height:'100%',
  }

}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.toolsContainer}>
          <Paper className={
           clsx(classes.paper,classes.tools)}>
            Tools
          </Paper>
        </div>
        <Grid className={classes.container}  item xs={8}>
          <Paper className={classes.paper}>Form</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
