import { Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';

const AddPaintsComponent = () => {

    const [credentials, setCredentials] = useState({ name: '',dimension:'', quantitie: '', paint_type: '', price: '' });
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
        axios.post(`http://localhost:3000/shops/${id}/paints`, credentials)
        .then(res => {
            console.log(res);
            console.log(res.data);
            alert('Success !');
        }).catch(err => {
            console.log(err);
        });

    }
    return (
        <div>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Name" variant="outlined"
                    value={credentials.name}
                    onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Dimensions" variant="outlined"
                    value={credentials.dimension}
                    onChange={e => setCredentials({ ...credentials, dimension: e.target.value })}
                />
                <TextField id="outlined-basic" label="Quantitie" variant="outlined"
                    value={credentials.quantitie}
                    onChange={e => setCredentials({ ...credentials, quantitie: e.target.value })}
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