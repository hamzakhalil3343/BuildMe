import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Button,TextField} from '@material-ui/core';
import RemarksComponent from './RemarksComponent';
//Table Imports Goes Here !

//Rating Imports 

const useStyles = makeStyles({
  root: {
    width:'50%',
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
  table: {
    width: '100%',
  }
});
function AcceptContract(props) {
    const []= React.useState(false);
    const [open,setOpen]= React.useState(false);
   
    const []= React.useState('');
    const []=React.useState(props.data._id);
    const [] = React.useState({ name: props.data.profile_name, comment: '',rating: '' });

    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           Build ME 
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
          <b>Name : </b>{props.data.profile_name}<br/>
         
         
          </Typography>
        
          <Button size="small" onClick={()=>setOpen(true)}>Show Contracts</Button>

        </CardContent>
        <CardActions >
          { open  &&  <div style={{width:"100%"}}>
           
          {props.data.contracts.map((row)=>(
              <div style={{textAlign:'left'}}>
               <p><b>Name :</b> {row.name}</p>
               <p> <b>Details :</b> {row.details}</p>
              <RemarksComponent contractID={row._id} customerID={props.data._id}/>
              </div>
                 
              )
                
              )}
              <br/><a href="#" onClick={()=>setOpen(false)}>Close</a></div>}
        </CardActions>

        
      
      </Card>
    );
}

export default AcceptContract;