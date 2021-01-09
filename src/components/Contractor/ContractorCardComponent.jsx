import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {TextField,Button} from '@material-ui/core';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { store } from 'react-notifications-component';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: -2,
    textAlign:"left"
  },
});
function ContractorCardComponent(props) {
    const [open,setOpen]= React.useState(false);
    const [value,setValue]= React.useState('');
    const [lab_id,setLabID]=React.useState(props.data._id);
    const [credentials, setCredentials] = React.useState({ name: props.data.profile_name, comment: '',rating: '' });

    const classes = useStyles();
    const handleSubmit=(event)=>{
       // alert('name and pass is'+JSON.stringify(credentials)+lab_id);
        event.preventDefault();
        axios.put(`http://localhost:3000/labours/${lab_id}`, credentials)
        .then(res => {
           // window.location.reload(false);
            // alert('successFully saved');
            // console.log(res.data);
            store.addNotification({
              title: "Success !",
              message: "Successfully Added Review ",
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
            title: "Sign In Failed !",
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
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           Build ME  <h2>Labour</h2>
          </Typography>
          <Typography variant="h5" component="h2">
            {/* be{bull}nev{bull}o{bull}lent */}
            {props.data.profile_name}
          </Typography>
          {/* <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          <Typography className={classes.pos} >
          <b>Profile Name : </b>{props.data.profile_name}<br/>
          <b>Labour Type : </b> {props.data.labour_Type} <br/>
          <b>Hours Worked : </b>{props.data.hrs_worked}<br/>
          <b>Rate : </b> {props.data.labour_rate} <br/>
          </Typography>
        
          <Button size="small" onClick={()=>setOpen(true)}>Give Review</Button>

        </CardContent>
        <CardActions >
          { open  &&  <form  onSubmit={handleSubmit} >
                            <TextField id="standard-basic" style={{marginBottom:2}} name="username" label="Name"
                                value={credentials.name}  fullWidth 
                                onChange={e => setCredentials({ ...credentials, name: e.target.value })} />
 

                            <TextField id="standard-basic" label="Comments" multiline
                                value={credentials.comment}
                                onChange={e => setCredentials({ ...credentials, comment: e.target.value })}
                                fullWidth
                            />
                            <br />
                            <Box component="fieldset" mb={3} borderColor="transparent">
       
        <Rating
          name="simple-controlled"
          value={credentials.rating}
          onChange={(event, newValue) => {
            //setValue(newValue);
            setCredentials({ ...credentials, rating: newValue });
            
          }}
        />
      </Box>
                            <Button variant="contained" type="submit" color="primary" fullWidth style={{marginTop:'10px'}} >
                                ADD
                            </Button>
                            <Button variant="contained" onClick={()=>setOpen(false)} type="submit" color="primary" fullWidth style={{marginTop:'10px'}} >
                                Cancel
                            </Button>
                            

                        </form>}
        </CardActions>
      </Card>
    );
}

export default ContractorCardComponent;