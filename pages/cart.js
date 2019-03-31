import Layout from "../components/Layout";
import react, { Component } from "react";
import { connect } from "react-redux";
import CartDetail from "../components/CartDetail";
import { getToken } from "../agent";
import { fetchCartDataIfNeeded } from "../actions/actions";
import CartTable from '../components/cart/CartTable';
import Divider from '@material-ui/core/Divider';

class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static async getInitialProps({ reduxStore }) {
    // console.log("tooshe", this.props.cartDataOrigin);
    reduxStore.dispatch(fetchCartDataIfNeeded());

    //   console.log("ali", this.props);

    // console.log(context.query);
    // const { address, filter } = context.query;
    // console.log("filter", filter);
    // console.log("address", address);
    // const { priceFilter } = context.query;
    // let filterPriceInit = 2000;
    // const res = await fetch(
    //   // `http://api.projectant.aasoo.ir/shelves/${address}`,
    //   // `http://api.projectant.aasoo.ir/shelves/category/address/${address}/products/`,
    //   `http://api.projectant.aasoo.ir/shelves/category/address/${address}/products/?${filter ? filter : ""}`,
    //   createConfig()
    // );
    // const show = await res.json();
    // return { show, address, filterPriceInit, priceFilter };
    return 1;
  }
  handleDelete(slug){
    const { dispatch} = this.props
    console.log('slug',slug)
    
  }

  render() {
    return (
      <Layout>
        <CartDetail />
        <CartTable/>
        <Divider variant="middle" />
        <div>
        <div>جمع کل خرید: {this.props.cartDataOrigin.total_price}</div>
        <div style={{position: 'absolute',left: '50px'}}>
        <button style={{margin:'10px'}}>بازگشت به صفحه اصلی</button>
        <button>تکمیل سفارش خرید</button>
        </div>
        </div>
        {console.log("this.props.cartDataOrigin222", this.props.cartDataOrigin)}
        
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.setFilterReducer.data,
    cartDataOrigin: state.getCartDataReducer.cartDataOrigin
  };
};

export default connect(mapStateToProps)(Cart);
