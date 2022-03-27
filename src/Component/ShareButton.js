import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShareIcon from '@material-ui/icons/Share';
 function ShareButton() {
  return (
    <Stack direction="row" spacing={3} style={{position: "absolute",margin:"auto"
    }}>
      <Button variant="outlined"  href="https://www.google.com/search?q=gmail&oq=gmail&aqs=chrome.0.69i59l2j0i433i512l3j69i60l2j69i61.3015j0j7&client=ubuntu&sourceid=chrome&ie=UTF-8" style={{borderColor:"green" 
      ,color:"green",backgroundColor:"white",marginTop:"55px"}}>
        <ShareIcon/> Share
      </Button>
    </Stack>
  );
}
export default ShareButton
