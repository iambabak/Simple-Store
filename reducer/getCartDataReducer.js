
import initialState from '../store/defaultStore'




export const getCartDataReducer = (state = initialState, action) => {
    if ( action.type ==="GET_CART_DATA"){
        console.log('action.product',action)
    return {
        ...state,
        cartDataOrigin: action.data
         };

    }
    else
      return state    
}



