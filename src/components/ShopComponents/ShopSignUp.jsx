import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { store } from 'react-notifications-component';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
const ShopSignUp = () => {
  const [credentials, setCredentials] = useState({ shop_name: '', honour_firstname: '', honour_lastname: '', password: '',address:'',phone_number:'' });
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '95%',
        paddingRight: '20px',
        





      },
    },
  }));
  const classes = useStyles();
  const handleSubmit = (event) => {
    //alert('name and pass is'+JSON.stringify(credentials));
    event.preventDefault();
    if (credentials.shop_name === '' || credentials.password ==='' || credentials.honour_firstname === '' || credentials.honour_lastname ===''|| credentials.address===''|| credentials.phone_no ==='' ){
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

     if (credentials.phone_number.length <= 12){
      store.addNotification({
        title: "Sign Up Failed !",
        message: "Please Add phone number Correctly",
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
     if (credentials.password.length < 5){
      store.addNotification({
        title: "Sign Up Failed !",
        message: "Please Add Password of length at least 5",
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
    axios.post(`http://localhost:3000/shops`, credentials)
      .then(() => {
        //console.log(res);
      //  console.log('Your data id is ',res.data);
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
     
      }).catch(err => {
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
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid class="section" container spacing={3} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }} >
      <Grid class="container" style={{ height:'630px', opacity: '0.9', paddingTop: '110px', width: '400px', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkK64krM4Ht_q6Tx60JKpiHkstGQeuuDGlw&usqp=CAU)', backgroundPosition: 'center top', backgroundSize: '230px', backgroundRepeat: 'no-repeat' }} item xs={12}>

        <h1>Sign Up</h1>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="First Name" variant="outlined"
            value={credentials.honour_firstname}
            onChange={e => setCredentials({ ...credentials, honour_firstname: e.target.value })}
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined"
            value={credentials.honour_lastname}
            onChange={e => setCredentials({ ...credentials, honour_lastname: e.target.value })}
          />
          <TextField id="outlined-basic" label="Shop Name" variant="outlined"
            value={credentials.shop_name}
            onChange={e => setCredentials({ ...credentials, shop_name: e.target.value })}
          />
          {/* <TextField id="outlined-basic" label="Password" type="password" variant="outlined" type="password"
            value={credentials.password}
            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          /> */}
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
          <TextField id="outlined-basic" label="Address" variant="outlined" placeholder="House No , Sector name"
            value={credentials.address}
            onChange={e => setCredentials({ ...credentials, address: e.target.value })}
          />
          <TextField id="outlined-basic" label="Phone Number"  variant="outlined" placeholder="+923065605043"
            value={credentials.phone_number}
            onChange={e => setCredentials({ ...credentials, phone_number: e.target.value })}
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

export default ShopSignUp;