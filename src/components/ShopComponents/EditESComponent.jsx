import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { store } from 'react-notifications-component';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:20
  },
  textfield:{
    margin: theme.spacing(1),

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function EditESComponent(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [credentials, setCredentials] = useState({ name: props.data.name, quantitie: props.data.quantitie,material_details:props.data.material_details,used_in:props.data.used_in, electric_type: props.data.electric_type, price: props.data.price });
          const handleSubmit = (event) => {
            //alert('name and pass is'+JSON.stringify(credentials));
            event.preventDefault();
            const id = localStorage.getItem('id');
            axios.put(`http://localhost:3000/shops/${id}/electricStores/${props.data._id}`, credentials)
                .then(res => {
                  store.addNotification({
                    title: "Success !",
                    message: "Successfully Edited  ",
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
        const handleDelete =(event)=>{
          event.preventDefault();
            const id = localStorage.getItem('id');
            axios.delete(`http://localhost:3000/shops/${id}/electricStores/${props.data._id}`)
                .then(res => {
                  store.addNotification({
                    title: "Delete !",
                    message: "Successfully Deleted  ",
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
      <Card className={classes.root}>
         
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleDelete}>
              <DeleteIcon color="#ac5353" />
            </IconButton>
          }
          title={props.data.name}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://cdn2.hubspot.net/hub/22765/file-346443865-jpg/images/electrical_image.jpg"
          title="Paella dish"
        />
        <CardContent>
        <form className={classes.textfield} onSubmit={handleSubmit}>
                <TextField id="outlined-basic"  label="Name" style={{margin:10}} fullWidth  variant="outlined"
                    value={credentials.name}
                    onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Quantitie" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.quantitie}
                    onChange={e => setCredentials({ ...credentials, quantitie: e.target.value })}
                />
                <TextField id="outlined-basic" label="Material Details" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.material_details}
                    onChange={e => setCredentials({ ...credentials, material_details: e.target.value })}
                />
                <TextField id="outlined-basic" label="Use" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.used_in}
                    onChange={e => setCredentials({ ...credentials, used_in: e.target.value })}
                />
                <TextField id="outlined-basic" label="Type" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.electric_type}
                    onChange={e => setCredentials({ ...credentials, electric_type: e.target.value })}
                />
                <TextField id="outlined-basic" label="Price"  variant="outlined" style={{margin:10}} fullWidth type="number"
                    value={credentials.price}
                    onChange={e => setCredentials({ ...credentials, price: e.target.value })}
                />
   
                <Button variant="contained" type="submit" color="primary" style={{ width: '50%',padding:10,margin:8,backgroundColor:'#ac5353' }}>
                    <b>Update </b>
                </Button>
              

            </form>
          </CardContent>
        
      </Card>
    );
}

export default EditESComponent;