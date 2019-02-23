
import initialState from '../store/defaultStore'




export const authReducer = (state = initialState, action) => {
    if ( action.type ==="AUTH_DATA"){
      return {...state.auth, token: action.data}

    }
    else
      return state    
}

