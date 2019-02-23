
import initialState from '../store/defaultStore'




export const addToCreditReducer = (state = initialState, action) => {
    if ( action.type ==="ADD_TO_CREDIT"){
        console.log('action.product',action)
        let cartData = {...state.products,[action.data.product]: {
            ...state.products[action.data.product], slug: 
                action.data.product
        }}
        localStorage.setItem('cartData',JSON.stringify(cartData) );
    return {
        ...state,
         products: {
            ...state.products, 
                [action.data.product]: {
                    ...state.products[action.data.product], slug: 
                        action.data.product
                }
            }
         };

    }
    else
      return state    
}

