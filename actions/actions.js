import createConfig from "../api/createConfig";
import axios from 'axios'
import Post from "../pages/post";
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
import * as actionTypes from './actionTypes'
import { getAccessToken } from './apiToReduxBridge'
import {createFormData} from '../components/CreateForm'
import {setToken} from '../agent'
import {getToken} from '../agent'


export const getConfig = (additionalSettings = {}) =>
  createConfig(getAccessToken(), additionalSettings)


  const categories = () => async ( dispatch) => {
    let response = await fetch(
        `http://api.projectant.aasoo.ir/shelves/categories/list/`, 
        getConfig()
      );
      const data = await response.json();
      console.log('data',data)
      //sddf
      // let obj = {product:"product_TapsdvOdT8", count:"1"}
      // let response2 =   axios.post(`http://api.projectant.aasoo.ir/orders/cart/add/`, createFormData(obj) , getConfig(obj))
  

    return dispatch({ type: actionTypes.CATEGORIES, data: data })
  }
  export const fetchCategoriesIfneeded = () => dispatch => {
      return dispatch(categories());
  };
  //LogIn dispatch
   const logInReq = formData => async ( dispatch) => {
     console.log('formDataformData',formData)
      // return axios.post(`${BASE_URL}/auth/login/`, formdata, getConfig(formdata))
      let response = await axios.post(`http://api.projectant.aasoo.ir/auth/login/`, formData, getConfig(formData))
      console.log('response auth token value',response)
      localStorage.setItem('myData',JSON.stringify(response.data.data) );
      let settokenval= setToken(response.data.data)
      console.log('settokenval without value')

      console.log('settokenval',settokenval)
      // const data = await response.json();
    console.log('login data',response.data.data.token)
    return dispatch({ type: actionTypes.AUTH_DATA, data: response.data.data.token })

    // let response = await fetch(`http://api.projectant.aasoo.ir/auth/login/`,
    // {
    //   method: 'post'      
    // },
    // formData,
    // createConfig(formData)
    // )
    // const data = await response.json();
    // console.log('login data',data)
  
  }
  export const fetchlogInReqIfneeded = formData => dispatch => {
    //   if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(logInReq(formData));
    //   }
  };
  // fetchAuthDataForGuest
  export const fetchAuthDataForGuest = body => async ( dispatch) => {
     let response = await axios.post(`http://api.projectant.aasoo.ir/profiles/guest/`,body ,getConfig())
     console.log('response',response)
     localStorage.setItem('myData',JSON.stringify(response.data.data) );
     let settokenval= setToken(response.data.data.token)
     let getTokenval= getToken(response.data.data.token)

      console.log('getTokenval without value')
      console.log('settokenval',settokenval)

      console.log('getTokenval',getTokenval)

     console.log('response auth',response.data.data.token)
     return dispatch({ type: actionTypes.AUTH_DATA, data: response.data.data.token }) 
}
 const AddToCredit = productSlug => async ( dispatch) => {
   //"product_TapsdvOdT8"
  let obj = {product:productSlug, count:"1"}
  let response =  await axios.post(`http://api.projectant.aasoo.ir/orders/cart/add/`, createFormData(obj) , getConfig(obj))
  console.log('response for add to credit 444',response.data.data.cart_product.product)
  return dispatch({ type: actionTypes.ADD_TO_CREDIT, data: response.data.data.cart_product }) 
}
export const fetchAddToCredit = productSlug => dispatch => {
  return dispatch(AddToCredit(productSlug));
};
// export const fetchCartDataIfNeeded = () => async ( dispatch) => {
//       let response =  await axios.post(`http://api.projectant.aasoo.ir/orders/cart/add/`, getConfig())
//       console.log('responseresponse',response)
//   return dispatch({type: actionTypes.GET_CART_DATA, data: response});
// };
const fetchCartData = () => async ( dispatch) => {
  //"product_TapsdvOdT8"
  let body = null
  let response =  await axios.get(`http://api.projectant.aasoo.ir/orders/cart/show/` ,getConfig())
  console.log('responseresponse',response)
return dispatch({type: actionTypes.GET_CART_DATA, data: response});
}
export const fetchCartDataIfNeeded = () => dispatch => {
 return dispatch(fetchCartData());
};