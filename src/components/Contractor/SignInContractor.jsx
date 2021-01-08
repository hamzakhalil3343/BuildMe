import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';
const SignInContractor = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const history=useHistory();

    const handleSubmit=(event)=>{
     //alert('name and pass is'+JSON.stringify(credentials));
     event.preventDefault();
     if (credentials.username === '' || credentials.password ==='' ){
      store.addNotification({
        title: "Sign In Failed !",
        message: "Please fill all the Fields",
        type: "info",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
    
    });
           return ; 
     }
      axios.post(`http://localhost:3000/users/login`, credentials )
        .then(res => {
          localStorage.setItem('id',res.data.id);
          store.addNotification({
            title: "Welcome !",
            message: "Successfully Sign In ",
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          history.push('/contractor');
        }).catch(err=>{
          store.addNotification({
            title: "Sign In Failed !",
            message: "Message "+err.message,
            type: "danger",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
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
        <Grid class="section" container spacing={3}  style={{backgroundImage:'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/contractor-painting-a-room-in-house-royalty-free-image-660246447-1552423836.jpg)'}} >
        <Grid class="container" style={{opacity:'0.9',paddingTop:'80px',backgroundImage:'url(https://dcassetcdn.com/design_img/3694078/629335/22017454/tpwrygs5kcf2rq4ey9vr4ak8v4_thumbnail.png)',backgroundPosition:'center top',backgroundSize:'230px',backgroundRepeat:'no-repeat'}} item xs={12}>
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

export default SignInContractor;