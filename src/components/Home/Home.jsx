import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SlideShow from './SlideShow';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { store } from 'react-notifications-component';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Build Me
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    textAlign: "left"
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    alignContent: 'left'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),

  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%',
    maxWidth: '200',
    PaddingTop: '5px',
    textAlign: 'centre'

},
paper: {
  backgroundColor: theme.palette.background.paper,

  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),

},
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Free of Cost'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Build Me',
    subheader: 'Easy Construction',
    price: '0',
    description: [
      'Users included',
      'Unlimited Access to storage',
      'Help center access',
      'Reviews support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Shops',
    price: '5%',
    description: [
      'Construction material  included',
      'Much storage',
      'Help center access',
      'Phone support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Our Team',
    description: ['Hassam Shakeel', 'Hamza Khalil', 'Mehar Khan', 'Moiz Tahir'],
  },
  {
    title: 'Features',
    description: ['Customer Satisfaction', 'Interactive Contracts', 'Intellectual  staff', '24/7 Sevice'],
  },
  {
    title: 'Contact Us',
    description: ['Hamza Khalil', '03065605043', 'hamza@gonovacloud.com', 'hamza.bsse3343@iiu.edu.pk'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];
function Home(props) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [openM, setOpenM] = React.useState(false);
  const [credentials, setCredentials] = useState({ name: '', comment: '' });



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const handleOpen = (id) => {
  
    setOpenM(true);
};

const handleCloseM = () => {
    setOpenM(false);
};
const handleSubmit=(event)=>{
  // alert('name and pass is'+JSON.stringify(credentials)+lab_id);
   event.preventDefault();
   axios.post(`http://localhost:3000/reviews`, credentials)
   .then(res => {
      // window.location.reload(false);
       // alert('successFully saved');
       // console.log(res.data);
       store.addNotification({
           title: "Thank You !",
           message: "Your Review is submitted  ",
           type: "success",
           insert: "top",
           container: "top-right",
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


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const open2 = Boolean(anchorE2);
  const id2 = open2 ? 'simple-popover' : undefined;
  return (<div>
   
     <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openM}
            onClose={handleCloseM}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openM}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Reviews</h2>
                    <form className={classes.root} onSubmit={handleSubmit} >
                        <TextField id="standard-basic" name="username" label="Name"
                            value={credentials.name}  fullWidth
                            onChange={e => setCredentials({ ...credentials, name: e.target.value })} 
                            
                            />


                        <TextField id="standard-basic" label="Comments" multiline
                            value={credentials.comment}
                            onChange={e => setCredentials({ ...credentials, comment: e.target.value })}
                            fullWidth
                        />
                        <br />
                        <Button variant="contained" type="submit" color="primary" fullWidth style={{marginTop:'10px'}} >
                            ADD
                        </Button>
                        

                    </form>
                </div>
            </Fade>
        </Modal>
     <React.Fragment>
    <CssBaseline />
  <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
        Build Me
        </Typography>
      <nav>
        {/* <Link variant="button" color="textPrimary" href="/ShopSignUp" className={classes.link}>
          Sign in
          </Link>
        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
          Enterprise
          </Link> */}
        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
          Support
          </Link>
      </nav>
      <Button color="primary" variant="outlined" className={classes.link} onClick={handleClick2}>
        Login
        </Button>
      <Popover
        id={id2}
        open={open2}
        anchorEl={anchorE2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography className={classes.typography}>
          <nav fullWidth>
            <Link variant="button" fullWidth color="textPrimary" href="/ShopSignIn" className={classes.link}>
              Shop
          </Link>
            <br />
            <Link variant="button" color="textPrimary" href="/SignInContractor" className={classes.link}>
              Contractor
          </Link>
            <br />
            <Link variant="button" color="textPrimary" href="/SignInLabour" className={classes.link}>
              Labour
          </Link>
            <br />
            <Link variant="button" color="textPrimary" href="SignInCustomer" className={classes.link}>
              Customer
          </Link>
            <br />
            <Link variant="button" color="textPrimary" href="/SignInInteriorDesigner" className={classes.link}>
              Interior Designer
          </Link>
          </nav>
        </Typography>
      </Popover>
    </Toolbar>
  </AppBar>
  {/* Hero unit */}
  <Container style={{ height: '300px', marginBottom: '40px' }}>
    <SlideShow />
  </Container>
  {/* End hero unit */}
  <Container maxWidth="md" component="main">
    <Grid container spacing={5} alignItems="flex-end">
      {tiers.map((tier) => (
        // Enterprise card is full width at sm breakpoint
        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
          <Card>
            <CardHeader
              title={tier.title}
              subheader={tier.subheader}
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
              action={tier.title === 'Build Me' ? <StarIcon /> : null}
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.cardPricing}>
                <Typography component="h2" variant="h3" color="textPrimary">
                  $ {tier.price}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  /mo
                  </Typography>
              </div>
              <ul>
                {tier.description.map((line) => (
                  <Typography component="li" variant="subtitle1" align="center" key={line}>
                    {line}
                  </Typography>
                ))}
              </ul>
            </CardContent>
            <CardActions>
              <Button fullWidth variant={tier.buttonVariant} onClick={(event) => { tier.buttonText === 'Sign up for free' ? setAnchorEl(event.currentTarget) : alert('not success') }} color="primary">
                {tier.buttonText}
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography className={classes.typography}>
                  <nav fullWidth>
                    <Link variant="button" fullWidth color="textPrimary" href="/ShopSignUp" className={classes.link}>
                      Shop
          </Link>
                    <br />
                    <Link variant="button" color="textPrimary" href="/SignUpContractor" className={classes.link}>
                      Contractor
          </Link>
                    <br />
                    <Link variant="button" color="textPrimary" href="/SignUpLabour" className={classes.link}>
                      Labour
          </Link>
                    <br />
                    <Link variant="button" color="textPrimary" href="SignUpCustomer" className={classes.link}>
                      Customer
          </Link>
                    <br />
                    <Link variant="button" color="textPrimary" href="/SignUpInteriorDesigner" className={classes.link}>
                      Interior Designer
          </Link>
                  </nav>
                </Typography>
              </Popover>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  {/* Footer */}
  <Container maxWidth="md" component="footer" className={classes.footer}>
    <Grid container spacing={4} justify="space-evenly">
      {footers.map((footer) => (
        <Grid item xs={6} sm={3} key={footer.title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {footer.title}
          </Typography>
          <ul>
            {footer.description.map((item) => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
       
      <Link href="#" variant="subtitle1" color="textSecondary" onClick={()=>setOpenM(true)}>
        Give Reviews
                </Link>
              

    </Grid>
    <Box mt={5}>
      <Copyright />
    </Box>
  </Container>
  {/* End footer */}
</React.Fragment>
  </div>
  
  )
}

export default Home;