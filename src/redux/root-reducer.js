// The base reducer object that represents / combines all the state in app

import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import productMenuReducer from "./data/productMenu.reducer";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  productMenu: productMenuReducer,
});
