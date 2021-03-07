import { Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';
import { store } from 'react-notifications-component';
const AddWoodComponent = () => {

    const [credentials, setCredentials] = useState({ name: '',dimension:'', quantitie: '', wood_type: '', price: '' ,used_in:''});
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
        if (credentials.name === '' || credentials.quantitie ==='' || credentials.dimension === '' || credentials.wood_type ===''|| credentials.price ==='' || credentials.used_in ==='' ){
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
        axios.post(`http://localhost:3000/shops/${id}/wood`, credentials)
        .then(res => {
            // console.log(res);
            // console.log(res.data);
            // alert('Success !');
            store.addNotification({
                title: "Success !",
                message: "Successfully Added Wood ",
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
              window.location.reload();
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
                <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="Pine ,Charry ,Bomboo and other"
                    value={credentials.name}
                    onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Dimensions" variant="outlined" placeholder="Place your size here"
                    value={credentials.dimension}
                    onChange={e => setCredentials({ ...credentials, dimension: e.target.value })}
                />
                <TextField id="outlined-basic" label="Quantitie" variant="outlined"
                    value={credentials.quantitie}
                    onChange={e => setCredentials({ ...credentials, quantitie: e.target.value })}
                />
                <TextField id="outlined-basic" label="Type" variant="outlined"
                    value={credentials.wood_type}
                    onChange={e => setCredentials({ ...credentials, wood_type: e.target.value })}
                />
                <TextField id="outlined-basic" label="Price"  variant="outlined" type="number"
                    value={credentials.price}
                    onChange={e => setCredentials({ ...credentials, price: e.target.value })}
                />
                <TextField id="outlined-basic" label="Use"  variant="outlined"  placeholder="Where Do you use it ?"
                    value={credentials.used_in}
                    onChange={e => setCredentials({ ...credentials, used_in: e.target.value })}
                />
   
                <Button variant="contained" type="submit" color="primary" style={{ width: '50%',padding:10 }}>
                    <b>Add Wood</b>
                </Button>
              

            </form>
        </div>
    );
};

export default AddWoodComponent;