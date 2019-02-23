import react, { Component } from "react";
import AddToCredit from './AddToCredit'
class ProductsResults extends Component {
  constructor() {
    super();
    this.state = {
      clickFistChart: "none",
      click: "none"
    };
  }
  render() {
    return (
      <div>
        ProductsResults
        {console.log("ProductsResults", this.props.products)}
        <div>
          {this.props.products.map(product => (
            <div>
              <div> اسم :{product.title}</div>
              <div> قیمت :{product.price}</div>
              <AddToCredit productSlug={product.slug}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ProductsResults;
