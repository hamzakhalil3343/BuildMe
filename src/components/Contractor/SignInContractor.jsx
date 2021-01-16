import React from 'react';
import {Grid,TextField,Button,Input} from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';

import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const SignInContractor = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const history=useHistory();

    const [values, setValues] = React.useState({
      showPassword: false,
    });


     
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



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
          localStorage.setItem('contractor_name',res.data.name);
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
           
            
           <FormControl fullWidth >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={credentials.password}
            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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