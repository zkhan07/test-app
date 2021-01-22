import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './Dashboard.style'
import { HomePage } from './HomePage/Home';
import { TasksPage } from './TasksPage/TasksPage';
import { UserPage } from './UserPage/UserPage';
import { Link, Redirect } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [password,setPassword]=useState(sessionStorage.getItem("password"))
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"));
  const [redirect,setRedirect]=useState(false)

useEffect(() => {

  if(!password && !userName){
  setRedirect(true)
}  

}, [])

if(redirect){
  return(<Redirect to="/"/>)
}


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default"> 
      {userName && password ?
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="red"
          
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        > 
         <Tab label="LOGO" {...a11yProps(4)} disabled/>                  
          
                         
          {value==0 ?<Tab label="Home" {...a11yProps(0)} style={{color:"white",backgroundColor:'black'}}/>:
          value==1?<Tab label="Home" {...a11yProps(0)} style={{color:"white",backgroundColor:'black'}}/>:
          <Tab label="Home" {...a11yProps(0)} />}
          {value==2?<Tab label="Tasks" {...a11yProps(2)} style={{color:"white",backgroundColor:'black'}} />:
          <Tab label="Tasks" {...a11yProps(2)} />}
          {value==3?<Tab label="User" {...a11yProps(3)} style={{color:"white",backgroundColor:'black'}}/>:
          <Tab label="User" {...a11yProps(3)} />}
        </Tabs>
        :''}
      </AppBar>
      {value==0  && userName && password? <TabPanel value={value} index={0}>
        <HomePage/>
      </TabPanel>:
      <TabPanel value={value} index={1}>
      <HomePage/>
      </TabPanel>}
      <TabPanel value={value} index={2}>
        <TasksPage/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UserPage/>
      </TabPanel>
    </div>
  );
}
