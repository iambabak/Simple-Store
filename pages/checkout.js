import { Component} from 'react'
import StepperArrow from '../components/general/StepperArrow'
import {fetchUserDataIfNeeded} from '../actions/actions'
import createConfig from "../api/createConfig";
import withRedux from 'next-redux-wrapper';
import initStore from '../store/defaultStore';
import { connect } from "react-redux";
import ResponsiveDrawer from '../components/general/ResponsiveDrawer'
import Layout from '../components/Layout'



class Checkout extends Component{
    static getInitialProps ({ reduxStore }) {
        reduxStore.dispatch(fetchUserDataIfNeeded())
    
        return {}
      }
    componentDidMount () {
        const { dispatch } = this.props
        dispatch(fetchUserDataIfNeeded())
      }
    render(){
        return(
          <div style={{padding:'70px 50px', width:'60vw'}}>
           {/* <Layout> */}
          {console.log('this.props.userData',this.props.user)}
                {
                    Object.keys(this.props.user).length
                    // this.props.user.length
                     ? <StepperArrow/>: <div>11111</div>}
                {/* <StepperArrow/> */}
                <ResponsiveDrawer/>
             {/* </Layout> */}
            </div>
        )
    }
}
// Checkout.getInitialProps = async function({ reduxStore, context }) {
//     reduxStore.dispatch(fetchUserDataIfNeeded())
//   };
const mapStateToProps = state => {
    console.log('state in map',state)
    return {
      user: state.userDataReducer.user
    };
  };
export default connect(mapStateToProps)(Checkout);
