import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Link from "next/link";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


const FavoritProducts = (favoritProducts) => (
  
    <div >
      <h2>Favorite Products</h2>
      <GridList  cols={3} style={{flexWrap:"nowrap", transform:"0"}}>
        {favoritProducts.favoritProducts.data.products.map(product => (
        <Link key={product.address} as={`/p/${product.address}`} href={`/post?address=${product.address}`}>
          <a style={{textDecoration:"none"}}>
          <GridListTile style={{padding:"20px"}}  >
            <img src={product.thumbnail} style={{maxWidth:"30vw", maxHeight:"30vh"}}  />
            <GridListTileBar
              subtitle={product.price}
              title={product.title}
              price={product.price}
              
            />
                          {product.price}

          </GridListTile>
          </a>
          </Link>

        ))}
      </GridList>
      
    </div>
  )
  export default withStyles(styles)(FavoritProducts);

