import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { fetchCartDataIfNeeded } from "../../actions/actions";
import { countChangeCartData } from "../../actions/actions";
import './ResponsiveDrawer.css'
const drawerWidth = 240;

const styles = theme => ({
  image: {
    width: 128,
    height: 128
  },
  img: {
    width: 128,
    height: 128,
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  rootResponsive: {
    padding: "20px",
    flexGrow: 1
  },
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    minWidth: "30vw",
    borderRight: "solid rgba(0, 0, 0, 0.12)",
    position: "absolute",
    left: "-111111111px",
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  };
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(fetchCartDataIfNeeded());
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  handleCountChange(count, slug) {
    const { dispatch } = this.props;
    const formData = { count: count, product: slug };
    dispatch(countChangeCartData(formData));
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div 
      // style={{ width: "120%" }}
      >
        {console.log("this.props.cartDataOrigin", this.props.cartDataOrigin)}
        {this.props.cartDataOrigin &&
          this.props.cartDataOrigin.cart_products.map(product => (
            <div className={classes.rootResponsive}>
              {/* <Paper className={classes.paper}> */}
              {console.log("productproductproduct", product)}
              <Grid container spacing={16}>
                <Grid item>
                  {/* <ButtonBase className={classes.image}> */}
                    <img
                    className="border imgDrawer"
                      // className={classes.img}
                      alt="complex"
                      src={product.product.thumbnail}
                    />
                  {/* </ButtonBase> */}
                </Grid>
                <Grid style={{ marginTop: "15px", display:'inline',float:'left' }} item xs={12} sm container>
                  <Grid style={{display:'inline',float:'left',padding:'5px'}} item xs container direction="column" spacing={16}>
                    <Grid style={{padding:'0px'}} item xs>
                      <Typography gutterBottom variant="subtitle1" />
                      <Typography gutterBottom>
                        {product.product.title}
                      </Typography>
                      <Grid 
                      className="inlineBlock"
                      // style={{display:"inline-block"}}
                      item container>
                        <Grid 
                        className="inlineBlock"
                        // style={{display:"inline-block"}} 
                        item>
                          <Typography color="textSecondary">
                            {product.product.price}
                          </Typography>
                        </Grid>
                        <div 
                        className="floatLeft"
                        style={{
                          // float:'left',
                          display:'flex'}}>
                        <Grid item>
                          <button
                            style={{
                              borderRadius: "0px 10px 10px 0px",
                              boxShadow: "none",
                              border: 'solid grey',
                              background: 'none',
                              height: "22px"
                            }}
                            onClick={() =>
                              this.handleCountChange(
                                product.count - 1,
                                product.product.slug
                              )
                            }
                          >
                            -
                          </button>
                        </Grid>
                        <Grid
                          item
                          style={{
                            padding: "3px 6px",
                            border: "solid",
                            height: "22px"
                          }}
                        >
                          <div>{product.count}</div>
                        </Grid>
                        <Grid item>
                          <button
                          style={{
                            borderRadius: "10px 0px 0px 10px",
                            boxShadow: "none",
                            border: 'solid grey',
                            background: 'none',
                            height: "22px"
                          }}
                            onClick={() =>
                              this.handleCountChange(
                                product.count + 1,
                                product.product.slug
                              )
                            }
                          >
                            +
                          </button>
                        </Grid>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1"> </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* </Paper> */}
            </div>
          ))}
        <Divider variant="middle" />
        <div style={{ padding: "20px"
        // , display: "flex", flexDirection: "row" 
        }}>
          <input placeholder="کد تخفیف" />
          <button className='floatLeft'>اعمال</button>
        </div>
        <Divider variant="middle" />
        <div style={{ padding: "20px"
        // , display: "flex", flexDirection: "row" 
        }}>
          <div style={{display:'inline'}}>جمع</div>
          <div 
          className='floatLeft'
          // style={{float:'left'}}
          >
            {this.props.cartDataOrigin &&
              this.props.cartDataOrigin.products_price}
          </div>
          {console.log("this.props.cartDataOrigin", this.props.cartDataOrigin)}
        </div>
        <div style={{ padding: "20px"}}>
          <div style={{display:'inline'}}>هزینه ارسال</div>
          <div 
          className='floatLeft'
          // style={{float:'left'}}
          >
            {this.props.cartDataOrigin &&
              this.props.cartDataOrigin.delivery_price}
          </div>
          {console.log("this.props.cartDataOrigin", this.props.cartDataOrigin)}
        </div>
        <Divider variant="middle" />
        <div style={{ padding: "20px"
        // , display: "flex", flexDirection: "row" 
        }}>
          <div style={{display:'inline'}}> مجموع</div>
          <div 
          className='floatLeft'
          // style={{float:'left'}}
          >
            {this.props.cartDataOrigin && this.props.cartDataOrigin.total_price}
          </div>
          {console.log("this.props.cartDataOrigin", this.props.cartDataOrigin)}
        </div>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav
          // style={{ position:'absolute', left: '-111111111px'}}
          className={classes.drawer}
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor="top"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // data: state.categoriesReducer.data
    data: state.categoriesReducer.data,
    auth: state.authReducer.token,
    slug: state.addToCreditReducer.slug,
    price: state.addToCreditReducer.total_price,
    products: state.addToCreditReducer.products,
    cartDataOrigin: state.getCartDataReducer.cartDataOrigin
  };
};

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(ResponsiveDrawer)
);
