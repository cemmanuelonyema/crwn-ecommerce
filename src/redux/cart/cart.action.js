import {
  ADD_ITEM,
  TOGGLE_CART_HIDDEN,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from "./cart.type";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
