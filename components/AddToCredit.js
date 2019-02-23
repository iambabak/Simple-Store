import react, { Component } from "react";
import {fetchAddToCredit} from '../actions/actions'
import { connect } from "react-redux";


class AddToCredit extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  dispatchAddToCredit(productSlug){
    const { dispatch } = this.props;
    dispatch(fetchAddToCredit(productSlug))
      
  }
  render() {
    return (
      <div>
          slug: {this.props.productSlug}
        <button onClick={()=>this.dispatchAddToCredit(this.props.productSlug)}>add to credit</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
      data: state.categoriesReducer.data,
      auth: state.authReducer.token
    };
  };
  
  export default connect(mapStateToProps)(AddToCredit);