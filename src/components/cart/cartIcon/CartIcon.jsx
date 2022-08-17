import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/122 shopping-bag.svg";
import "./cartIcon.scss";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
// export default CartIcon;
