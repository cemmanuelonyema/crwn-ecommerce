import React from "react";
import { connect } from "react-redux";
import "./cartdropdown.style.scss";
import Button from "../../button/Button";
import CartItem from "../cartitem/CartItem";
import { selectCartItems } from "../../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems?.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
