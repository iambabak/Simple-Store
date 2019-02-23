import react, { Component } from "react";
import { connect } from "react-redux";
import {fetchCartDataIfNeeded} from '../actions/actions'
import axios from 'axios'
import {getConfig} from '../actions/actions'
class CartDetail extends Component {
  constructor() {

    super();
    this.state = {
      cartProducts:null
    };
  }
  
  async componentDidMount(){
    let response =  await axios.get(`http://api.projectant.aasoo.ir/orders/cart/show/` ,getConfig())
    console.log('response in did mount',response)
    let cartData = JSON.parse(localStorage.getItem('cartData')) 
    console.log('cartData',cartData)
    this.setState({
      cartProducts: cartData
    })

  }
  getCartData(){
    const { dispatch } = this.props;
    dispatch(fetchCartDataIfNeeded())
    let cartData = JSON.parse(localStorage.getItem('cartData'))       
  }
  

  
  render() {

    return (
      
      <div>
        {console.log('this.state.cartDataInState',this.state.cartDataInState)}
        
              <h1>cart</h1>
        <button onClick={()=>this.getCartData()}>getCartData</button>
        {/* {this.state.cartProducts? this.state.cartProducts.map(product => <div>slug: {product.slug}</div>):<div>not found</div>} */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // data: state.categoriesReducer.data
    data: state.categoriesReducer.data,
    auth: state.authReducer.token
  };
};

export default connect(mapStateToProps)(CartDetail);
