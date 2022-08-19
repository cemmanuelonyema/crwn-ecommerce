// The base reducer object that represents / combines all the state in app

import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import productMenuReducer from "./data/productMenu/productMenu.reducer";
import shopReducer from "./data/shop/shop.reducer";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  productMenu: productMenuReducer,
  shop: shopReducer,
});
