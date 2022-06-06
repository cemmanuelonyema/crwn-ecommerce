// The base reducer object that represents / combines all the state in app

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
})