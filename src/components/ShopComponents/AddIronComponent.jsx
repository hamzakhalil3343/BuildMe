import { Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';

const AddIronComponent = () => {

    const [credentials, setCredentials] = useState({ shop_name: '', honour_firstname: '', honour_lastname: '', password: '' });
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
        axios.post(`http://localhost:3000/shops`, credentials)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            });

    }
    return (
        <div>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="First Name" variant="outlined"
                    value={credentials.honour_firstname}
                    onChange={e => setCredentials({ ...credentials, honour_firstname: e.target.value })}
                />
                <TextField id="outlined-basic" label="Last Name" variant="outlined"
                    value={credentials.honour_lastname}
                    onChange={e => setCredentials({ ...credentials, honour_lastname: e.target.value })}
                />
                <TextField id="outlined-basic" label="Shop Name" variant="outlined"
                    value={credentials.shop_name}
                    onChange={e => setCredentials({ ...credentials, shop_name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined"
                    value={credentials.password}
                    onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                />
   
                <Button variant="contained" type="submit" color="primary" style={{ width: '50%',padding:10 }}>
                    <b>Sign Up</b>
                </Button>
              

            </form>
        </div>
    );
};

export default AddIronComponent;