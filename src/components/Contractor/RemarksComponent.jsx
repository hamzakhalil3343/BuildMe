import React,{useState} from 'react';
import {Button,TextField} from '@material-ui/core';
import { store } from 'react-notifications-component';
import axios from 'axios';

function RemarksComponent(props) {
    const [credentials, setCredentials] = useState({remarks: '',accepted_by:'' });

   const handleSubmit=(e)=>{
    e.preventDefault();
      // alert('remarks are',credentials.toString());
      // console.log('credential are ',credentials);
      setCredentials({ ...credentials, accepted_by:localStorage.getItem('contractor_name') })
      axios.put(`http://localhost:3000/customers/${props.customerID}/contract/${props.contractID}`, credentials )
      .then(res => {
       
        store.addNotification({
          title: "Welcome !",
          message: "Successfully  Added Estimation ",
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
    return (
        <div>
            <form  onSubmit={handleSubmit} > 
           
           
            
           <TextField id="standard-basic" label="Remarks"  style={{margin:'10px',width:'80%'}}
           value={credentials.remarks}
           onChange={e => setCredentials({ ...credentials, remarks: e.target.value })}
           multiline
           placeholder={`Enter Estimations`+`\n`+`How Long it will Take to Complete?`+`\n`+`Your Contact Info and Other Details of Project !`}
           />
           <br/>
           <Button variant="contained" type="submit" color="primary"  style={{margin:'10px',width:'80%'}}>
             ADD Contract
         </Button>


            </form> 
        </div>
    );
}

export default RemarksComponent;