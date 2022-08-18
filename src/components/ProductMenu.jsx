import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenus } from "../redux/data/data.selectors";
import "./ProductMenu.style.scss";
import { ProductMenuItem } from "./ProductMenuItem";

const ProductMenu = ({ menus }) => {
  return (
    <div className="dir-menu">
      {/* {menus.map(({ id, ...otherProps }) => (
        <ProductMenuItem key={id} {...otherProps} />
      ))} */}
      {menus.map((menu) => (
        <ProductMenuItem key={menu.id} menuItem={menu} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  menus: selectMenus,
});

export default connect(mapStateToProps)(ProductMenu);
