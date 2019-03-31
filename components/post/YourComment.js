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
import SingleProduct from "./SingleProduct";
import StarRating from '../general/StarRating'

// export default class LoginDialog extends React.Component {
  class YourComments extends React.Component {
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
      const {product} = this.props;
    return (
      <div>
        
        <div>
          <a 
          // style={{paddingRight:'20vw'}} 
          onClick={this.handleClickOpen}>
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
          <DialogTitle id="form-dialog-title">نظر شما درباره این محصول</DialogTitle>
          <DialogContent>
            
            {console.log('product in your comment',product)}
            <div style={{display:'flex', flexDirection:'row'}}>
            <img style={{height:'10vh', width:'10vw'}} src={product.thumbnail}></img>
            <div>
                <div>{product.title}</div>
                <div style={{marginTop:'10px'}}>از 5 ستاره به این محصول چند می دهید؟؟</div>
            </div>
            </div>
            <div style={{display:'flex' ,justifyContent: 'center'}}>
            <StarRating/>
            </div>
            <input style={{width:'30vw', height:'100px'}} placeholder="نظر شما"></input>
          </DialogContent>
          <DialogActions style={{justifyContent:'center'}}>
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
export default connect(mapStateToProps)(YourComments);

