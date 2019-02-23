import Layout from "../components/Layout";
import react, { Component } from "react";
import { connect } from "react-redux";
import CartDetail from '../components/CartDetail'
import {getToken} from '../agent'
class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <CartDetail/>
        <h1>carts data should be here</h1>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.addToCreditReducer.products
  };
};




export default connect(mapStateToProps)(Cart);
