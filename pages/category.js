import createConfig from "../api/createConfig";
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import ProductsResults from '../components/ProductsResults'
import { Link } from "@material-ui/core";

const Category = (props) => (
    <Layout>
        <h1>Category results</h1>
        priceFilter: {props.priceFilter}
        <ProductsResults products={props.show.data.products}/>
    </Layout>
)

Category.getInitialProps = async function (context) {
  const { address } = context.query
  const {priceFilter} = context.query
  let filterPriceInit = 2000
  const res = await fetch(
    `http://api.projectant.aasoo.ir/shelves/category/address/${address}/products/`,
    createConfig()
  );
    const show = await res.json()
  return { show , address, filterPriceInit, priceFilter }
}

export default Category