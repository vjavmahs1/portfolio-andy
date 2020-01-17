import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const  styles = {
  root: {
    marginLeft : 10,
    marginBottom: 20,
  },
  card: {
    minWidth: 275,
  },
};


function Publication(props) {
    const { classes, body, link } = props;
    return (
        <div className = {classes.root}>
            <Card className={classes.card}>
            <CardContent>
                <Typography variant="body2" component="p"> 
                  {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href={link} target="_blank" >learn more</a> </Button>
            </CardActions>
            </Card>
        </div>
    )

}

Publication.defaultProps = {
  body: "",
  link: ""
}

export default withStyles(styles)(Publication);