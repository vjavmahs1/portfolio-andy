import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    margin: 10
  },

  card: {
    minwidth: 275
  }
};

function Research(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body2" component="p">
            1. The Effects of Experimentally-Induced Anxiety on Attentional
            Capture
          </Typography>
        </CardContent>
        <CardActions>
          <ToggleButton size="small">Learn More</ToggleButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Research);
