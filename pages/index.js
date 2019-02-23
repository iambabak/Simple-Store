import fetch from "isomorphic-unfetch";
import createConfig from "../api/createConfig";
import Link from "next/link";
import FavoritProducts from '../components/FavatioyProducts'
import Layout from '../components/Layout'
// import Styles from '../header.css'
// const styles = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
// });
const Index = props => (
  <Layout>
    <p style={{color:'red'}}>Simple Store</p>
    {/* <style dangerouslySetInnerHTML={{__html: Styles}}/> */}

    <div>
      <FavoritProducts favoritProducts = {props.shows}/>
     <ul>
      {props.shows.data.products.map(( product ) => (
        <li key={product.address}>
          <Link as={`/p/${product.address}`} href={`/post?address=${product.address}`}>
            <a style={{color:'red'}}>{product.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  </Layout>
);
Index.getInitialProps = async function() {
  console.log('asdf')
  const slug = "food"
  let category_address = "digital"
  let response = await fetch(
    // `http://api.projectant.aasoo.ir/stores/store/sib/`,
    `http://api.projectant.aasoo.ir/shelves/products/`,
    // `http://api.projectant.aasoo.ir/shelves/categories/list/`,
    // `http://api.projectant.aasoo.ir/shelves/category/address/${category_address}/products/`,
    // `http://api.projectant.aasoo.ir/shelves/categories/category/${slug}/`,
    // `http://api.projectant.aasoo.ir/auth/current-user/`,
    // `http://api.projectant.aasoo.ir/shelves/products/?search=`,
    createConfig()
  );
  const data = await response.json();
  return {
    shows: data
  };
};

export default Index;
