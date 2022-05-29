import React from "react";
import "./previewItem.style.scss";

const PreviewItem = ({ name, imageUrl, price, id }) => {
  return (
    <div className="preview-item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="preview-footer">
        <span className="name">{name}</span>{" "}
        <span className="price">{price}</span>{" "}
      </div>
    </div>
  );
};

export default PreviewItem;
