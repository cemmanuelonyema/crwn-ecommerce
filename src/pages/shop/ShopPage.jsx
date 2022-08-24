import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import ProductCollections from "../../components/collections/ProductCollections";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = ({}) => {
  return (
    <div className="collection-page">
      <Routes>
        <Route path="/" element={<ProductCollections />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
