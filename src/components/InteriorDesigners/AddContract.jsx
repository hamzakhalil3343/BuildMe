import React from 'react';
import { useState ,useEffect} from 'react';
import {TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { store } from 'react-notifications-component';
import {useHistory} from 'react-router-dom';
function AddContract(props) {
    const id = localStorage.getItem('id');
    const [interiorDesigner_id,setinteriorDesignerId]= useState('') ;
    const [credentials, setCredentials] = useState({ name: '', details: '' ,additionalDetails:''});
    const history =useHistory();
    const handleSubmit=(event)=>{
        alert('name and details is'+JSON.stringify(credentials));
        event.preventDefault();
         axios.post( `http://localhost:3000/interiorDesigner/${interiorDesigner_id}/contract`, credentials )
           .then(res => {
            // alert('Success !');
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
           }).catch(err=>{
             //alert(err.message);
             store.addNotification({
              title: "Failed !",
              message: err.message,
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

    useEffect(() => {
         const fetchData = async () => {
            const result = await axios(
              `http://localhost:3000/interiorDesigner/${id}/`,
              
            );
       
            setinteriorDesignerId(result.data._id);
            console.log('interiorDesigner_id is ',interiorDesigner_id)
          };
       
          fetchData();
       
       
        },[]);
    
        const useStyles = makeStyles((theme) => ({
            root: {
              '& > *': {
                margin: theme.spacing(1),
                width:'50%',
                padding:'10px'
                
                
                
               
               
                
              },
            },
          }));
          const classes = useStyles();
    return (
        <div>
             <h1>Interior Designer Contract </h1>
             <form className={classes.root} onSubmit={handleSubmit} > 
            <TextField id="standard-basic" name="name" label="Contract Name"
             value={credentials.name}
				    onChange={e => setCredentials({...credentials,name:e.target.value})}/>
           
            
            
            <TextField id="standard-basic" label="Details" 
            value={credentials.details}
            onChange={e => setCredentials({ ...credentials, details: e.target.value })}
            multiline
            placeholder={`Enter deatils`+`\n`+`Here`}
            />
            <TextField id="standard-basic" label="Additional Details" 
            value={credentials.additionalDetails}
            onChange={e => setCredentials({ ...credentials, additionalDetails: e.target.value })}
            multiline
            placeholder={`Enter Additional deatils`+`\n`+`Here`}
            />
            <br/>
            <Button variant="contained" type="submit" color="primary"  >
              ADD Contract
</Button>
<Button variant="contained" color="primary" fullWidth onClick={()=>history.push('/')}>
  Cancel
</Button>

             </form>
        </div>
    );
}

export default AddContract;