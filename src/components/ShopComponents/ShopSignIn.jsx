import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';
// export const UserContext=React.createContext();
const ShopSignIn = () => {
    const [credentials, setCredentials] = useState({ shop_name: '', password: '' });
    const history=useHistory();
 

    const handleSubmit=(event)=>{
    // alert('name and pass is'+JSON.stringify(credentials));
     event.preventDefault();
     if (credentials.shop_name === '' || credentials.password ==='' ){
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
     
      axios.post(`http://localhost:3000/shops/ShopLogin`, credentials )
        .then(res => {
          //console.log(res);
          //console.log(res.data.id);
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
          history.push({pathname:'/Shops/'+res.data.id+'/Iron',state:{id:res.data.id}});
          //return(<UserContext.Provider value={res.data.id}/>)
        }).catch(err=>{
         // console.log(err);
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
    return (
        <Grid class="section" container spacing={3}  style={{backgroundImage:'url(https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)'}} >
        <Grid class="container" style={{opacity:'0.9',paddingTop:'80px',width:'350px',height:'400px',backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkK64krM4Ht_q6Tx60JKpiHkstGQeuuDGlw&usqp=CAU)',backgroundPosition:'center top',backgroundSize:'230px',backgroundRepeat:'no-repeat'}} item xs={12}>
         <div class="login_form">
             <h1>Sign In</h1>
            <form onSubmit={handleSubmit} > 
            <TextField id="standard-basic" label="Shopname" fullWidth 
             value={credentials.shop_name}
				    onChange={e => setCredentials({...credentials,shop_name:e.target.value})}/>
           
            
            <TextField id="standard-basic" label="Password" fullWidth style={{marginBottom:'20px',marginTop:'5px'}}
            value={credentials.password}
            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
            />
            <br/>
            <Button variant="contained" type="submit" color="primary"  style={{marginTop:'30px',margin:'10px',width:'92%'}}>
              Login
</Button>
<Button variant="contained" color="primary" style={{width:'92%',marginLeft:'10px'}}>
  Cancel
</Button>

             </form>
            
            
         </div>
        </Grid>
      </Grid>

    );
};

export default ShopSignIn;