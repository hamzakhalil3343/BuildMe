import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../Assets/Css/SignUp.css'
const SignUpLabour = () => {
    const handleSubmit=()=>{

    }
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width:'94%',
            padding:'4px',
            
            alignContent:'centre'
           
           
            
          },
        },
      }));
      const classes = useStyles();
    return (
        <Grid class="section" xs={12} container spacing={3} style={{backgroundImage:'url(https://image.freepik.com/free-photo/industrial-worker-labourer-factory-welding-steel-structure_73899-1263.jpg)'}} >
        <Grid class="container" xs={12} style={{opacity:'0.9',paddingTop:'50px',backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc6qTx6__DUmqmBdSR2SuqZGdP6rjhp9kAQQ&usqp=CAU)',backgroundPosition:'center top',backgroundSize:'105px',backgroundRepeat:'no-repeat'}} item xs={12}>
        
             <h1>Sign Up</h1>
            <form className={classes.root} onSubmit={handleSubmit}> 
            <TextField id="outlined-basic" label="First Name"  variant="outlined" />
            <TextField id="outlined-basic"  label="Last Name"  variant="outlined" />
            <TextField id="outlined-basic" label="Username"  variant="outlined" />
            <TextField id="outlined-basic" label="Password" type="password"  variant="outlined" />
            <Button variant="contained" style={{width:'45%',marginLeft:'10px'}} type="submit" color="primary">
              Sign Up
</Button>
<Button variant="contained"  style={{width:'45%'}} color="primary">
  Cancel
</Button>

             </form>
            
            
        </Grid>
      </Grid>
    );
};

export default SignUpLabour;