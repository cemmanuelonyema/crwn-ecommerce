import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.action";
import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem, clearCartItems }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="image item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItems(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCartItems: (item) => {
      dispatch(clearItemFromCart(item));
    },
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
