import { combineReducers } from "redux";
import userReducer from './useReducer'

const reducers = combineReducers({
    userInfo : userReducer
})

export default reducers
