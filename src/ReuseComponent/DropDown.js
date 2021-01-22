import React from 'react'
import useStyles from '../Components/Dashboard/Dashboard.style'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


export const DropDown = (props) => {
    const [age, setAge] = React.useState('');

    const classes=useStyles();
console.log(props)

// const value= props.children.props.value
// const children = props.children

const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value)
  };
    return (
    <FormControl className={classes.formControl} >
        <InputLabel id="demo-controlled-open-select-label">
            {props.InputLabel}
        </InputLabel>
        <Select
          className={classes.select}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={props.open}
          onClose={()=>props.handleClose()}
          onOpen={()=>props.handleOpen()}
          value={age}
          onChange={handleChange}
        >
            {props.children.map((children)=>(
                <MenuItem value={children.props.value}>
                {children.props.value}
                </MenuItem> 
            ))}
        </Select>
      </FormControl>            
       
    )
}
