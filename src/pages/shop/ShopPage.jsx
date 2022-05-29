import React, { Component } from "react";
import { SHOP_DATA } from "./shopData";
import Preview from "../../components/preview-col/Preview";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <Preview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
