import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import initialState from '../store/defaultStore'
import { combineReducers } from "redux"




export const categoriesReducer = (state = initialState, action) => {
    if ( action.type ==="CATEGORIES"){
      return {...state, data: action.data.data.categories}

    }
    else
      return state    
}


// const rootReducer = combineReducers({
    
//     categoriesReducer
// })



// export const initStore = (state = initialState) => {
//     return createStore(
//       rootReducer,
//       state,
//       composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
//   }
//   export default initStore