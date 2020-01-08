import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const  styles = {
  root: {
    margin: 10
  },
  card: {
    minWidth: 275,
  },
};


function Publication(props) {
    const { classes } = props;
    return (
        <div className = {classes.root}>
            <Card className={classes.card}>
            <CardContent>
                <Typography variant="body2" component="p"> 
                  {props.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>
    )

}

export default withStyles(styles)(Publication);