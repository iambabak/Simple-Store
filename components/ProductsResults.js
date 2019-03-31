import react, { Component } from "react";
import AddToCredit from "./AddToCredit";
import CardWrapper from "./general/CardWrapper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Filter from "../components/Filter";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class ProductsResults extends Component {
  constructor() {
    super();
    this.state = {
      clickFistChart: "none",
      click: "none"
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        ProductsResults
        <div 
        className={classes.root}
        >
        <Grid container>
        <Grid item lg={3} md={3} sm={3} xs={3}>
            helooooooooo
            {this.props.category && <Filter filters={this.props.category.filters} />}
            
          </Grid>
          <Grid item  lg={9} md={9} sm={9} xs={9} >
          <Grid container 
        direction="row"
        >
            {this.props.products.map(product => (
              <CardWrapper product={product} />
            ))}
          </Grid>
          </Grid>
          
        </Grid>
      </div>
       </div>
    );
  }
}
// export default ProductsResults;
ProductsResults.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductsResults);
