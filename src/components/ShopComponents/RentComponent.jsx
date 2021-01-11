import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
function RentComponent() {
      
    //   handleInputChange = (e) => {
    //     const { name, value } = e.target;
        
    //     this.setState({ [name]: value });
    //   }
      var [cvc,setcvc] = useState('');
      var [expiry,setexpiry] = useState('');
      var [focused,setfocused] = useState('');  
      var [name,setname] = useState('');
      var [number,setnumber] = useState('');
      const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
              marginLeft:'640px',
            margin: theme.spacing(2),
            width: '600px',
            display:'flex',
             alignContent:'center'
             


            
    
    
    
    
    
          },
        },
      }));
      const classes = useStyles();
      const handleSubmit = () => {

      }
        return (
          <div id="PaymentForm"  >
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focused}
              name={name}
              number={number}
            />
           
                {/* <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={(e)=>setnumber(e.target.value)}
                onFocus={handleInputFocus}
              /> */}
             
             <form className={classes.root} onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="CVC" variant="outlined"
            value={cvc}
            onChange={e =>setcvc(e.target.value)}
          />
          <TextField id="outlined-basic"  variant="outlined" type="date"
            value={expiry}
            onChange={e =>setexpiry(e.target.value)}
          />
          <TextField id="outlined-basic" label="Name" variant="outlined"
            value={name}
            onChange={e => setname(e.target.value)}
          />
          <TextField id="outlined-basic" label="Number" variant="outlined"
            value={number} type="number"
            onChange={e => setnumber(e.target.value)}
          />
          <Button variant="contained" type="submit" color="primary">
              <CreditCardIcon style={{margin:'5px'}}/>
           Pay
         </Button>
          <Button variant="contained" color="primary" href='/'>
            Cancel
</Button>

        </form>
          </div>
        );
     
}

export default RentComponent;