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
function EditTileComponent(props) {
    const classes = useStyles();
    const [] = React.useState(false);
    const [credentials, setCredentials] = useState({ name: props.data.name, quantitie: props.data.quantitie,dimension: props.data.dimension, tile_type: props.data.tile_type, price: props.data.price,pattern_name:props.data.pattern_name,used_in:props.data.used_in });
          const handleSubmit = (event) => {
            //alert('name and pass is'+JSON.stringify(credentials));
            event.preventDefault();
            const id = localStorage.getItem('id');
            axios.put(`http://localhost:3000/shops/${id}/tiles/${props.data._id}`, credentials)
                .then(res => {
                    // console.log(res);
                    // console.log(res.data);
                    store.addNotification({
                      title: "Success !",
                      message: "Successfully Edited Tile ",
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
                    //console.log(err);
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
            axios.delete(`http://localhost:3000/shops/${id}/tiles/${props.data._id}`)
                .then(res => {
                    // console.log(res);
                    // console.log(res.data);
                    store.addNotification({
                      title: "Delete !",
                      message: "Successfully Deleted Tile ",
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
          image="data:image/jpeg;base64,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"
          title="Paella dish"
        />
        <CardContent>
        <form className={classes.textfield} onSubmit={handleSubmit}>
                <TextField id="outlined-basic"  label="Name" style={{margin:10}} fullWidth  variant="outlined"
                    value={credentials.name}
                    onChange={e => setCredentials({ ...credentials, name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Pattern Name" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.pattern_name}
                    onChange={e => setCredentials({ ...credentials, pattern_name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Quantitie" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.quantitie}
                    onChange={e => setCredentials({ ...credentials, quantitie: e.target.value })}
                />
                <TextField id="outlined-basic" label="Dimension" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.dimension}
                    onChange={e => setCredentials({ ...credentials, dimension: e.target.value })}
                />
                <TextField id="outlined-basic" label="Use" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.used_in}
                    onChange={e => setCredentials({ ...credentials, used_in: e.target.value })}
                />
                <TextField id="outlined-basic" label="Type" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.tile_type}
                    onChange={e => setCredentials({ ...credentials, tile_type: e.target.value })}
                />
                <TextField id="outlined-basic" label="Price"  variant="outlined" style={{margin:10}} fullWidth
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

export default EditTileComponent;