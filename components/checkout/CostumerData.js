import React from "react";
import { Component } from "react";
import { Field, reduxForm, ControlLabel } from "redux-form";
import * as actionTypes from "../../actions/actionTypes";
import { postUserAddressIfNeeded } from "../../actions/actions";
import { connect } from "react-redux";
import LoginDialog from "../login/loginDialog";

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
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class CostumerData extends Component {
  handleSubmit(values) {
    const { dispatch } = this.props;
    // console.log("State:", this.state.MyStateElement);
    console.log("Form values:", values);
    let orderData = {
      first_name: values.name,
      phone_number: values.phone,
      email: values.email,
      address: values.address,
      address_title: values.title,
      postal_code: values.postal_code
    };
    console.log("this.state.address", this.state.address);
    if (this.state.address) {
      orderData.address = this.state.address.address;
      orderData.address_title = this.state.address.title;
      orderData.postal_code = this.state.address.postal_code;
    }
    console.log("orderData", orderData);
    dispatch({ type: actionTypes.CREATE_ORDER, orderData: orderData });
    // dispatch(postUserAddressIfNeeded(address))
    this.props.handleNext();
  }
  handleChange(value) {
    console.log("value", value);
    let selectedAddress = this.props.address.filter(el => el.slug === value);
    selectedAddress = selectedAddress[0];
    console.log("selectedAddress", selectedAddress);
    this.setState({
      address: selectedAddress
    });
  }
  constructor() {
    super();
    this.state = {
      address: null
    };
  }

  // const CostumerData = props => {
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
        <div
          style={{
            display: "flex",
            lineHeight: "26px",
            verticalAlign: "middle"
          }}
        >
          <div className="textLabel">اطلاعات تماس</div>
          <LoginDialog
            onlocalStorageUpdate={this.localStorageUpdate}
            text={"ورود"}
          />
        </div>
        <Field
          className="border defualtInput"
          name="name"
          type="text"
          component={renderField}
          label="نام و نام خانوادگی"
        />
        {/* <ControlLabel>Patients</ControlLabel> */}

        <Field
          className="defualtInput"
          name="phone"
          type="number"
          component={renderField}
          placeholder="111"
          label="تلفن همراه"
        />
        <Field
          className="defualtInput"
          name="email"
          type="email"
          component={renderField}
          //   label="Email"
          placeholder="ایمیل"
        />
        <div className="textLabel">ادرس ارسال</div>
        <Field
          className="defualtInput"
          name="title"
          type="text"
          component={renderField}
          label="نام آدرس مثلا خانه یا شرکت"
        />
        <div>
        <Field
          className="halftInput"
          name="favoriteColor"
          component="select"
          label="استان"
        >
          <option />
          <option value="ff0000">Red</option>
          <option value="00ff00">Green</option>
          <option value="0000ff">Blue</option>
        </Field>
        <Field
          className="halftInput"
          name="favoriteColor2"
          component="select"
          label="شهر"
        >
          <option />
          <option value="ff0000">Red</option>
          <option value="00ff00">Green</option>
          <option value="0000ff">Blue</option>
        </Field>
        </div>
        <Field
          className="addressInput"
          // style={{height:'150px'}}
          name="address"
          type="text"
          component={renderField}
          label="آدرس"
        />

        <Field
          className="defualtInput"
          name="postal_code"
          type="text"
          component={renderField}
          placeholder="Placeholder"
          label="کد پستی"
        />
        {console.log("this.props.address", this.props.address)}
        {this.props.address &&
          this.props.address.map(el => (
            // <Field name="age" type="number" component={renderField} label="Age" />
            <div>
              {console.log("lll", el)}
              <div>
                <input
                  type="radio"
                  name="name"
                  value={el.slug}
                  onChange={ref => this.handleChange(ref.target.value)}
                />
                {el.title}
              </div>
              <div>
                <div>
                  تلفن <textarea>{el.phone_number}</textarea>
                </div>
                <div>
                  کد پستی <textarea>{el.postal_code}</textarea>
                </div>
                <div>
                  آدرس <textarea>{el.address}</textarea>
                </div>
              </div>
            </div>
          ))}
        {/* <Field name="age" type="number" component={renderField} label="Age" /> */}
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="submit"
            disabled={submitting}
            onClick={() => this.props.handleBack()}
          >
            back
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
        {/* {console.log(form)} */}
      </form>
    );
  }
}

// export default reduxForm({
//   form: "syncValidation", // a unique identifier for this form
//   validate, // <--- validation function given to redux-form
//   warn // <--- warning function given to redux-form
// })(CostumerData);
const mapStateToProps = state => {
  return {
    payment_methods: state.userDataReducer.cartData.payment_methods,
    orderData: state.userDataReducer.orderData,
    address: state.userDataReducer.address.addresss
  };
};

CostumerData = connect(mapStateToProps)(CostumerData);

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(CostumerData);
