import React, { Component } from "react";
import { Route } from "react-router-dom";

import ProductCollections from "../../components/collections/ProductCollections";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="collection-page">
      <Route exact path={match.path} component={ProductCollections} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
