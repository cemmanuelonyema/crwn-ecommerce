import React from "react";
import "./ProductMenuItem.style.scss";

export const ProductMenuItem = ({ title, imgUrl, size }) => {
  console.log(size);
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};
