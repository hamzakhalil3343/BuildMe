import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ShopSignUp = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
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
    const handleSubmit=(event)=>{
     alert('name and pass is'+JSON.stringify(credentials));
     event.preventDefault();
    //   axios.post(`http://localhost:3000/users/login`, name )
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     }).catch(err=>{
    //       console.log(err);
    //     });
      
    }
    return (
        <Grid class="section" container spacing={3} style={{backgroundImage:'url(https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)'}} >
        <Grid class="container" style={{opacity:'0.9',paddingTop:'110px',width:'400px',backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkK64krM4Ht_q6Tx60JKpiHkstGQeuuDGlw&usqp=CAU)',backgroundPosition:'center top',backgroundSize:'230px',backgroundRepeat:'no-repeat'}} item xs={12}>
        
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

export default ShopSignUp;