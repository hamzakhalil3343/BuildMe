import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';

const SignInLabour = () => {
    const [credentials, setcredentials] = useState({ username: '', password: '' });
    const history=useHistory();
    const handleSubmit=(event)=>{
     alert('name and pass is'+JSON.stringify(credentials));
     event.preventDefault();
      axios.post(`http://localhost:3000/users/login`, credentials )
        .then(res => {
         // console.log(res);
          console.log(res.data);
          localStorage.setItem('id',res.data.id);
          history.push('/labour');
        }).catch(err=>{
          console.log(err);
        });
      
    }
    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width:'100%',
          paddingRight:'10px'
          
          
          
         
         
          
        },
      },
    }));
    const classes = useStyles();
    return (<div >
 <Grid class="section" container spacing={3}  style={{backgroundImage:'url(https://image.freepik.com/free-photo/industrial-worker-labourer-factory-welding-steel-structure_73899-1263.jpg)'}} >
        <Grid class="container" style={{opacity:'0.9',paddingTop:'50px',backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc6qTx6__DUmqmBdSR2SuqZGdP6rjhp9kAQQ&usqp=CAU)',backgroundPosition:'center top',backgroundSize:'120px',backgroundRepeat:'no-repeat'}} item xs={12}>
         <div class="login_form">
             <h1>Sign In</h1>
            <form onSubmit={handleSubmit} className={classes.root}> 
            <TextField id="standard-basic" name="username" label="Username"
             value={credentials.username} fullWidth
				    onChange={e => setcredentials({...credentials,username:e.target.value})}/>
           
            
            <TextField id="standard-basic" label="Password" 
            value={credentials.password} fullWidth
            onChange={e => setcredentials({ ...credentials, password: e.target.value })}
            />
            <br/>
            <Button variant="contained" type="submit" color="primary" fullWidth >
              Login
</Button>
<Button variant="contained" color="primary" fullWidth>
  Cancel
</Button>

             </form>
           
            
         </div>
        </Grid>
      </Grid>
    </div>
       

    );
};

export default SignInLabour;