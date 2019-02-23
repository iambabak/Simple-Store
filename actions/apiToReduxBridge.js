import { getAuthToken } from '../reducer/rootReducer'

export const getAccessToken = () => getAuthToken() || null
