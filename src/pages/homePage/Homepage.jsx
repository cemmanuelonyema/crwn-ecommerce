import React from "react";
import ProductMenu from "../../components/ProductMenu";
import { ProductMenuItem } from "../../components/ProductMenuItem";
import "./Homepage.style.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <ProductMenu />
    </div>
  );
};

export default HomePage;
