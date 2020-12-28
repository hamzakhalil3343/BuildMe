import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
const SignInContractor = () => {
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
        <Grid class="section" container spacing={3}  style={{backgroundImage:'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/contractor-painting-a-room-in-house-royalty-free-image-660246447-1552423836.jpg)'}} >
        <Grid class="container" style={{opacity:'0.9',paddingTop:'80px',backgroundImage:'url(https://dcassetcdn.com/design_img/3694078/629335/22017454/tpwrygs5kcf2rq4ey9vr4ak8v4_thumbnail.png)',backgroundPosition:'center top',backgroundSize:'230px',backgroundRepeat:'no-repeat'}} item xs={12}>
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
            <Button variant="contained" type="submit" color="primary" >
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

export default SignInContractor;