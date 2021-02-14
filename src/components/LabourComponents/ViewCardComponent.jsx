import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//Table Imports Goes Here !

//Rating Imports 
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    width:'20%',
    margin:10,
    boxShadow:'5px 5px  #8cb8f5'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: -2,
    textAlign:"left"
  },
  table: {
    width: '100%',
  }
});
function ViewCardComponent(props) {
    const []= React.useState(false);
   

    const classes = useStyles();
  
    return (
      
          <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           Build ME 
          </Typography>
         
           <Typography style={{textAlign:'center'}} color="textSecondary">
           {props.data.labour_Type}
          </Typography>
         {/* <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          <Typography className={classes.pos} >
          <b>Name : </b>{props.data.profile_name}<br/>
          <b>Team Part : </b> {props.data.TeamPart} <br/>
          <b>Team Details : </b> {props.data.TeamDetails} <br/>
           <Rating name="size-large" defaultValue={props.data.Rating} style={{marginLeft:'25%'}} disabled  size="large" /> <br/>
           {/* {props.data.Reviews !== [] ? "Name :" + props.data.Reviews[0].name :''} */}
           {props.data.Reviews.map((row)=>(row.name!==undefined?
               <div>
                 {/* <b>Name : </b> {row.name} <br/> */}
               <b style={{color:'#a5acb5'}}>{row.name}  : </b> {row.comment} <a href='#'>see more</a><br/> 
               
               </div>
               :''
              
              )
                
              )}
          </Typography>
        
         

        </CardContent>
      
       
      </Card>
    
   
    );
}

export default ViewCardComponent;