import { Component } from "react";
import { fetchCartDataIfNeeded } from "../../actions/actions";
import { connect } from "react-redux";
import {deleteCartData} from '../../actions/actions'

class CartTable extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const { dispatch } = this.props;
    console.log('orig asli',this.props.cartDataOrigin)
    if (!Object.entries(this.props.cartDataOrigin).length)
    dispatch(fetchCartDataIfNeeded());
  }
  handleDelete(slug){
    const { dispatch} = this.props
    console.log('slug',slug)
    const formData = {product: slug}
    dispatch(deleteCartData(formData))
    
  }
  render() {
    return (
      <div>
        <table style={{width:'100%', textAlign:'center'}}>
          <tr>
            <th> </th>
            <th style={{textAlign:'right'}}>محصول</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>جمع</th>
          </tr>
          {this.props.cartDataOrigin.cart_products &&
            this.props.cartDataOrigin.cart_products.map(product => (
              <tr style={{verticalAlign:'top'}}>
                {console.log(product)}
                <td style={{textAlign:'right', width:'15vw'}}>
                  <img 
                  style={{display:'block', width:'90%', height:'120px'}}
                   src={product.product.thumbnail}/>
                  
                </td>
                <td style={{textAlign:'right'}}>
                  <div>{product.product.title}</div>
                  <div onClick={()=>this.handleDelete(product.product.slug)}>delete</div>
                </td>
                <td>{product.product.price}</td>
                <td ><span style={{border: "solid black", borderRadius:'5px', padding:'4px'}}>{product.count}</span></td>
                <td>{product.total_price}</td>
              </tr>
            ))}
        </table>
      </div>
    );
  }
}
// export default CartTable;
const mapStateToProps = state => {
  return {
    data: state.setFilterReducer.data,
    cartDataOrigin: state.getCartDataReducer.cartDataOrigin
  };
};

export default connect(mapStateToProps)(CartTable);
