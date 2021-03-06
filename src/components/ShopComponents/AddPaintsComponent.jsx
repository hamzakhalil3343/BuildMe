import { Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';
import { store } from 'react-notifications-component';
const AddPaintsComponent = () => {

    const [credentials, setCredentials] = useState({ name: '',dimension:'', quantitie: '', paint_type: '', price: '',color:'' });
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
        if (credentials.name === '' || credentials.quantitie ==='' || credentials.paint_type === '' || credentials.price ===''|| credentials.color ==='' ){
            store.addNotification({
              title: "Failed !",
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
        const id = localStorage.getItem('id');
        axios.post(`http://localhost:3000/shops/${id}/paints`, credentials)
        .then(res => {
            // console.log(res);
            // console.log(res.data);
            // alert('Success !');
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
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Name" variant="outlined"
                    value={credentials.name}
                    onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                />
              
                <TextField id="outlined-basic" label="Quantitie" variant="outlined"
                    value={credentials.quantitie}
                    onChange={e => setCredentials({ ...credentials, quantitie: e.target.value })}
                />
                <TextField id="outlined-basic" label="Color" variant="outlined"
                    value={credentials.color}
                    onChange={e => setCredentials({ ...credentials, color: e.target.value })}
                />
                <TextField id="outlined-basic" label="Type" variant="outlined"
                    value={credentials.paint_type}
                    onChange={e => setCredentials({ ...credentials, paint_type: e.target.value })}
                />
                <TextField id="outlined-basic" label="Price"  variant="outlined"
                    value={credentials.price}
                    onChange={e => setCredentials({ ...credentials, price: e.target.value })}
                />
   
                <Button variant="contained" type="submit" color="primary" style={{ width: '50%',padding:10 }}>
                    <b>Add Paint</b>
                </Button>
              

            </form>
        </div>
    );
};

export default AddPaintsComponent;