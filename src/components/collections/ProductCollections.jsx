import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/data/shop/shop.selector";
import Preview from "../preview-col/Preview";

const ProductCollections = ({ collections }) => {
  return (
    <div className="product-overview">
      {collections?.map(({ id, ...otherProps }) => (
        <Preview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ProductCollections);
