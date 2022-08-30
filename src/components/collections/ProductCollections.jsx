import React from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/data/shop/shop.selector";
import Preview from "../preview-col/Preview";

const ProductCollections = ({ collections }) => {
  //   console.log(collections);

  return (
    <div className="product-overview">
      {collections?.map(({ id, ...otherProps }) => (
        <Preview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ProductCollections);
