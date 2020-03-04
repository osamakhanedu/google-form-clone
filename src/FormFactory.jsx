import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function FormFactory(type) {
   
    console.log(type);
    
    switch (type) {
        case 'textBox':
            return <TextField id="standard-basic" label="Label" />;
        
    
        case 'textArea':
        return <TextareaAutosize aria-label="minimum height" rowsMin={4} placeholder="Description" />
        
                
        case 'checkBox':
        return <Checkbox
        
        value="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        
        
        case 'radio':
            return <FormControlLabel value="female" control={<Radio />} label="Label" />
        break;
        case 'list':
            
        break;
        case 'texttablesBox':
            
        break;

        default:
            return null;
    }
}
