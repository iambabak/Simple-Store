let _token 
export const setToken = (token) => {
    _token = token
    console.log('_token',_token)
    return _token
 }
 export const getToken = () => {
     return _token
 }