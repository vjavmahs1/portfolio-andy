import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
  const { classes, body, caption } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
          <Typography variant="caption">
            Representative Publications: <br></br>
            {caption}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Research);
