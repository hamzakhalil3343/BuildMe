import React,{useState} from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { store } from 'react-notifications-component';
import {useHistory} from 'react-router-dom';
const SignUpLabour = () => {
  const [credentials, setCredentials] = useState({ username: '', firstname: '', lastname: '', password: '',user_type:'labour' });
  const history = useHistory();
    const handleSubmit=(event)=>{
      event.preventDefault();
      if (credentials.username === '' || credentials.password ==='' || credentials.lastname === '' || credentials.firstname ==='' ){
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
      
      axios.post(`http://localhost:3000/users/signup`,credentials)
        .then(res => {
          //console.log(res);
         // console.log('Your data id is ',res.data);
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
          //console.log('an err occured' ,err.message);
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
        <Grid class="section" container spacing={3} style={{backgroundImage:'url(https://image.freepik.com/free-photo/industrial-worker-labourer-factory-welding-steel-structure_73899-1263.jpg)'}} >
        <Grid class="container" style={{opacity:'0.9',paddingTop:'50px',backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc6qTx6__DUmqmBdSR2SuqZGdP6rjhp9kAQQ&usqp=CAU)',backgroundPosition:'center top',backgroundSize:'105px',backgroundRepeat:'no-repeat'}} item xs={12}>
        
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
<Button variant="contained" color="primary" onClick={()=>history.push('/')}>
  Cancel
</Button>

             </form>
            
            
        </Grid>
      </Grid>
    );
};

export default SignUpLabour;