import React, { Component, Fragment } from "react";
import "./ProductMenu.style.scss";
import { ProductMenuItem } from "./ProductMenuItem";

class ProductMenu extends Component {
  state = {
    menus: [
      {
        title: "hats",
        imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        size: "",
      },
      {
        title: "jackets",
        imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 2,
        size: "",
      },
      {
        title: "shoes",
        imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 3,
        size: "",
      },
      {
        title: "Women",
        imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 4,
        size: "large",
      },
      {
        title: "Men",
        imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 5,
        size: "large",
      },
    ],
  };

  render() {
    return (
      <div className="dir-menu">
        {this.state.menus.map(({id, ...otherProps}) => (
          <ProductMenuItem key={id} {...otherProps}/>
        ))}
      </div>
    );
  }
}

export default ProductMenu;
