import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';
function SignInInt_D(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const history=useHistory();
    const handleSubmit=(event)=>{
   //  alert('name and pass is'+JSON.stringify(credentials));
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
          history.push('/interiorDesigner');
          
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
        <Grid class="section" container spacing={3}  style={{backgroundImage:'url(https://images.unsplash.com/photo-1553444892-20174939d7bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80g)'}} >
        <Grid class="container" item xs={12}>
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
             {/* <a href="#">Forgot password</a> */}
            
         </div>
        </Grid>
      </Grid>
    );
}

export default SignInInt_D;