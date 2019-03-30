
import initialState from '../store/defaultStore'




export const userDataReducer = (state = initialState, action) => {
    if ( action.type ==="GET_USER_DATA"){
      console.log('action.userData',action.userData)
      console.log('state console',state.user)
      console.log('state console',state.address)
      return {...state, user: action.userData
        , cartData: action.cartData,
        address: action.address
      }

    }
    if(action.type ==="CREATE_ORDER"){
      return {...state, orderData: action.orderData
      }

    }
    else
      return state    
}

