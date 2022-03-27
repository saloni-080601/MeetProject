import { useState } from 'react'; 
import React from 'react'
import PropTypes from 'prop-types';
import {Box,Tabs ,Tab,Typography,Grid, AppBar,Toolbar} from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import logo from "../image/tea.png"
import ProfileCard from './ProfileCard';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
 }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  function Header() {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      
      <Box >
        <AppBar style={{backgroundColor:"white"}}>
          <Toolbar>
            <Grid container sx={12}>
              <Grid item sx={2}>
              <img src={logo} alt="Logo" style={{height:"50%", weight:"70%",paddingTop:"25px"}} />;
              </Grid>
              <Grid item sx={1}/>
              <Grid item sx={5}  style={{color:"black",margin:"auto"}}>
                <Tabs value={value} textColor="inherit" indicatorColor="secondary" onChange={handleChange} style={{alignItems:"center"}}>  
              <Tab icon={< PersonPinIcon/>} label="Discovery" {...a11yProps(0)} />
              <Tab icon={< GroupIcon/>} label="Invite" {...a11yProps(1)} />
              <Tab icon={< GroupIcon/>} label="Support" {...a11yProps(2)} />  
            </Tabs>
          </Grid>
          <Grid item sx={2}/>
          <Grid item sx={2}>
         <  Stack direction="row" spacing={2} sx={{mt:3}}>
        
        <Button variant='outlined' className='btn' style={{color:"green", borderRadius:"2px green"}}>
            Post Job
        </Button>
        <Button variant="contained" color="success" className='btn-2'>
            Sign In
        </Button>
    </Stack>
          </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
       
        {/* <Grid  sx={{ borderBottom: "2px", borderColor: 'divider',backgroundColor:"white", }} className="box" container>
        <Grid item xs style={{textAlign:"left"}}>
        
        </Grid>
        <Grid item xs >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs'>  
            <Tab icon={< PersonPinIcon/>} label="Discovery" {...a11yProps(0)} />
            <Tab icon={< GroupIcon/>} label="Invite" {...a11yProps(1)} />
            <Tab icon={< GroupIcon/>} label="Support" {...a11yProps(2)} />  
          </Tabs>
        </Grid>
        <Grid item xs>
          <Stack direction="row" spacing={2} sx={{mt:3}}>
        
        <Button variant='outlined' className='btn' style={{color:"green", borderRadius:"2px green"}}>
            Post Job
        </Button>
        <Button variant="contained" color="success" className='btn-2'>
            Sign In
        </Button>
    </Stack>
    </Grid>
     </Grid> */}
       <Box style={{marginTop:"130px"}}>
        <TabPanel value={value} index={0} >
          <ProfileCard/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Typography gutterBottom variant="h1" component="div" >
        < GroupIcon style={{fontSize:"100px"}}/>  Invite
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Typography gutterBottom variant="h1" component="div" >
        <GroupIcon style={{fontSize:"100px"}}/>  Support
            </Typography>
        </TabPanel>
        </Box>
      </Box>
     
    );
}export default Header
