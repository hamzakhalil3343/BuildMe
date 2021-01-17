import React from 'react';
import { useState ,useEffect} from 'react';
import {TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { store } from 'react-notifications-component';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function AddContract(props) {
    const id = localStorage.getItem('id');
    const [customer_id,setCustomerId]= useState('') ;
    const [credentials, setCredentials] = useState({ name: '', details: '',contract_type:'' });

    const handleSubmit=(event)=>{
        // alert('name and details is'+JSON.stringify(credentials));
        event.preventDefault();
         axios.post( `http://localhost:3000/customers/${customer_id}/contract`, credentials )
           .then(res => {
            store.addNotification({
              title: "Success !",
              message: "Successfully Added ",
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
            // console.log(err);
            store.addNotification({
             title: "Failed !",
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

    useEffect(() => {
         const fetchData = async () => {
            const result = await axios(
              `http://localhost:3000/customers/${id}/`,
              
            );
       
            setCustomerId(result.data._id);
            console.log('customer_id is ',customer_id)
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
             <h1>Customer Contract </h1>
             <form className={classes.root} onSubmit={handleSubmit} > 
             <FormControl component="fieldset">
      <FormLabel component="legend" style={{textAlign:'left'}}>Contract Type</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={credentials.contract_type}  onChange={e => setCredentials({ ...credentials, contract_type: e.target.value })}>
        <FormControlLabel value="contractor" control={<Radio />} label="Contractor" />
        <FormControlLabel value="interior_Designer" control={<Radio />} label="Interior Designer" />
       
      </RadioGroup>
    </FormControl>
            <TextField id="standard-basic" name="name" label="Contract Name"
             value={credentials.name}
				    onChange={e => setCredentials({...credentials,name:e.target.value})}/>
             
            
            <TextField id="standard-basic" label="Details" 
            value={credentials.details}
            onChange={e => setCredentials({ ...credentials, details: e.target.value })}
            multiline
            placeholder={`Enter deatils`+`\n`+`Here`}
            />
            <br/>
            <Button variant="contained" type="submit" color="primary"  >
              ADD Contract
</Button>
<Button variant="contained" color="primary" fullWidth>
  Cancel
</Button>

             </form>
        </div>
    );
}

export default AddContract;