import { Component} from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TableData from './TableData';
import Comments from './Comments'
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
});

class SingleProductTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, product } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{boxShadow:'none'}}>
          <Tabs value={value} onChange={this.handleChange} style={{background:'white', color:'black', boxShadow:'none'}} >
            <Tab label="درباره محصول" />
            <Tab label="مشخصات فنی" />
            <Tab label="امتیازدهی و نظرات" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer><TableData product={product}/></TabContainer>}
        {value === 2 && <TabContainer><Comments product={product}/></TabContainer>}
      </div>
    );
  }
}

SingleProductTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleProductTabs);