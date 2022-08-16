import React from "react";
import "./cartitem.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="product-image" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
