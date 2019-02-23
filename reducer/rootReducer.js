import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import initialState from '../store/defaultStore'
import { combineReducers } from "redux"
import {categoriesReducer} from './reducer'
import {authReducer} from './authReducer'
import {addToCreditReducer} from './addToCreditReducer'
import { type } from 'os';

const rootReducer = combineReducers({
    
    categoriesReducer,
    authReducer,
    addToCreditReducer
})



export const initStore = (state = initialState) => {
    return createStore(
      rootReducer,
      state,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }
  export function getAuthToken() {
    let myData = JSON.parse(localStorage.getItem('myData')) 
    if(myData!==null){
    console.log('localStorage.token',myData.token )
    return myData.token
  }
  else{
    return null
  }
    // try {
    //   return initStore.getState().auth.token
    // } 
    // catch (error) {
    //   return null
    // }
  }