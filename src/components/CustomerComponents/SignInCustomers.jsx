import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
const SignInCustomers = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const history=useHistory();
    const handleSubmit=(event)=>{
     alert('name and pass is'+JSON.stringify(credentials));
     event.preventDefault();
      axios.post(`http://localhost:3000/users/login`, credentials )
        .then(res => {
          localStorage.setItem('id',res.data.id);
          history.push('/customer');
        }).catch(err=>{
          console.log(err);
        });
      
    }
    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width:'100%',
          
          
          
         
         
          
        },
      },
    }));
    const classes = useStyles();
    return (
        <Grid class="section" container spacing={3}  style={{backgroundImage:'url(https://d39l2hkdp2esp1.cloudfront.net/img/photo/139451/139451_00_2x.jpg)'}} >
        <Grid class="container" style={{opacity:'0.9',paddingTop:'50px',backgroundImage:'url(https://themmit.com/wp-content/uploads/2018/06/All-You-Should-Know-About-Email-Marketing-Target-Audience.jpg)',backgroundPosition:'center top',backgroundSize:'200px',backgroundRepeat:'no-repeat'}} item xs={12}>
         <div class="login_form">
             <h1>Sign In</h1>
             <form className={classes.root} onSubmit={handleSubmit} > 
            <TextField id="standard-basic" name="username" label="Username"
             value={credentials.username}
				    onChange={e => setCredentials({...credentials,username:e.target.value})}/>
           
            
            <TextField id="standard-basic" label="Password" 
            value={credentials.password}
            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
            />
            <br/>
            <Button variant="contained" type="submit" color="primary" fullWidth >
              Login
</Button>
<Button variant="contained" color="primary" fullWidth>
  Cancel
</Button>

             </form>
             <a href="#">Forgot password</a>
            
         </div>
        </Grid>
      </Grid>

    );
};

export default SignInCustomers;