import React, { Component } from "react";
import { SHOP_DATA } from "./shopData";

class ShopPage extends Component {
  state = SHOP_DATA;

  render() {
    return (
      <div>
        <h1>shop</h1>
      </div>
    );
  }
}

export default ShopPage;
