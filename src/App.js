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
import TableChartIcon from '@material-ui/icons/TableChart';
import FormFactory from './FormFactory'
import Draggable from 'react-draggable';

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
  const [component, setComponent] = React.useState([])


  const addComponent  = (type)=> {
    const newComponents = [...component, type];
    setComponent(newComponents)
  }

  const options =  [<TextFieldsIcon onClick={()=> addComponent('textBox')} />,
    <DescriptionIcon onClick={()=> addComponent('textArea')} />,
    <CheckBoxIcon onClick={()=> addComponent('checkBox')} />,
    <RadioButtonCheckedIcon  onClick={()=> addComponent('radio')}/>,
    <ListIcon onClick={()=> addComponent('list')} />,
    <TableChartIcon onClick={()=> addComponent('tables')} />,];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.toolsContainer}>
          <Paper className={
           clsx(classes.paper,classes.tools)}>
            {options.map(o => o)}
          </Paper>
        </div>
        <Grid className={classes.container}   item xs={8}>
          <Paper className={classes.paper}>
           <div>Form</div>
           <Grid  container >
            {component.map(c=>  <Draggable><Grid className={classes.container}  item sm={6}>{FormFactory(c)}</Grid></Draggable>)}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
