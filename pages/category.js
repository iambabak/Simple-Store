import { Component } from "react";
import createConfig from "../api/createConfig";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import ProductsResults from "../components/ProductsResults";
import Link from "next/link";
import Router from "next/router";
import Filter from "../components/Filter";
import { connect } from "react-redux";
import {handleLoading} from '../components/handleLoading'

let pricefil = "price_max=300000";
class Category extends Component {
  static async getInitialProps(context) {
    const { address, filter } = context.query;
    let mainFilter = ''
    if(context.query.filter)
    mainFilter = context.query.filter
    Object.keys(context.query).map(function(key, index) {
      console.log('mainFilter before',mainFilter)
      console.log('key, index , context.query[key]',key, index , context.query[key])
      if(key !== 'address' && key !== 'filter'){
        if(mainFilter === '')
        mainFilter = key + '[]=' + context.query[key]
        else
        mainFilter = mainFilter + '&'+ key + '[]=' + context.query[key]
        console.log('mainFilter',mainFilter)
      }
    });
    const { priceFilter } = context.query;
    let filterPriceInit = 2000;
    const res = await fetch(
      // `http://api.projectant.aasoo.ir/shelves/${address}`,
      // `http://api.projectant.aasoo.ir/shelves/category/address/${address}/products/`,
      `http://api.projectant.aasoo.ir/shelves/category/address/${address}/products/?${mainFilter ? mainFilter : ""}`,
      createConfig()
    );
    const show = await res.json();
    return { show, address, filterPriceInit, priceFilter };
  }
  constructor(){
    super()
    this.state={loading: true}
  }
  
  componentDidMount(){
    const {dispatch} = this.props
    this.setState({loading: false})
    console.log('didmouant')
    handleLoading(dispatch)
  }
  render() {
    return (
      <div>
        {this.state.loading ? <div>loading</div>: <div></div> }
      <Layout>
        <h1>Category results</h1>
        <button
          onClick={() =>
            Router.push( `/category?address=digital&filter=${pricefil}`,`/category/digital/${pricefil}`  )
            // Router.push(`/category/digital/${pricefil}`)
          }
        >
          push route
        </button>
        <Link
          as={`/category/digital/${pricefil}`}
          href={`/category?address=digital&filter=${pricefil}`}
        >
          <button
          // onClick={()=>Router.pushRoute('/category/digital/products/?price_max=300000')}
          >
            filter price
          </button>
        </Link>
        {/* priceFilter: {props.priceFilter} */}
        <ProductsResults products={this.props.show.data.products} category={this.props.show.data.category} />
        {console.log("props.show.data.products", this.props.show.data)}
        {/* <Filter filters={this.props.show.data.category.filters} /> */}
      </Layout>
      
      </div>
    );
  }
}

// Category.getInitialProps = async function(context) {
//   {
//     console.log("ali", this.props);
//   }

//   console.log(context.query);
//   const { address, filter } = context.query;
//   console.log("filter", filter);
//   console.log("address", address);
//   const { priceFilter } = context.query;
//   let filterPriceInit = 2000;
//   const res = await fetch(
//     // `http://api.projectant.aasoo.ir/shelves/${address}`,
//     // `http://api.projectant.aasoo.ir/shelves/category/address/${address}/products/?price_max=300000`,
//     `http://api.projectant.aasoo.ir/shelves/category/address/${address}/products/?${
//       filter ? filter : ""
//     }`,
//     createConfig()
//   );
//   const show = await res.json();
//   return { show, address, filterPriceInit, priceFilter };
// };
const mapStateToProps = state => {
  return {
    data: state.setFilterReducer.data,
    loading: state.handleLoadingReducer.loading

  };
};

export default connect(mapStateToProps)(Category);
