import React,{useState} from 'react';
import {Button,TextField} from '@material-ui/core';

function RemarksComponent(props) {
    const [credentials, setCredentials] = useState({remarks: '' });

   const handleSubmit=(e)=>{
    e.preventDefault();
       alert('remarks are',credentials.toString());
       console.log('credential are ',credentials);
       
   }
    return (
        <div>
            <form  onSubmit={handleSubmit} > 
           
           
            
           <TextField id="standard-basic" label="Details"  style={{margin:'10px',width:'80%'}}
           value={credentials.remarks}
           onChange={e => setCredentials({ ...credentials, remarks: e.target.value })}
           multiline
           placeholder={`Enter Estimations`+`\n`+`Here`}
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