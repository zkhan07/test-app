import React from 'react'
import { DropDown } from '../../../ReuseComponent/DropDown';
import { MenuItem, InputLabel, Typography, Divider, FormControl, Select } from '@material-ui/core';
import useStyles from './HomePage.style'


export const HomePage = () => {
    
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    // console.log(event.target.value)
  };

    return (
        <>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
       <div>
         {
         age==10?    
         <Typography>
           this is for 10 text 
         </Typography>:
         age==20?
         <Typography>
         this is for 20 text 
       </Typography>
       :
        age==30?
        <Typography>
        this is for 30 text 
      </Typography>
      : ''
        
        }
        </div>
    </>
    )
}
