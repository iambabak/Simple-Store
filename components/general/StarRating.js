import { Component } from "react";
import ReactStars from "react-stars";
import "./StarRating.scss";
class StarRating extends Component {
    
  render() {
    const {rating} = this.props
    return (
      <div>
        <ReactStars
          count={5}
          value={rating}
          size={24}
          color2={"#000000"}
        />
      </div>
    );
  }
}
export default StarRating;
