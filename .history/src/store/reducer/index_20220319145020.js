import { combineReducers } from "redux";
import userReducer from './userReducer'

const reducers = combineReducers({
    userInfo : userReducer
})

export default reducers
