import React,{useState,useEffect} from 'react';
import { Route, Switch, useHistory, Link } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WoodComponent from './WoodComponent';
//Icon Goes Here 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ExtensionIcon from '@material-ui/icons/Extension';
import ApartmentIcon from '@material-ui/icons/Apartment';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import SelectAllIcon from '@material-ui/icons/SelectAll';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//Sub Components
import IronComponent from './IronComponent';
import GlassComponent from './GlassComponent';
import TilesComponent from './TilesComponent';
import SanitaryComponent from './SanitaryComponent';
import PaintsComponent from './PaintsComponent';
import ElectricStoreComponent from './ElectricStoreComponent';
import RentComponent from './RentComponent';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor:'#ac5353'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));
function ResponsiveDrawer() {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const [id,setID]=useState('');
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const history = useHistory();
    //const id = '5fd22314e440b01a189d2f0f';
    useEffect(
        ()=>{
           setID(localStorage.getItem('id'));   
}

    )
    return (
        <div className={classes.root}>
              
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Build Me
            </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        
                    >
                        <ListItem button onClick={() => { history.push(`/Shops/${id}/iron`); }}>
                            <ListItemIcon><AddCircleIcon /></ListItemIcon>
                            <ListItemText primary="iron" />
                        </ListItem>
                    </Link>

                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}

                       
                    >
                        <ListItem button  onClick={() => { history.push(`/Shops/${id}/wood`); }} >
                            <ListItemIcon><ExtensionIcon /></ListItemIcon>
                            <ListItemText primary="wood" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                       
                    >
                        <ListItem button onClick={() => { history.push(`/Shops/${id}/glass`); }} >
                            <ListItemIcon><ViewHeadlineIcon /></ListItemIcon>
                            <ListItemText primary="Glass" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        
                    >
                        <ListItem button onClick={() => { history.push(`/Shops/${id}/tile`); }} >
                            <ListItemIcon><ApartmentIcon /></ListItemIcon>
                            <ListItemText primary="Tile" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <ListItem button onClick={() => { history.push(`/Shops/${id}/sanitary`); }} >
                            <ListItemIcon><ReceiptIcon /></ListItemIcon>
                            <ListItemText primary="Sanitary" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                       
                    >
                        <ListItem button onClick={() => { history.push(`/Shops/${id}/paint`); }} >
                            <ListItemIcon><FormatPaintIcon /></ListItemIcon>
                            <ListItemText primary="Paint" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <ListItem button onClick={() => { history.push(`/Shops/${id}/electricStore`); }} >
                            <ListItemIcon><SelectAllIcon /></ListItemIcon>
                            <ListItemText primary="Electric Store" />
                        </ListItem>
                    </Link>


                </List>
                <Divider />
                <List>
                <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <ListItem button onClick={() => { history.push(`/Shops/${id}/rent`); }} >
                            <ListItemIcon><LocalAtmIcon /></ListItemIcon>
                            <ListItemText primary="Rent" />
                        </ListItem>
                        <ListItem button onClick={() => { localStorage.removeItem('id'); history.push('/'); }} >
                            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary="Sign out" />
                        </ListItem>
                    </Link>
                    
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                

                <Switch>
                    <Route exact path="/Shops/:id/iron" component={IronComponent} />

                    <Route path="/Shops/:id/wood" component={WoodComponent} />
                    <Route path="/Shops/:id/glass" component={GlassComponent} />
                    <Route path="/Shops/:id/tile" component={TilesComponent} />
                    <Route path="/Shops/:id/sanitary" component={SanitaryComponent} />
                    <Route path="/Shops/:id/paint" component={PaintsComponent} />
                    <Route path="/Shops/:id/electricStore" component={ElectricStoreComponent} />
                    <Route path="/Shops/:id/rent" component={RentComponent} />

                   

                </Switch>


            </main>
        </div>
    );
}



export default ResponsiveDrawer;
