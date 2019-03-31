import createConfig from "../api/createConfig";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import addToBasket from "../components/addToBasket";
import axios from 'axios'
import getConfig from '../actions/actions'
import SingleProduct from '../components/post/SingleProduct'
const Post = props => (
  <Layout>
    {/* <Grid container>
      <Grid item lg={12} md={12} xs={12}> */}
        <h1>hil</h1>
        <SingleProduct product={props.show.data.product}/>
        <button onClick={addToBasket}>add to basket</button>
        {/* {console.log('show',this.props.show)} */}
        {/* name: {props.show.data.product.address} */}
        {console.log(props.show)}
        {/* <img
          src={props.show.data.product.thumbnail}
          style={{ height: "50%", maxWidth: "auto" }}
        /> */}
        {/* price: {props.show.data.product.price} */}
      {/* </Grid>
    </Grid> */}
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { address } = context.query;
  console.log('address',address)
  let gamma = createConfig()
  console.log('gammagamma',gamma)
  const res = await fetch(
    `http://api.projectant.aasoo.ir/shelves/product/address/${encodeURIComponent(
      address
    )}/`,
    // `http://api.projectant.aasoo.ir/shelves/product/${address}/`,
    createConfig()
  );
  console.log('res',res)
  const show = await res.json();
  console.log('show',show)
  return { show };
};

export default Post;
