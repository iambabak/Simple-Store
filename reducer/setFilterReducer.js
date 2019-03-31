import initialState from '../store/defaultStore'




export const setFilterReducer = (state = initialState, action) => {
    if ( action.type ==="ADD_FILTER"){
      return {...state, data: [...state.data, {slug:action.slug, choice_slug:action.choice_slug}]
        // action.data
      }

    }
    else
      return state    
}
