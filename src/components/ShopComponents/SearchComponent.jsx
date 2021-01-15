import React from 'react';
import {TextField,Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { store } from 'react-notifications-component';
import SearchIcon from '@material-ui/icons/Search';

import ViewShopComponent from './ViewShopComponent';
function SearchComponent() {
    const [credentials, setCredentials] = useState({ shop_name:'' });
    const [data,setData]=useState([]);

    const handleSubmit=(event)=>{
      //  alert('name and pass is'+JSON.stringify(credentials.shop_name));
         event.preventDefault();
       
         if (credentials.shop_name !== ''){
            axios.get(`http://localhost:3000/search/${credentials.shop_name}`)
            .then(res => {
            //   console.log(res);
            //alert(''res.data.shop_name);
            // if (res.data.honour_firstname == undefined){
            //     store.addNotification({
            //         title: " Failed !",
            //         message: "Record Not Found",
            //         type: "danger",
            //         insert: "top",
            //         container: "bottom-right",
            //         animationIn: ["animate__animated", "animate__fadeIn"],
            //         animationOut: ["animate__animated", "animate__fadeOut"],
            //         dismiss: {
            //           duration: 5000,
            //           onScreen: true
            //         }
            //       });
                  
             

            //  }

             setData(res.data);
             console.log('data is ',res.data);
            
              
            }).catch(err=>{
             // console.log(err);
             store.addNotification({
              title: " Failed !",
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
        
         
        }

    return (
        <div>
           <form onSubmit={handleSubmit} style={{margin:'20px'}} > 
            <TextField id="standard-basic" label="Shop Name" style={{width:'35%',marginRight:'10px'}} 
             value={credentials.shop_name}
				    onChange={e => setCredentials({...credentials,shop_name:e.target.value})}/>
                     {/* <TextField id="standard-basic" label="First Name" style={{width:'35%',marginLeft:'5px'}}  
             value={credentials.honour_firstname}
				    onChange={e => setCredentials({...credentials,honour_firstname:e.target.value})}/>
           <TextField id="standard-basic" label="Last Name" style={{width:'35%',marginLeft:'5px'}}  
             value={credentials.honour_lastname}
				    onChange={e => setCredentials({...credentials,honour_lastname:e.target.value})}/> */}
           
           
            <br/>
            <Button variant="contained" type="submit" color="primary"  style={{margin:'40px',width:'300px'}}>
            <SearchIcon style={{marginLeft:'10px'}}/>
              Search
           </Button>

             </form>
             <br/>
             {data==''?<h3> Find a shop by Name </h3>:<ViewShopComponent data={data}/>}
            
        </div>
    );
}

export default SearchComponent;