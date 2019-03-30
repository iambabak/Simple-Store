import react, { Component } from "react";
import { connect } from "react-redux";
import categories from "../actions/actions";
import { fetchCategoriesIfneeded } from "../actions/actions";
import Router from "next/router";
import SearchBar from "./SearchBar";
import Link from "next/link";
import LogInForm from "./LogInForm";
import { fetchAuthDataForGuest } from "../actions/actions";
import Head from "next/head";
import stylesheet from "../header.css";
class Header2 extends Component {
  constructor() {
    super();
    this.state = {
      clickFistChart: "none",
      click: "none"
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategoriesIfneeded());
    if (localStorage.myData === undefined) {
      dispatch(fetchAuthDataForGuest());
    }
  }

  render() {
    return (
      <div className="header1" style={{ margin: "100px", padding: "50px" }}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{"Next.js Starter Project"}</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <Link href={`/cart`}>
          <button>go to cart page</button>
        </Link>
        {/* slug: {this.props.slug}
        price: {this.props.price} */}
        {/* <LogInForm/> */}
        {/* <SearchBar/> */}
        {this.props.auth}

        <section id="navigation">
          <div class="small-navbar">
            <div class="spinner-master">
              <input
                type="checkbox"
                onchange="handleChange(this);"
                id="spinner-form3"
              />
              <label class="spinner-spin3" for="spinner-form3">
                <div class="spinner3 diagonal part-1" />
                <div class="spinner3 horizontal" />
                <div class="spinner3 diagonal part-2" />
              </label>
              <div id="side-nav" class="side-nav">
                {this.props.data.map(category => (
                  <Link
                    as={`/category/${category.address}`}
                    href={`/category?address=${category.address}`}
                  >
                    <a style={{cursor: "pointer"}}>{category.title}</a>
                  </Link>
                ))}
                <Link href={`/cart`}>
                  <li>
                    <a style={{cursor: "pointer"}}>products in cart</a>
                  </li>
                </Link>
              </div>
            </div>
            <div class="dots-master">
              <input type="checkbox" id="dots-form" />
              <label class="dots3" for="dots-form">
                <div class="dots diagonal part-1" />
                <div class="dots horizontal" />
                <div class="dots diagonal part-2" />
              </label>
            </div>
            <div class="clearfix" />
          </div>
          <div class="nav-bar" style={{fontSize:'15px'}}>
            <ul>
              <Link href={`/login`}>
                <li>
                  <a style={{cursor: "pointer"}}>Log In</a>
                </li>
              </Link>
              <li>
                <SearchBar />
              </li>
              {this.props.data.map(category => (
                <Link
                  as={`/category/${category.address}`}
                  href={`/category?address=${category.address}`}
                >
                  <li>
                    <a style={{cursor: "pointer"}}>{category.title}</a>
                  </li>
                </Link>
              ))}
              <Link href={`/cart`}>
                <li>
                  <a style={{cursor: "pointer"}}>products in cart</a>
                </li>
              </Link>
            </ul>
          </div>
        </section>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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

export default connect(mapStateToProps)(Header2);
