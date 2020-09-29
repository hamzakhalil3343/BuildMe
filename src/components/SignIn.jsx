import React from 'react';
import '../Assets/Css/SignIn.css';
import {Grid,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
const SignIn = () => {
  const [name, setName] = useState({ username: '', password: '' })
  const handleSubmit=(event)=>{
   alert('name and pass is'+JSON.stringify(name));
   event.preventDefault();
    axios.post(`http://localhost:3000/users/login`, name )
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      });
    
  }

  return (
<Grid class="section" container spacing={3} >
        <Grid class="container" item xs={12}>
         <div class="login_form">
             <h1>Sign In</h1>
            <form onSubmit={handleSubmit} style={{padding:'20px'}}> 
            <TextField id="standard-basic" name="username" label="Username"
             value={name.username}
				    onChange={e => setName({...name,username:e.target.value})}/>
           
            
            <TextField id="standard-basic" label="Password" 
            value={name.password}
            onChange={e => setName({ ...name, password: e.target.value })}
            />
            <br/>
            <Button variant="contained" type="submit" color="primary">
              Login
</Button>
<Button variant="contained" color="primary">
  Cancel
</Button>

             </form>
             <a href="#">Forgot password</a>
            
         </div>
        </Grid>
      </Grid>
      
      
      
       
           
    );
};

export default SignIn;