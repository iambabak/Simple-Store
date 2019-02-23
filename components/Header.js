import react, { Component } from "react";
import { connect } from "react-redux";
import categories from "../actions/actions";
import { fetchCategoriesIfneeded } from "../actions/actions";
import Router from "next/router";
import SearchBar from './SearchBar'
import Link from "next/link";
import LogIn from './LogIn'
import {fetchAuthDataForGuest} from '../actions/actions'
import Head from 'next/head';
import stylesheet from '../header.css'
class Header extends Component {
  constructor() {
    super();
    this.state = {
      clickFistChart: "none",
      click: "none"
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    console.log("size", this.props.data.length);
    dispatch(fetchCategoriesIfneeded());
    console.log('this.props.auth',this.props.auth)
    // if(this.props.auth === undefined){
if( localStorage.myData===undefined){
    console.log('yesss')
      dispatch(fetchAuthDataForGuest())

    }
    console.log('this.props.auth2',this.props.auth)

  }

  
  render() {
    return (
      <div className="header1">
      <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{'Next.js Starter Project'}</title>
          <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
        </Head>
        <Link  href={`/cart`}>
            <button>go to cart page</button>
          </Link>
        slug: {this.props.slug}
        price: {this.props.price}
        <button onClick={()=>console.log('this.props.basket',this.props.products)}>this.props.basket</button>
        <LogIn/>
        <SearchBar/>
        <button onClick={()=>console.log('this.props.auth late',this.props.auth)}>auth</button>
        {this.props.auth}
        
        <section id="navigation">
    <div class="small-navbar">
      <div class="spinner-master">
        <input type="checkbox" onchange='handleChange(this);' id="spinner-form3" />
        <label class="spinner-spin3" for="spinner-form3">
          <div class="spinner3 diagonal part-1"></div>
          <div class="spinner3 horizontal"></div>
          <div class="spinner3 diagonal part-2"></div>
        </label>
        <div id="side-nav" class="side-nav">
        {this.props.data.map(category => (
          <Link as={`/category/${category.address}`} href={`/category?address=${category.address}`}>
          <a>{category.title}</a>
          </Link>
        ))}
        </div>
      </div>
      <div class="dots-master">
        <input type="checkbox" id="dots-form" />
        <label class="dots3" for="dots-form">
          <div class="dots diagonal part-1"></div>
          <div class="dots horizontal"></div>
          <div class="dots diagonal part-2"></div>
        </label>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="nav-bar">
      <ul>
      {this.props.data.map(category => (
          <Link as={`/category/${category.address}`} href={`/category?address=${category.address}`}>
          <li><a>{category.title}</a></li>
          </Link>
        ))}
        
      </ul>
    </div>
  </section>
  <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
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
    products: state.addToCreditReducer.products


  };
};

export default connect(mapStateToProps)(Header);
