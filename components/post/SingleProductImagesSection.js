import { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from './tileData';
import ImagesSlinck from "./ImagesSlinck";
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import SliderArrow from './SliderArrow'
const styles = theme => ({
  root2: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
  },
  image: {
    // width: 128,
    // height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

class SingleProductImagesSection extends Component {
  constructor(){
    super();
    this.state={
      image: null
    }
  }
  render() {
    
    let settings = {
      // prevArrow: <SliderArrow to="prev" />,
      prevArrow: <button>111</button>,
      nextArrow: <SliderArrow to="next" />,
      // arrows: true,

  //   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
    const { classes, mainImage, product } = this.props;

    return (
      <div>
        <Grid item lg={12} md={12} lg md container>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={this.state.image? this.state.image: mainImage} />
          </ButtonBase>
        </Grid>
        {/* <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {product.images.map(tile => (
              <GridListTile key={tile.image}>
                <img src={tile.image} alt={tile.slug} />
                <GridListTileBar
                  title={tile.slug}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                  actionIcon={
                    <IconButton>
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div> */}
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
              {product.images.map(image => (
                  <div>
                  <img width= '100px' height= '100px' src={image.image} alt={image.slug} onClick={()=> this.setState({image:image.image})} />
                    </div>
              ))}
        </Slider>
      </div>
        {/* <ImagesSlinck images= {product.images}/> */}
      </div>
    );
  }
}
// export default SingleProductImagesSection;
SingleProductImagesSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleProductImagesSection);
