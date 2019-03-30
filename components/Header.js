import { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { fetchAuthDataForGuest } from "../actions/actions";
import { fetchCategoriesIfneeded } from "../actions/actions";
import { fetchCartDataIfNeeded } from "../actions/actions";
import TemporaryDrawer from "./general/TemporaryDrawer";
import LoginDialog from "./login/loginDialog";

import Link from "next/link";
import Divider from "@material-ui/core/Divider";
// import TemporaryDrawer from "./general/TemporaryDrawer";
import { handleLoading } from "./handleLoading";
import "./headerStyle.css";

const styles = theme => ({
  root: {
    backgroundColor: "red",
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3
      // width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    direction: "rtl",
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  sectionWide: {
    display: "flex",
    flexDirection: "row",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      clickFistChart: "none",
      click: "none",
      cartData: {}
    };
    this.localStorageUpdate = this.localStorageUpdate.bind(this);

  }
  async componentDidMount() {
    
    const { dispatch } = this.props;
    await dispatch(fetchCategoriesIfneeded());
    if (!Object.entries(this.props.cartDataOrigin).length)
     await dispatch(fetchCartDataIfNeeded());
     console.log('!Object.keys(localStorage.myData).length',localStorage.myData)

    //  console.log('!Object.keys(localStorage.myData).length',Object.keys(localStorage.myData).length)
    if (localStorage.myData === undefined || !Object.keys(localStorage.myData).length) {
     await dispatch(fetchAuthDataForGuest());
    }
    let myData = JSON.parse(localStorage.getItem("myData"));
    console.log("myDatamyData", myData);
    // console.log('myDatamyData.guest',myData.guest)
    if (myData !== undefined || !Object.keys(myData).length) {
      if (myData.guest) {
        this.setState({ guest: true });
      } else {
        this.setState({ guest: false });
        this.setState({ userName: myData.user.first_name });
      }
    }
  }
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  handleChange(data) {
    console.log("data", data);
    this.setState({ searchData: data });
  }
  localStorageUpdate(){
    console.log('222333')
    let myData = JSON.parse(localStorage.getItem("myData"));
    if(myData.user){
      this.setState({ guest: false });
      this.setState({ userName: myData.user.first_name });
      console.log('myData.user.first_name',myData.user.first_name)
    }
    


  }

  render() {
    const { dispatch } = this.props;
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        {console.log("ssss", this.props.data)}
        {this.props.data.map(category => (
          <Link
            as={`/category/${category.address}`}
            href={`/category?address=${category.address}`}
          >
            <a style={{ cursor: "pointer", textDecoration: "none" }}>
              <MenuItem onClick={this.handleMobileMenuClose}>
                <p onClick={() => handleLoading(dispatch)}>{category.title}</p>
              </MenuItem>
            </a>
          </Link>
        ))}
        {/* <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messagsssssssssssssssses</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem> */}
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "white",
            color: "black",
            boxShadow: "none"
          }}
        >
          <Toolbar style={{ display: "flex", flexDirection: "row" }}>
            <div className={classes.sectionMobile}>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleMobileMenuOpen}
              >
                <MenuIcon>
                  <MenuItem primaryText="Refresh">
                    <p>ssss</p>
                  </MenuItem>
                </MenuIcon>
              </IconButton>
            </div>
            <div className={classes.search}>
              <Link
                as={`/search/${this.state.searchData}`}
                href={`/search?address=${this.state.searchData}`}
              >
                {/* <div className={classes.searchIcon}> */}
                <Link
                  as={`/search/${this.state.searchData}`}
                  href={`/search?address=${this.state.searchData}`}
                >
                  {/* <button>ssss</button> */}
                  {/* <div>sss</div> */}
                  <a style={{ color: "black" }}>
                    <SearchIcon />
                  </a>
                </Link>
                {/* </div> */}
              </Link>

              <InputBase
                // onChange={()=> console.log(11)}
                onChange={ref => this.handleChange(ref.target.value)}
                placeholder="جستجو"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
              {console.log("this.state.guest", this.state.guest)}
              {this.state.guest !== undefined &&
                (this.state.guest === true ? (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ whiteSpace: "nowrap", margin: "0px 10px" }}>
                      ثبت نام
                    </div>
                    <div style={{ whiteSpace: "nowrap", margin: "0px 10px" }}>
                      <LoginDialog onlocalStorageUpdate={this.localStorageUpdate} text={"ورود"}/>
                    </div>
                    <TemporaryDrawer />
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ whiteSpace: "nowrap", margin: "0px 10px" }}>
                      {console.log(
                        "localStoragelocalStoragelocalStorage",
                        localStorage
                      )}
                      {this.state.userName}
                    </div>
                    <TemporaryDrawer />
                  </div>
                ))}
              {/* <div onClick={()=> <TemporaryDrawer/>}>click</div> */}
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
              {/* <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
          <Divider variant="middle" />
          <Toolbar className={classes.sectionWide}>
            {this.props.data.map(category => (
              <Link
                as={`/category/${category.address}`}
                href={`/category?address=${category.address}`}
              >
                <a style={{ cursor: "pointer", textDecoration: "none" }}>
                  <Typography
                  //   className={classes.title}
                  // variant="h6"
                  // color="inherit"
                  // noWrap
                  >
                    <p
                      onClick={() => handleLoading(dispatch)}
                      className="categoriesTitle"
                    >
                      {category.title}
                    </p>
                  </Typography>
                  {/* <MenuItem onClick={this.handleMobileMenuClose}>
                <p>{category.title}</p>
              </MenuItem> */}
                </a>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
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
    cartDataOrigin: state.getCartDataReducer.cartDataOrigin,
    loading: state.handleLoadingReducer.loading
  };
};
Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(withStyles(styles)(Header));

// export default withStyles(styles)(Header);
