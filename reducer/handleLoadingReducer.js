
import initialState from '../store/defaultStore'

export const handleLoadingReducer = (state = initialState, action) => {
    if ( action.type ==="HANDLE_LOADING"){
        console.log('action.product',!state.loading)
    return {
        ...state,
        loading: !state.loading
         };

    }
    else
      return state    
}



