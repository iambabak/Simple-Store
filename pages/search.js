import createConfig from "../api/createConfig";
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import ProductsResults from '../components/ProductsResults'
const Search = (props) => (
    <Layout>
        <h1>search results</h1>
        <ProductsResults products={props.show.data.products}/>
    </Layout>
)

Search.getInitialProps = async function (context) {
  const { address } = context.query
  const res = await fetch(
    `http://api.projectant.aasoo.ir/shelves/products/?search=${encodeURIComponent(address)}`,
    createConfig()
  );
    const show = await res.json()
  return { show }
}

export default Search