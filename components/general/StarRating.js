// import { Component } from "react";
// import ReactStars from "react-stars";
// import "./StarRating.scss";
// class StarRating extends Component {
    
//   render() {
//     const {rating} = this.props
//     return (
//       <div>
//         <ReactStars
//           count={5}
//           value={rating}
//           size={24}
//           color2={"#000000"}
//         />
//       </div>
//     );
//   }
// }
// export default StarRating;

import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class StarRating extends React.Component {
  render() {
     const {rating} = this.props
 
    return (                
      <div style={{display:'flex', flexDirection:'row-reverse'}}>
        {/* <h2>Rating from state: {rating}</h2> */}
        <StarRatingComponent 
        style={{display:'flex', flexDirection:'row-reverse'}}
          name="rate2" 
          editing={true}
          // renderStarIcon={() => <span></span>}
          starCount={5}
          value={rating}
          starColor={'red'}
          emptyStarColor={'green'}
        />
      </div>
    );
  }
}
export default StarRating;