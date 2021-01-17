import { Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';
import { store } from 'react-notifications-component';
function AddContractDetails(props) {
    const [credentials, setCredentials] = useState({ name: '', quantitie: '',details:'', contractor_name: '' });
        const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '65%',






            },
        },
    }));
    const classes = useStyles();
    const handleSubmit = (event) => {
        //alert('name and pass is'+JSON.stringify(credentials));
        event.preventDefault();
        const id = localStorage.getItem('id');
        axios.post(`http://localhost:3000/shops/${id}/order_details`, credentials)
        .then(res => {
            store.addNotification({
                title: "Success !",
                message: "Successfully Added  ",
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
    return (
        <div>
            <h2>Order Details</h2>
            <form className={classes.root} onSubmit={handleSubmit}>
                 
            <TextField id="outlined-basic" label="Contractor Name"  variant="outlined" 
                    value={credentials.contractor_name}
                    onChange={e => setCredentials({ ...credentials, contractor_name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Item Name" variant="outlined"
                    value={credentials.name}
                    onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                />
              
                <TextField id="outlined-basic" label="Quantitie" variant="outlined"
                    value={credentials.quantitie}
                    onChange={e => setCredentials({ ...credentials, quantitie: e.target.value })}
                />
                <TextField id="outlined-basic" label="Material Details" variant="outlined" placeholder="Enter details about your Contract..."
                    value={credentials.details}
                    onChange={e => setCredentials({ ...credentials, details: e.target.value })}
                />
               
   
                <Button variant="contained" type="submit" color="primary" style={{ width: '50%',padding:10 }}>
                    <b>Add  Details</b>
                </Button>
              

            </form>
        </div>
    );
}

export default AddContractDetails;