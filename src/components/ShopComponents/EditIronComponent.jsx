import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios';


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
function EditIronComponent(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [credentials, setCredentials] = useState({ name: props.data.name, quantitie: props.data.quantitie, iron_type: props.data.iron_type, price: props.data.price });
        const handleExpandClick = () => {
            setExpanded(!expanded);
          };
          const handleSubmit = (event) => {
            //alert('name and pass is'+JSON.stringify(credentials));
           
            const id = localStorage.getItem('id');
            axios.put(`http://localhost:3000/shops/${id}/iron/${props.data._id}`, credentials)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                }).catch(err => {
                    console.log(err);
                });
    
        }
        const handleDelete =(event)=>{
            const id = localStorage.getItem('id');
            axios.delete(`http://localhost:3000/shops/${id}/iron/${props.data._id}`)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                }).catch(err => {
                    console.log(err);
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
          image="https://sc02.alicdn.com/kf/HTB1JBz1lb5YBuNjSspoq6zeNFXak.jpg"
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
                <TextField id="outlined-basic" label="Type" variant="outlined" style={{margin:10}} fullWidth
                    value={credentials.iron_type}
                    onChange={e => setCredentials({ ...credentials, iron_type: e.target.value })}
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

export default EditIronComponent;