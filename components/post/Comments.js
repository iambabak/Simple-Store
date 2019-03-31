import { Component } from "react";
import StarRating from "../../components/general/StarRating";
import EachComment from './EachComment'
import YourComment from './YourComment'
class Comments extends Component {
  render() {
    const { product } = this.props;
    return (
        <div>
      <div style={{ display: "inline" }}>
        <div>
          <div
            style={{ float: "right", display: "flex", flexDirection: "row" }}
          >
            <div>
              {product.rate}{" "}
              <sup 
              style={{ display: "flex", flexDirection: "row", position: 'relative',right: '20px', bottom: '28px' }}
              >
                <StarRating rating={product.rate} /> از 5
              </sup>
              <sub style={{position: 'relative',right:'14px',bottom:'29px'}}>{product.ratings_count}از مشارکت کننده: </sub>
            </div>
            {/* <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <StarRating rating={product.rate} /> از 5
              </div>
              <div>{product.ratings_count}از مشارکت کننده: </div>
            </div> */}
          </div>
          <div style={{ float: "left" }}>
          <YourComment product={product} text={<button>ثبت نظر</button>}/>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        {product.rates.map(rate => (
          <EachComment comment={rate}/>
      ))}  
        {console.log("product in comments", product)}
      </div>
  </div>
    );
  }
}
export default Comments;
