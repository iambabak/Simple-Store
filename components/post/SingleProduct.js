import { Component } from "react";
import SingleProductData from "./SingleProductData";
import SingleProductImagesSection from "./SingleProductImagesSection";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import SingleProductTabs from './SingleProductTabs'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

class SingleProduct extends Component {
  render() {
    // const { classes } = this.props;
    const { classes, product } = this.props;
    return (
      <div className={classes.root}>
        {/* <Paper className={classes.paper}> */}
        <Grid container>
        <Grid item 
          lg={3} md={3} spacing={16}
          >
            <SingleProductImagesSection mainImage={product.thumbnail} product={product} />
            </Grid>
          <Grid item 
          lg={7} md={7} spacing={3}
          // style={{direction:'rtl', marginRight: '10px'}}
          >
            <SingleProductData product={product} />
            </Grid>
            
            <SingleProductTabs product={product}/>
            </Grid>
        {/* </Paper> */}
      </div>
    );
  }
}
// export default SingleProduct
SingleProduct.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleProduct);
