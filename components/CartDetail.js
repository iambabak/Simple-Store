import react, { Component } from "react";
import { connect } from "react-redux";
import {fetchCartDataIfNeeded} from '../actions/actions'
import axios from 'axios'
import {getConfig} from '../actions/actions'
class CartDetail extends Component {
  constructor() {

    super();
    this.state = {
      cartProducts:null,
      products:{}
    };
  }
  
  async componentDidMount(){
    let response =  await axios.get(`http://api.projectant.aasoo.ir/orders/cart/show/` ,getConfig())
    response.data.data.cart.cart_products.map(cart_product=>
    this.setState({
      products: {
        
        ...this.state.products, 
            [cart_product.product.slug]: {
                ...this.state.products[cart_product.product.slug], 
                name: 
                cart_product.product.address,
                price:cart_product.product.price
            }
        }
    }))
    

  }
  getCartData(){
    const { dispatch } = this.props;
    dispatch(fetchCartDataIfNeeded())
    let cartData = JSON.parse(localStorage.getItem('cartData'))       
  }
  

  
  render() {

    return (
      
      <div>        
              <h1>cart</h1>
              {/* {Object.keys(this.state.products).map((product, index) => {
                <div key={index}>1
                <div>اسم : {this.state.products[product].name}</div>
                <div>قیمت : {product.price}</div>
                </div>
              })} */}
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
