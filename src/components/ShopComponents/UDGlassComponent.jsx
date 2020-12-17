import React,{useState,useEffect} from 'react';
import EditGlassComponent from './EditGlassComponent';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin:10,
    display:'flex',
    flexDirection:'row'
  },
}));
function UDGlassComponent(props) {
    const classes = useStyles();
    const [data,setData]=useState([]);
  
    const id = localStorage.getItem('id');
    useEffect(() => {
         const fetchData = async () => {
            const result = await axios(
              `http://localhost:3000/shops/${id}/glass`,
            );
       
            setData(result.data);
            console.log('data is ',data)
          };
       
          fetchData();
       
       
        },[]);
    
    return (
        <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              {data.map((row)=>(
                
                 <EditGlassComponent data={row}/>
              )
                
              )}
            
          </Paper>
        </Grid>
        </Grid>
       
    );
}

export default UDGlassComponent;