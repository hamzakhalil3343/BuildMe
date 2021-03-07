import { Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';
import { store } from 'react-notifications-component';
const AddElectricStoreComponent = () => {
    const [credentials, setCredentials] = useState({ name: '',dimension:'', quantitie: '',material_details:'',used_in:'', electric_type: '', price: '' });

    
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
        if (credentials.name === '' || credentials.quantitie ==='' || credentials.electric_type === '' || credentials.price ===''||  credentials.used_in ===''|| credentials.material_details==='' ){
            store.addNotification({
              title: " Failed !",
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
        axios.post(`http://localhost:3000/shops/${id}/electricStores`, credentials)
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
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Name" variant="outlined"
                    value={credentials.name}
                    onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                />
              
                <TextField id="outlined-basic" label="Quantitie" variant="outlined"
                    value={credentials.quantitie}
                    onChange={e => setCredentials({ ...credentials, quantitie: e.target.value })}
                />
                <TextField id="outlined-basic" label="Material Details" variant="outlined" placeholder="Resistivity ,Conductivity or Other details ..."
                    value={credentials.material_details}
                    onChange={e => setCredentials({ ...credentials, material_details: e.target.value })}
                />
                <TextField id="outlined-basic" label="Use" variant="outlined"    placeholder="Breifly Explain where do someOne use it ..."
                    value={credentials.used_in}
                    onChange={e => setCredentials({ ...credentials, used_in: e.target.value })}
                />
                <TextField id="outlined-basic" label="Type" variant="outlined"
                    value={credentials.electric_type}
                    onChange={e => setCredentials({ ...credentials, electric_type: e.target.value })}
                />
                <TextField id="outlined-basic" label="Price"  variant="outlined" type="number"
                    value={credentials.price}
                    onChange={e => setCredentials({ ...credentials, price: e.target.value })}
                />
   
                <Button variant="contained" type="submit" color="primary" style={{ width: '50%',padding:10 }}>
                    <b>Add Electric Material</b>
                </Button>
              

            </form>
        </div>
    );
};

export default AddElectricStoreComponent;