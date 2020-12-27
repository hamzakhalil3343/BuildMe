import React,{useState} from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD:src/components/LabourComponents/SignUpLabour.jsx
import axios from 'axios';
=======
import '../../Assets/Css/SignUp.css'
const SignUpLabour = () => {
    const handleSubmit=()=>{
>>>>>>> ae1294a1ea301bf5c747d9173ead6f24a52a4ad7:src/components/SignUpLabour.jsx

const SignUpLabour = () => {
  const [credentials, setCredentials] = useState({ username: '', firstname: '', lastname: '', password: '',user_type:'labour' });
    const handleSubmit=(event)=>{
      event.preventDefault();
      axios.post(`http://localhost:3000/users/signup`,credentials)
        .then(res => {
          //console.log(res);
          console.log('Your data id is ',res.data);
        }).catch(err => {
          console.log('an err occured' ,err.message);
        });
    }
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width:'94%',
            padding:'4px',
            
            alignContent:'centre'
           
           
            
          },
        },
      }));
      const classes = useStyles();
    return (
        <Grid class="section" xs={12} container spacing={3} style={{backgroundImage:'url(https://image.freepik.com/free-photo/industrial-worker-labourer-factory-welding-steel-structure_73899-1263.jpg)'}} >
        <Grid class="container" xs={12} style={{opacity:'0.9',paddingTop:'50px',backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc6qTx6__DUmqmBdSR2SuqZGdP6rjhp9kAQQ&usqp=CAU)',backgroundPosition:'center top',backgroundSize:'105px',backgroundRepeat:'no-repeat'}} item xs={12}>
        
             <h1>Sign Up</h1>
            <form className={classes.root} onSubmit={handleSubmit}> 
<<<<<<< HEAD:src/components/LabourComponents/SignUpLabour.jsx
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
=======
            <TextField id="outlined-basic" label="First Name"  variant="outlined" />
            <TextField id="outlined-basic"  label="Last Name"  variant="outlined" />
            <TextField id="outlined-basic" label="Username"  variant="outlined" />
            <TextField id="outlined-basic" label="Password" type="password"  variant="outlined" />
            <Button variant="contained" style={{width:'45%',marginLeft:'10px'}} type="submit" color="primary">
>>>>>>> ae1294a1ea301bf5c747d9173ead6f24a52a4ad7:src/components/SignUpLabour.jsx
              Sign Up
</Button>
<Button variant="contained"  style={{width:'45%'}} color="primary">
  Cancel
</Button>

             </form>
            
            
        </Grid>
      </Grid>
    );
};

export default SignUpLabour;