import React from 'react'
import {Typography,Box} from '@material-ui/core'
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import images from "../image/man.png"
import ShareButton from './ShareButton';
import jbm from "../image/jbm.jpg"
import { borderRight } from '@mui/system';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


 function ProfileCard() {
  return (
    <>
    <Paper
      sx={{
        margin: 'auto',
        maxWidth: 990,
        borrderRadius:"20px",
        borderShadow:"30px",
        borderRight:"2px solid green",
        position: "relative",
                backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={0} style={{textAlign:"left"}}>
        <Grid item>
          <ButtonBase sx={{ width: 365, height: 500, }}>
            <Img alt="complex" src={images} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container style={{marginTop:"60px", marginLeft:"20px"}} >
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs >
              <Typography gutterBottom variant="p" component="div" >
              <b>Pabhjinder Singh Aulakh | <AddLocationIcon />  </b> <span>Lucknow, Uttar Pradesh</span></Typography>
              <Box sx={{ flexGrow: 1 ,marginTop:30}} >
                <Grid container spacing={0}>
                  <Grid item xs={1}>
                    <Typography style={{color:"green"}}><BusinessCenterIcon/></Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography style={{color:"green"}}>EXPERIENCE <span style={{borderRadius:"5px", backgroundColor:"green",padding:"2px",color:"white"}}>2 yrs Exp</span></Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1,marginTop:30 }}>
                <Grid container spacing={0}>
                  <Grid item xs={1}>
                    <Img src={jbm}/>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography >Fitter <br/>JBM Auto Ltd<br/><date>Apr 2020 - Sep 2020</date></Typography>
                    <Typography variant='p' component="div" style={{marginTop:"30"}}>
                    Assembly line पर automobile parts जेसे console box cover, door striker, fuel Laval sticker की asemblying करना low torking machine का use करना
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1,marginTop:30}}>
                <Grid container spacing={0}>
                  <Grid item xs={1}>
                    <Typography style={{color:"green"}}><SchoolIcon/></Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography style={{color:"green"}}>EDUCATION</Typography>
                    <Typography variant='p' component="div" sx={{marginTop:30}}>
                    <b>UG Diploma—Electronics Engineering</b>
                    </Typography>
                    <Typography variant='p' component="div">
                          The Indian Institute of Welding | 2020
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <ShareButton/>
            </Grid>
            
          </Grid>
          

        </Grid>
        
      </Grid>
      
    </Paper>
    
    </>
  )
}export default ProfileCard
