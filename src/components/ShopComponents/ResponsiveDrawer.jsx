import React from 'react';
import { Route, Switch, Redirect, BrowserRouter, Router, useHistory, Link } from "react-router-dom";
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIronComponent from './AddIronComponent';
import WoodComponent from './WoodComponent';
//Icon Goes Here 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ExtensionIcon from '@material-ui/icons/Extension';
import ApartmentIcon from '@material-ui/icons/Apartment';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import SelectAllIcon from '@material-ui/icons/SelectAll';
//Sub Components
import IronComponent from './IronComponent';
import GlassComponent from './GlassComponent';
import TilesComponent from './TilesComponent';
import SanitaryComponent from './SanitaryComponent';
import PaintsComponent from './PaintsComponent';
import ElectricStoreComponent from './ElectricStoreComponent';

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
function ResponsiveDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const history = useHistory();


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
                        to="/"
                    >
                        <ListItem button >
                            <ListItemIcon><AddCircleIcon /></ListItemIcon>
                            <ListItemText primary="Iron" />
                        </ListItem>
                    </Link>

                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/wood"
                    >
                        <ListItem button onClick={(e) => { history.push('/wood'); }} >
                            <ListItemIcon><ExtensionIcon /></ListItemIcon>
                            <ListItemText primary="wood" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/glass"
                    >
                        <ListItem button onClick={(e) => { history.push('/glass'); }} >
                            <ListItemIcon><ViewHeadlineIcon /></ListItemIcon>
                            <ListItemText primary="Glass" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/tile"
                    >
                        <ListItem button onClick={(e) => { history.push('/tile'); }} >
                            <ListItemIcon><ApartmentIcon /></ListItemIcon>
                            <ListItemText primary="Tile" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/sanitary"
                    >
                        <ListItem button onClick={(e) => { history.push('/sanitary'); }} >
                            <ListItemIcon><ReceiptIcon /></ListItemIcon>
                            <ListItemText primary="Sanitary" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/paint"
                    >
                        <ListItem button onClick={(e) => { history.push('/paint'); }} >
                            <ListItemIcon><FormatPaintIcon /></ListItemIcon>
                            <ListItemText primary="Paint" />
                        </ListItem>
                    </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/electricStore"
                    >
                        <ListItem button onClick={(e) => { history.push('/electricStore'); }} >
                            <ListItemIcon><SelectAllIcon /></ListItemIcon>
                            <ListItemText primary="Electric Store" />
                        </ListItem>
                    </Link>


                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <Switch>
                    <Route exact path="/" component={IronComponent} />

                    <Route path="/wood" component={WoodComponent} />
                    <Route path="/glass" component={GlassComponent} />
                    <Route path="/tile" component={TilesComponent} />
                    <Route path="/sanitary" component={SanitaryComponent} />
                    <Route path="/paint" component={PaintsComponent} />
                    <Route path="/electricStore" component={ElectricStoreComponent} />

                    <Route path="*" component={() => <Redirect to="/" />} />

                </Switch>


            </main>
        </div>
    );
}



export default ResponsiveDrawer;
