import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import clsx from 'clsx';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import DescriptionIcon from '@material-ui/icons/Description';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ListIcon from '@material-ui/icons/List';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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
    height: '180px',

  },
  tools:{
    height:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& svg:hover':{
      cursor:'pointer'
    }
  }

}));



function App() {
  const classes = useStyles();

  // const options =  [TextFieldsIcon,DescriptionIcon,CheckBoxIcon,RadioButtonCheckedIcon,ListIcon]

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.toolsContainer}>
          <Paper className={
           clsx(classes.paper,classes.tools)}>
            <TextFieldsIcon />
            <DescriptionIcon /> 
            <CheckBoxIcon />
            <RadioButtonCheckedIcon />
            <ListIcon />
          </Paper>
        </div>
        <Grid className={classes.container}  item xs={8}>
          <Paper className={classes.paper}>
           <div>Form</div>
          
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
