import { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {fetchAddToCredit} from '../../actions/actions';
import { connect } from "react-redux";

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

class SingleProductData extends Component {
  addToBasket(slug){
    const { dispatch } = this.props;
    dispatch(fetchAddToCredit(slug))
  }
  render() {
    const { classes, product } = this.props;

    return (
      <div style={{direction:'rtl', marginRight: '30px'}}>
        <Grid  
        lg={12} md={12} lg md 
        container
        >
        {/* {console.log('productttt',product)} */}
          <Grid item
           lg md container direction="column" 
          spacing={16}>
            <Grid item lg md>
              <Typography gutterBottom variant="subtitle1">
                {product.title}
              </Typography>
              <Typography gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography color="textSecondary">ID: 1030114</Typography>
            </Grid>
            <Grid item>
            <Typography gutterBottom>
                {product.price} تومان
              </Typography>
            </Grid>
            <Grid item>
            <button onClick={()=>this.addToBasket(product.slug)}>افزودن به سبد خرید</button>
            </Grid>
            <Grid item>
            <Typography gutterBottom>
                {product.short_description} 
              </Typography>
            </Grid>
            
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orderData: state.userDataReducer.orderData
  };
};

SingleProductData = connect(mapStateToProps)(SingleProductData);
// export default SingleProductData
SingleProductData.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleProductData);
