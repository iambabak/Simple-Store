import { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import shadows from "@material-ui/core/styles/shadows";
import Grid from "@material-ui/core/Grid";
import StarRating from "./StarRating";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 200,
    height: 250,
    boxShadow: "none",
    marginTop: 20,
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardContent:{
    direction: 'rtl',
  },
  starRating:{
    display: 'flex'
  }
});
// import card from "bootstrap"

class CardWrapper extends Component {
  state = { expanded: false };

  render() {
    const { product, classes } = this.props;
    // const { classes, handleChange } = this.props;

    return (
      // <div className={classes.root}>
      // <Grid container  spacing={24}>
      <Grid 
      item lg={3} md={3} sm={4} xs={6}
      style={{marginRight:'0px'}}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={product.thumbnail}
            title="Paella dish"
          />
          {console.log('product.address',product.address)}
          <Link
            as={`/p/${product.address}`}
            href={`/post?address=${product.address}`}
          >
          <a>
            <CardContent className={classes.cardContent}>
              <Typography component="p">{product.title}</Typography>
              <Typography component="p">{product.price} تومان</Typography>
              <Typography component="p" className={classes.starRating}>
                <StarRating rating={product.ratings_count} />
              </Typography>
            </CardContent>
            </a>
          </Link>
          <CardActions className={classes.actions} disableActionSpacing />
        </Card>
      </Grid>
        //  </Grid>
        //  </div>
    );
  }
}
CardWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CardWrapper);

// export default CardWrapper;
