import React from "react";
import "./ProductMenuItem.style.scss";

export const ProductMenuItem = ({ menuItem: { title, imgUrl } }) => {
  return (
    <div className="menu-item" style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};
