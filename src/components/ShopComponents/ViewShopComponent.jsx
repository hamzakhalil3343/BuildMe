import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import axios from 'axios';
//Table Imports Goes Here !
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Rating Imports 
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width:'90%',
    marginLeft:'5%'
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
function ViewShopComponent(props) {
    const []= React.useState(false);
    const [openIron,setOpenIron]= React.useState(false);
    var rowsIron = props.data.iron;
    const [openWood,setOpenWood]= React.useState(false);
    var rowsWood = props.data.wood;
    const [openGlass,setOpenGlass]= React.useState(false);
    var rowsGlass = props.data.glass;
    const [openSanitary,setOpenSanitary]= React.useState(false);
    var rowsSanitary = props.data.sanitary;
    const [openTiles,setOpenTiles]= React.useState(false);
    var rowsTile = props.data.tiles;
    const [openPaint,setOpenPaint]= React.useState(false);
    var rowsPaint = props.data.paints;
    const [openES,setOpenES]= React.useState(false);
    var rowsES = props.data.electricStores;

    const []= React.useState('');
    const [lab_id]=React.useState(props.data._id);
    const [credentials] = React.useState({ name: props.data.profile_name, comment: '',rating: '' });

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
          <b>Shop Name : </b>{props.data.shop_name==undefined?<p>Not Found</p>:props.data.shop_name}<br/>
          <b>Name : </b> {props.data.honour_firstname +" "+props.data.honour_lastname} <br/>
         
          </Typography>
        
          <Button size="small" onClick={()=>setOpenIron(true)}>Show Iron</Button>

        </CardContent>
        <CardActions >
          { openIron  &&  <div style={{width:"100%"}}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Quantitie</b></TableCell>
            <TableCell align="center"><b>Type</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsIron.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantitie}</TableCell>
              <TableCell align="center">{row.iron_type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
              <br/><a href="#" onClick={()=>setOpenIron(false)}>Close</a></div>}
        </CardActions>

         {/* Wood Sec */}

        <Button size="small" onClick={()=>setOpenWood(true)}>Show Wood</Button>
        <CardActions >
          { openWood  &&  <div style={{width:"100%"}}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Quantitie</b></TableCell>
            <TableCell align="center"><b>Dimension</b></TableCell>
            <TableCell align="center"><b>Type</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsWood.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantitie}</TableCell>
              <TableCell align="center">{row.dimension}</TableCell>
              <TableCell align="center">{row.wood_type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
              <br/><a href="#" onClick={()=>setOpenWood(false)}>Close</a></div>}
        </CardActions>

         {/* Glass Sec */}

         <Button size="small" onClick={()=>setOpenGlass(true)}>Show Glass </Button>
        <CardActions >
          { openGlass  &&  <div style={{width:"100%"}}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Quantitie</b></TableCell>
            <TableCell align="center"><b>Dimension</b></TableCell>
            <TableCell align="center"><b>Type</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsGlass.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantitie}</TableCell>
              <TableCell align="center">{row.dimension}</TableCell>
              <TableCell align="center">{row.glass_type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
              <br/><a href="#" onClick={()=>setOpenGlass(false)}>Close</a></div>}
        </CardActions>
         {/* Sanitary Sec */}

         <Button size="small" onClick={()=>setOpenSanitary(true)}>Show Sanitary </Button>
        <CardActions >
          { openSanitary  &&   <div style={{width:"100%"}}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Quantitie</b></TableCell>
            <TableCell align="center"><b>Dimension</b></TableCell>
            <TableCell align="center"><b>Type</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsSanitary.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantitie}</TableCell>
              <TableCell align="center">{row.dimension}</TableCell>
              <TableCell align="center">{row.sanitary_type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
              <br/><a href="#" onClick={()=>setOpenSanitary(false)}>Close</a></div>}
        </CardActions>

               {/* Tile Sec */}

               <Button size="small" onClick={()=>setOpenTiles(true)}>Show Tile </Button>
        <CardActions >
          { openTiles  &&   <div style={{width:"100%"}}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Quantitie</b></TableCell>
            <TableCell align="center"><b>Dimension</b></TableCell>
            <TableCell align="center"><b>Type</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsTile.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantitie}</TableCell>
              <TableCell align="center">{row.dimension}</TableCell>
              <TableCell align="center">{row.tile_type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
              <br/><a href="#" onClick={()=>setOpenTiles(false)}>Close</a></div>}
        </CardActions>

         {/* Paints Sec */}

         <Button size="small" onClick={()=>setOpenPaint(true)}>Show Paint </Button>
        <CardActions >
          { openPaint  &&   <div style={{width:"100%"}}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Quantitie</b></TableCell>
            <TableCell align="center"><b>Type</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsPaint.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantitie}</TableCell>
              <TableCell align="center">{row.paint_type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
              <br/><a href="#" onClick={()=>setOpenPaint(false)}>Close</a></div>}
        </CardActions>
          {/* ES Sec */}

          <Button size="small" onClick={()=>setOpenES(true)}>Show Electric Store </Button>
        <CardActions >
          { openES  &&   <div style={{width:"100%"}}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Quantitie</b></TableCell>
            <TableCell align="center"><b>Type</b></TableCell>
            <TableCell align="center"><b>Price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsES.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.quantitie}</TableCell>
              <TableCell align="center">{row.electric_type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
              <br/><a href="#" onClick={()=>setOpenES(false)}>Close</a></div>}
        </CardActions>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"><b>Rating :</b></Typography>
        <Rating
          name="simple-controlled"
          value={props.data.rating}
          
         
        />
      </Box>
      </Card>
    );
}

export default ViewShopComponent;