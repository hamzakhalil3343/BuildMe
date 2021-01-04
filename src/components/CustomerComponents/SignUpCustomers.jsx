import React,{useState} from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const SignUpCustomers = () => {
  const [credentials, setCredentials] = useState({ username: '', firstname: '', lastname: '', password: '',user_type:'customer' });
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post(`http://localhost:3000/users/signup`,credentials)
      .then(res => {
        //console.log(res);
        alert('Your data id is ',res.data);
      }).catch(err => {
        console.log('an err occured' ,err.message);
      });
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
            <TextField id="outlined-basic" label="First Name"  variant="outlined" 
             value={credentials.firstname}
             onChange={e => setCredentials({ ...credentials,firstname: e.target.value })}
             />
            <TextField id="outlined-basic" label="Last Name" variant="outlined"
            value={credentials.lastname}
            onChange={e => setCredentials({ ...credentials,lastname: e.target.value })}
          />
          <TextField id="outlined-basic" label="Username" variant="outlined"
            value={credentials.username}
            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
          />
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined"
            value={credentials.password}
            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          />
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