import react, { Component } from "react";
import {fetchAddToCredit} from '../actions/actions'
import { connect } from "react-redux";
import CheckBoxFilter from './CheckBoxFilter'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as actionTypes from '../actions/actionTypes'
// import CheckBoxFilter from './CheckBoxFilter'
const styles = theme => ({
  root: {
    width: '100%',
  },
  rowFilter:{
    boxShadow:'none'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    direction: 'rtl'
  },
  expandIcon:{
    // display:'relative',
    position:'relative',
    left:'-29vw',
    top: '20px',
    // right:'0px',
    color: 'black'
  },
  direction:{
    direction: 'rtl'
  }
});
class Filter extends Component {
    
  constructor() {
    super();
    this.state = {
      
    };
  }
  handleChange(slug, choice_slug){
    console.log(slug, choice_slug)
    const filterURL = slug+'='+choice_slug
    console.log('filterURL',filterURL)
    const { dispatch} = this.props
    dispatch({ type: actionTypes.ADD_FILTER, data: this.props.data+'&'+filterURL })
    setInterval(console.log('after'),10000)
    console.log(this.props.data)
    Router.push( `/category?address=digital&filter=${filterURL}`,`/category/digital/${filterURL}`  )
  //   Router.push(`/category/digital/${filterURL}`)

}
  render() {
    const {filters, classes} = this.props
    return (
      <div>
          <div className={classes.root}>
          {filters.map(filter => (
      <ExpansionPanel className={classes.rowFilter}>
      <ExpansionPanelSummary classes={{expandIcon: classes.expandIcon}} className={classes.direction} expandIcon={<ExpandMoreIcon 
      // className={classes.expandIcon}
      // classes={{expandIcon: classes.expandIcon}}
      />}>
        <Typography className={classes.heading}>{filter.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <CheckBoxFilter filter = {filter}/>
      {/* {filter.choice_items.map(el => (
                    <div>
                    <input type="checkbox" name="sss" value="later" onChange={()=>this.handleChange(filter.slug, el.slug)} /> {el.title}
                    </div>
                ))} */}
      </ExpansionPanelDetails>
    </ExpansionPanel>      
          ))}
    </div>



          {console.log('sdfdfs', filters)}
          {/* {filters.map(filter => <CheckBoxFilter filter = {filter}/>)} */}
          
      </div>
    );
  }
}
  
// export default Filter;
Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);