import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PreviewItem from "../../components/preview-col/PreviewItem";

import "./collectionPage.scss";

const CollectionPage = ({}) => {
  const { collectionId } = useParams();

  const [categoryProducts] = useSelector((state) => {
    console.log(state);
    return state.shop.collections.filter(
      (collection) => collection.routeName === collectionId
    );
  });

  console.log("categoryProducts", categoryProducts);
  console.log(collectionId);
  const { title, items } = categoryProducts;
  console.log(title, items);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items?.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//     console.log
//   console.log(state);
//   return {
//     prop: state.prop,
//   };
// };

// export default connect(mapStateToProps)(CollectionPage);
export default CollectionPage;
