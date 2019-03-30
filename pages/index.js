import fetch from "isomorphic-unfetch";
import createConfig from "../api/createConfig";
import Link from "next/link";
import FavoritProducts from '../components/FavatioyProducts'
import Layout from '../components/Layout'
import Router from 'next/router'


const Index = props => (
  <Layout>
    <p style={{color:'red'}}>Simple Store</p>
    <div>
      <FavoritProducts favoritProducts = {props.shows}/>
      <button onClick={()=> Router.push('/search/ساعت')}>saat</button>
      {/* <button onClick={()=>Router.push('/shelves/category/digital/products/?price_max=300000')}>filter price</button> */}

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
  let response = await fetch(
    `http://api.projectant.aasoo.ir/shelves/products/`,    
    createConfig()
  );
  const data = await response.json();
  return {
    shows: data
  };
};

export default Index;
