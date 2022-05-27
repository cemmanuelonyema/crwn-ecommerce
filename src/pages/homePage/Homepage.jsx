import React from "react";
import ProductMenu from "../../components/ProductMenu";
import { ProductMenuItem } from "../../components/ProductMenuItem";
import "./Homepage.style.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <ProductMenu />
    </div>
  );
};

export default Homepage;
