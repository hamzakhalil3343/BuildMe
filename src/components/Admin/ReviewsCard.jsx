import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign:'left',
    margin:'10px'
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
    marginBottom: 12,
  },
});
function ReviewsCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root}>
        <CardContent>
         
          <Typography variant="h6" >
          <b>Name :</b> {props.data.name}
          </Typography>
         
          <Typography variant="body2" component="p">
            {/* well meaning and kindly.
            <br />
            {'"a benevolent smile"'} */}
            <b style={{marginRight:'10px'}}>Comment :</b>
            {props.data.comment}
          </Typography>
        </CardContent>
      
      </Card>
    );
}

export default ReviewsCard;