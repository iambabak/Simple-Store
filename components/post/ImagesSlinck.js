import { Component } from "react";
import Slider from "react-slick";
// import './slick.scss'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'


class ImagesSlinck extends Component {
  render() {
    let settings = {
        arrows: true,

    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
              {this.props.images.map(image => (
                  <div>
                  <img width= '100px' height= '100px' src={image.image} alt={image.slug} />
                    </div>
              ))}
        </Slider>
      </div>
    );
  }
}
export default ImagesSlinck;
