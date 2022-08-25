import React from "react";
import { Link } from "react-router-dom";
import "./ProductMenuItem.style.scss";

export const ProductMenuItem = ({ menuItem: { title, imgUrl, linkUrl } }) => {
  return (
    <div className="menu-item" style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <Link to={linkUrl} className="subtitle">
          Shop now
        </Link>
      </div>
    </div>
  );
};
