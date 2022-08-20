import React from "react";
import { connect } from "react-redux";
import "./collectionPage.scss";

const CategoryPage = ({ collection }) => {
  console.log(collection);

  return <div>Collection page</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CategoryPage);
