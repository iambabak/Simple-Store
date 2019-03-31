import react, { Component } from "react";
import { connect } from "react-redux";
import {fetchlogInReqIfneeded} from '../actions/actions'
import {createFormData} from './CreateForm'

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
        Username:'',
        Password:''
    };
  }
  handleUsernameChange = () =>{
      this.setState({
          Username : this.user.value
      })
  }
  handlePasswordChange = () =>{
    this.setState({
        Password : this.pass.value
    })
}

dispatchLogIn = () =>{
    const { dispatch } = this.props;
    let values = {username:this.state.Username,password: this.state.Password}
    dispatch(fetchlogInReqIfneeded(createFormData(values)));
}

  render() {
    return (
      <div>
          <input
      placeholder="Username"
      ref={input => this.user = input}
      onChange={this.handleUsernameChange}
      style={{width: '60%', margin:'10px',height:'50px', borderRadius:'10px'}}
     />
     <br/>
    <input
         placeholder="Password"
         type="password"
         ref={input => this.pass = input}
         onChange={this.handlePasswordChange}
         style={{width: '60%', margin:'10px',height:'50px', borderRadius:'10px'}}
       />
       <br/>
    <button onClick={this.dispatchLogIn}
    style={{position:'inherit', right:'75%'}}
    >aaa</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(LogInForm);
