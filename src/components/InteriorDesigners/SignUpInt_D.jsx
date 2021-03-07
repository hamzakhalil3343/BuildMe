import React,{useState} from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx'
function SignUpInt_D(props) {
   const history = useHistory();
   const [credentials, setCredentials] = useState({ username: '', firstname: '', lastname: '', password: '',user_type:'interiorDesigner',phone_no:'' });

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
     event.preventDefault();
     const strongRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
     if (! strongRegex.test(credentials.password) && credentials.password != '')
     { 
       store.addNotification({
         title: "Sign Up Failed !",
         message: "Your Password must contain min 8 letters, with at least a symbol, upper and lower case letters and a number",
         type: "info",
         insert: "top",
         container: "bottom-right",
         animationIn: ["animate__animated", "animate__fadeIn"],
         animationOut: ["animate__animated", "animate__fadeOut"],
         dismiss: {
           duration: 8000,
           onScreen: true
         }
     
     });
            return ; 
     }
     if (credentials.username === '' || credentials.password ==='' || credentials.lastname === '' || credentials.firstname ===''|| credentials.phone_no ==='' ){
       store.addNotification({
         title: "Sign Up Failed !",
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
      if (credentials.password.length < 6 ){
       store.addNotification({
         title: "Sign Up Failed !",
         message: "Password must be atleast 6 Characters Long",
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
      if (credentials.phone_no.length < 11 ){
       store.addNotification({
         title: "Sign Up Failed !",
         message: "Invalid Phone Number",
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
     axios.post(`http://localhost:3000/users/signup`,credentials)
       .then(res => {
         //console.log(res);
       //  alert('Your data id is ',res.data);
       store.addNotification({
         title: "Success !",
         message: "Successfully Sign Up ",
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
       history.push('/');
       }).catch(err => {
        // console.log('an err occured' ,err.message);
        store.addNotification({
         title: "Sign Up Failed !",
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
             width:'95%',
             paddingRight:'20px',
             
             
            
            
             
           },
         },
       }));
       const classes = useStyles();
    return (
        <Grid class="section" container spacing={3} style={{backgroundImage:'url(https://images.unsplash.com/photo-1553444892-20174939d7bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80)'}} >
        <Grid class="container" style={{height:'600px'}} item xs={12}>
        
             {/* <h3>Interior Designer</h3> */}
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
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" placeholder="+923065605043"
            value={credentials.phone_no}
            onChange={e => setCredentials({ ...credentials,phone_no: e.target.value })}
          />
          <TextField id="outlined-basic" label="Username" variant="outlined"
            value={credentials.username}
            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
          />
           <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={credentials.password}
            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
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
}

export default SignUpInt_D;