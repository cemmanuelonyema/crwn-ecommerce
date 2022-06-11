import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/122 shopping-bag.svg";
import "./cartIcon.scss";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
// export default CartIcon;
