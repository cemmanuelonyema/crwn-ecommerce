import React from "react";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./cartdropdown.style.scss";
import Button from "../../button/Button";
import CartItem from "../cartitem/CartItem";
import { selectCartItems } from "../../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleCheckoutBtn = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty </span>
        )}
      </div>
      <Button onClick={handleCheckoutBtn}>Checkout</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));

/**
 * Note
 * dispatch is automatically passed into the components even when we don't pass them in in the connect,
 * so we can leverage that when i only have to pass one action
 */
