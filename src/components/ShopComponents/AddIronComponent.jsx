import { Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';
import { store } from 'react-notifications-component';
const AddIronComponent = () => {

    const [credentials, setCredentials] = useState({ name: '', quantitie: '', iron_type: '', price: '',percentage_material:'',used_in:'' });
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
        if (credentials.name === '' || credentials.quantitie ==='' || credentials.iron_type === '' || credentials.price ===''|| credentials.percentage_material ==='' || credentials.used_in ==='' ){
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
        axios.post(`http://localhost:3000/shops/${id}/iron`, credentials)
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                store.addNotification({
                    title: "Success !",
                    message: "Iron Added Successfully ",
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
    return (
        <div>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="It can  be mild steel bars,Deformed steel bars and others..."
                    value={credentials.name}
                    onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Quantitie" variant="outlined"
                    value={credentials.quantitie}
                    onChange={e => setCredentials({ ...credentials, quantitie: e.target.value })}
                />
                <TextField id="outlined-basic" label="Type" variant="outlined"
                    value={credentials.iron_type}
                    onChange={e => setCredentials({ ...credentials, iron_type: e.target.value })}
                />
                <TextField id="outlined-basic" label="Price"  variant="outlined" type="number"
                    value={credentials.price}
                    onChange={e => setCredentials({ ...credentials, price: e.target.value })}
                />
                 <TextField id="outlined-basic" label="Percentage Carbon and other" variant="outlined" placeholder="Low carbon is preferable in building Houses"
                    value={credentials.percentage_material}
                    onChange={e => setCredentials({ ...credentials, percentage_material: e.target.value })}
                />
                 <TextField id="outlined-basic" label="Use" variant="outlined" placeholder="Where Do you use it ?"
                    value={credentials.used_in}   multiline
                    onChange={e => setCredentials({ ...credentials, used_in: e.target.value })}
                />
   
                <Button variant="contained" type="submit" color="primary" style={{ width: '50%',padding:10 }}>
                    <b>Add Iron</b>
                </Button>
              

            </form>
        </div>
    );
};

export default AddIronComponent;