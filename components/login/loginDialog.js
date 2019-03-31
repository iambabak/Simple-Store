import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import {fetchlogInReqIfneeded} from '../../actions/actions'
import {createFormData} from '../CreateForm'

// export default class LoginDialog extends React.Component {
  class LoginDialog extends React.Component {
  state = {
    open: false,
    Username: "",
    Password: ""
  };
  handleUsernameChange = () => {
    this.setState({
      Username: this.user.value
    });
  };
  handlePasswordChange = () => {
    this.setState({
      Password: this.pass.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  async dispatchLogIn (){
    const { dispatch, onlocalStorageUpdate } = this.props;
    let values = {username:this.state.Username,password: this.state.Password}
    const response = await dispatch(fetchlogInReqIfneeded(createFormData(values)));
    // handleClose()
    console.log('responseresponseresponse',response)
    onlocalStorageUpdate();
}

  render() {
    return (
      <div>
        
        <div>
          <a style={{paddingRight:'20vw'}} onClick={this.handleClickOpen}>
            {this.props.text}
          </a>
        </div>
        {/* <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">ورود به حساب کاربری</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText> */}
            <input
              placeholder="Username"
              ref={input => (this.user = input)}
              onChange={this.handleUsernameChange}
              style={{
                width: "60%",
                margin: "10px",
                height: "50px",
                borderRadius: "10px"
              }}
            />
            <br />
            <input
              placeholder="Password"
              type="password"
              ref={input => (this.pass = input)}
              onChange={this.handlePasswordChange}
              style={{
                width: "60%",
                margin: "10px",
                height: "50px",
                borderRadius: "10px"
              }}
            />
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <button
              onClick={()=>{this.dispatchLogIn(); this.handleClose()}}
              style={{ position: "inherit", right: "75%" }}
            >
              ورود به حساب کاربری
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.data
  };
};
export default connect(mapStateToProps)(LoginDialog);

