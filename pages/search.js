import createConfig from "../api/createConfig";
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import ProductsResults from '../components/ProductsResults'
import Filter from "../components/Filter";

const Search = (props) => (
    <Layout>
        <h1>search results</h1>
        {console.log('props.show.data.products',props.show.data.products)}
        <ProductsResults products={props.show.data.products}/>
        {/* <Filter filters={this.props.show.data.category.filters} /> */}

    </Layout>
)

Search.getInitialProps = async function (context) {
  const { address } = context.query
  console.log('addressaddress',address)
  const res = await fetch(
    `http://api.projectant.aasoo.ir/shelves/products/?search=${encodeURIComponent(address)}`,
    createConfig()
  );
    const show = await res.json()
    console.log('show',show)
  return { show }
}

export default Search