import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { connect} from 'react-redux'
import { countChangeCartData} from '../../actions/actions'
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import './ResponsiveDrawer.css'

const styles =theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    padding: '20px',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleCountChange(count, slug){
    const { dispatch} =this.props
    const formData = {count: count , product: slug}
    dispatch(countChangeCartData(formData))

  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div 
      style={{width:'33vw'}}
      // style={{width:'120%'}}
      >
     {this.props.cartDataOrigin &&
          this.props.cartDataOrigin.cart_products.map(product => (
            <div className={classes.root}>
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
                <Grid style={{ marginTop: "15px", display:'inline',float:'left',paddingLeft: '35px' }} item xs={12} sm container>
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
    //   <div className={classes.list}>
    //     <List>
    //         {this.props.cartDataOrigin && this.props.cartDataOrigin.cart_products.map(product => (
    //             <List>
                  
    //               {console.log('this.props.cartDataOrigin.cart_products',this.props.cartDataOrigin.cart_products)}
    //               <div className={classes.root}>
    //   <Paper className={classes.paper}>
    //               <Grid container spacing={16}>
    //       <Grid item>
    //         <ButtonBase className={classes.image}>
    //           <img className={classes.img} 
    //           // style={{width: '30%'}}
    //            alt="complex" src={product.product.thumbnail} />
    //         </ButtonBase>
    //       </Grid>
    //       <Grid item xs={12} sm container>
    //         <Grid item xs container direction="column" spacing={16}>
    //           <Grid item xs>
    //             <Typography gutterBottom variant="subtitle1">
    //               Standard license
    //             </Typography>
    //             <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
    //             <Typography color="textSecondary">ID: 1030114</Typography>
    //           </Grid>
    //           <Grid item>
    //             <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
    //           </Grid>
    //         </Grid>
    //         <Grid item>
    //           <Typography variant="subtitle1">$19.00</Typography>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     </Paper>
    // </div>
    //               <Grid  
    //     lg={12} md={12} lg md 
    //     container
    //     >
    //               <div>
    //                 <img style={{width: '30%'}} src={product.product.thumbnail}></img>
    //                 <div>{product.product.title}</div>
    //                 <div>{product.product.price}</div>
    //                 <button onClick={()=>this.handleCountChange(product.count-1, product.product.slug)}>-</button>
    //                 <div>{product.count}</div>
    //                 <button onClick={()=>this.handleCountChange(product.count+1, product.product.slug)}>+</button>
    //                 </div>
    //                 </Grid>
    //             </List>
    //         ))}
    //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //           <div>ssss</div>
    //         // <ListItem button key={text}>
    //         //   <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //         //   <ListItemText primary={text} />
    //         //   <div>sss</div>
    //         // </ListItem>
    //       ))}
    //     </List>
    //     <Divider />
    //     <List>
    //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div style={{width:'40%'}}>
        <div onClick={this.toggleDrawer('right', true)} style={{cursor:'pointer', whiteSpace: 'nowrap'}}>Open Left</div>
        {/* <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button> */}
        <Drawer style={{width:'40%'}} open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            // onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
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


TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(TemporaryDrawer);
export default connect(mapStateToProps)(withStyles(styles)(TemporaryDrawer));
