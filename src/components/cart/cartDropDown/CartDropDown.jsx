import React from "react";
import "./cartdropdown.style.scss";
import Button from "../../button/Button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
