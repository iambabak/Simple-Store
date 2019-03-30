import React from "react";
import { Component } from "react";
import { Field, reduxForm, ControlLabel } from "redux-form";
import * as actionTypes from "../../actions/actionTypes";
import { postUserAddressIfNeeded } from "../../actions/actions";
import { connect } from "react-redux";
import "./checkout.css";
import Divider from '@material-ui/core/Divider';

// import './checkout.scss'
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.age) {
    errors.age = "Required";
  } else if (isNaN(Number(values.age))) {
    errors.age = "Must be a number";
  } else if (Number(values.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  value,
  meta: { touched, error, warning }
}) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input {...input} placeholder={label} type={type} value={value} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class PaymentMethod extends Component {
  constructor() {
    super();
    this.state = { email: "", phone_number: "", address: "", payment_method:''};
  }
  handleEdit(target) {
    const { dispatch } = this.props;
    // console.log("State:", this.state.MyStateElement);
    let orderData = this.props.orderData;
    orderData[target] = this.state[target];
    // orderData.phone_number = this.state.phone_number
    // orderData.address = this.state.address
    console.log("orderData", orderData);
    dispatch({ type: actionTypes.CREATE_ORDER, orderData: orderData });
  }
  handleSubmit(values) {
    const { dispatch } = this.props;
    // // console.log("State:", this.state.MyStateElement);
    let orderData = this.props.orderData;
    // let orderData = this.state
    console.log('orderDataorderData',orderData)
    orderData.email = this.state.email
    orderData.phone_number = this.state.phone_number
    orderData.address = this.state.address
    orderData.payment_method = this.state.payment_method
    console.log("orderData", orderData);
    dispatch({ type: actionTypes.CREATE_ORDER, orderData: orderData });
    // dispatch(postUserAddressIfNeeded(address))
    // this.props.handleNext();
  }
  componentDidMount() {
    console.log(this.props.orderData);
    this.setState({
      email: this.props.orderData.email,
      phone_number: this.props.orderData.phone_number,
      address: this.props.orderData.address
    });
  }
  handleChange(target, value) {
    console.log("target",value );
    this.setState({
      [target]: value
    });
  }

  render() {
    const {
      placeholder,
      handleSubmit,
      pristine,
      reset,
      submitting
    } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.handleSubmit.bind(this))}
        placeholder={placeholder}
        // onSubmit={handleSubmit}
      >
        <div>اطلاعات تماس</div>
        <div style={{borderColor:'grey', borderStyle:'solid', borderRadius:'5px', width:'45vw'}}>

        <div className="embed-submit-field">
          <input
            className="inputWithEdit"
            name="email"
            type="email"
            component={renderField}
            placeholder={this.state.email}
            value={this.state.email}
            onChange={ref => this.handleChange("email", ref.target.value)}
          />
          <a className="edit" onClick={() => this.handleEdit("email")}>
            ویرایش
          </a>
        </div>
        <Divider variant="middle" />

        <div className="embed-submit-field">
          <input
            className="inputWithEdit"
            name="phone_number"
            type="number"
            component={renderField}
            placeholder={this.state.phone_number}
            value={this.state.phone_number}
            onChange={ref =>
              this.handleChange("phone_number", ref.target.value)
            }
          />
          <a className="edit">ویرایش</a>
        </div>
        <Divider variant="middle" />

        <div className="embed-submit-field">
          <input
            className="inputWithEdit"
            name="address"
            type="text"
            component={renderField}
            placeholder={this.state.address}
            value={this.state.address}
            onChange={ref => this.handleChange("address", ref.target.value)}
          />
          <a className="edit">ویرایش</a>
        </div>
        </div>
        <div>
        <div>روش پرداخت</div>
          {this.props.payment_methods.map(payment_method => (
            <div 
            className="radioInput"
            // style={{display: 'flex',flexShrink: 1,borderStyle: 'solid', margin:'10px'}}
            >
                          <input type="radio" name="name" 
              value={payment_method.name}
              onChange={(ref)=> this.handleChange('payment_method', ref.target.value)}
              />{payment_method.title}
              </div>
          ))}
          
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button type="submit" disabled={submitting} onClick={()=> this.props.handleBack()}>
            back
          </button>
          {/* <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button> */}
        </div>
        {/* {console.log(form)} */}
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    payment_methods: state.userDataReducer.cartData.payment_methods,
    orderData:state.userDataReducer.orderData,
  };
};

PaymentMethod = connect(mapStateToProps)(PaymentMethod);

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(PaymentMethod);
