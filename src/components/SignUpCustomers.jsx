import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const SignUpCustomers = () => {
    const handleSubmit=()=>{

    }
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width:'95%',
            paddingRight:'20px',
            
            
           
           
            
          },
        },
      }));
      const classes = useStyles();
    return (
        <Grid class="section" container spacing={3} style={{backgroundImage:'url(https://d39l2hkdp2esp1.cloudfront.net/img/photo/139451/139451_00_2x.jpg)'}} >
        <Grid class="container" style={{opacity:'0.9',paddingTop:'50px',backgroundImage:'url(https://themmit.com/wp-content/uploads/2018/06/All-You-Should-Know-About-Email-Marketing-Target-Audience.jpg)',backgroundPosition:'center top',backgroundSize:'155px',backgroundRepeat:'no-repeat'}} item xs={12}>
        
             <h1>Sign Up</h1>
            <form className={classes.root} onSubmit={handleSubmit}> 
            <TextField id="outlined-basic" label="First Name"  variant="outlined" />
            <TextField id="outlined-basic"  label="Last Name"  variant="outlined" />
            <TextField id="outlined-basic" label="Username"  variant="outlined" />
            <TextField id="outlined-basic" label="Password" type="password"  variant="outlined" />
            <Button variant="contained" type="submit" color="primary">
              Sign Up
</Button>
<Button variant="contained" color="primary">
  Cancel
</Button>

             </form>
            
            
        </Grid>
      </Grid>
    );
};

export default SignUpCustomers;