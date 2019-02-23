import createConfig from "../api/createConfig";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import addToBasket from "../components/addToBasket";

const Post = props => (
  <Layout>
    <Grid container>
      <Grid item lg={1} md={1} xs={12}>
        <h1>hil</h1>
        <button onClick={addToBasket}>add to basket</button>
        name: {props.show.data.product.address}
        <img
          src={props.show.data.product.thumbnail}
          style={{ height: "50%", maxWidth: "auto" }}
        />
        price: {props.show.data.product.price}
      </Grid>
    </Grid>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { address } = context.query;

  const res = await fetch(
    `http://api.projectant.aasoo.ir/shelves/product/address/${encodeURIComponent(
      address
    )}/`,
    // `http://api.projectant.aasoo.ir/shelves/products/?search=${search}`,
    createConfig()
  );
  const show = await res.json();

  return { show };
};

export default Post;
