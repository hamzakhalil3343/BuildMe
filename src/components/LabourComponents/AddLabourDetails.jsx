import React,{useState,useEffect} from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { store } from 'react-notifications-component';
function AddLabourDetails(props) {
    const [credentials, setCredentials] = useState({ labour_type: '', hrs_worked: 0, labour_rate: ''});
    const [TeamPart,setTeamPart]=useState('');
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '65%',






            },
        },
    }));
    useEffect(() => {
        const id = localStorage.getItem('id');
        fetch(`http://localhost:3000/labours/${id}`)
          .then((response) => response.json())
          .then((data) => {
             
             setCredentials({...credentials,labour_type:data.labour_Type,hrs_worked:data.hrs_worked,labour_rate:data.labour_rate});
             setTeamPart(data.TeamPart);
            
          })
          .catch((e) => {
          
           console.log('err in fetch is ',e.message);
          });
      }, []);
  
    const classes = useStyles();
    const handleSubmit = (event) => {
        //alert('name and pass is'+JSON.stringify(credentials));
        event.preventDefault();
        const id = localStorage.getItem('id');
        axios.put(`http://localhost:3000/labours/${id}`, credentials)
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                store.addNotification({
                    title: "Success !",
                    message: "Successfully Added Details ",
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
        <div>
            <img style={{width:"10%",height:'20%'}} src={"https://iconape.com/wp-content/files/ig/251729/png/251729.png"}></img>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Labour Type" variant="outlined"
                    value={credentials.labour_type}
                    onChange={e => setCredentials({ ...credentials, labour_type: e.target.value })}
                />
                <TextField id="outlined-basic" label="Hours Worked" variant="outlined"
                    value={credentials.hrs_worked}
                    onChange={e => setCredentials({ ...credentials, hrs_worked: e.target.value })}
                />
                <TextField id="outlined-basic" label="Labour Rate" variant="outlined"
                    value={credentials.labour_rate}
                    onChange={e => setCredentials({ ...credentials, labour_rate: e.target.value })}
                />
                <TextField id="outlined-basic" label="Team Part"  variant="outlined"
                    value={TeamPart}
                  //  onChange={e => setCredentials({ ...credentials, TeamPart: e.target.value })}
                    disabled
                />
   
                <Button variant="contained" type="submit" color="primary" style={{ width: '50%',padding:10,backgroundColor:'#ac5353' }}>
                    <b>Add Details</b>
                </Button>
              

            </form>
        </div>
    );
}

export default AddLabourDetails;