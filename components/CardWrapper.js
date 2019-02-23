import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function CardWrapper(props) {
  const { classes } = props;

  return (
      <div>
    <Grid container m ={10} p={20} spacing={40} direction="row"
    alignItems={"center"} 
    >

    <Grid item lg={12} sm={12} xs={12}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.product.thumbnail}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.product.address}
            </Typography>
            <Typography component="p">{props.product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </Grid>
    </div>

  );
}

CardWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardWrapper);
