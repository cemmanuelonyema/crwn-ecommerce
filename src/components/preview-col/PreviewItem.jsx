import React from "react";
import Button from "../button/Button";
import "./previewItem.style.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const PreviewItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="preview-item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="preview-footer">
        <span className="name">{name}</span>{" "}
        <span className="price">{price}</span>{" "}
      </div>
      <Button inverted className="button" onClick={() => addItem(item)}>
        {" "}
        Add to Cart{" "}
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(PreviewItem);
