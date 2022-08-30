import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PreviewItem from "../../components/preview-col/PreviewItem";

import "./collectionPage.scss";

const CollectionPage = ({}) => {
  const { collectionId } = useParams();

  const collections = useSelector(
    (state) => state.shop.collections[collectionId]
  );

  console.log("collections", collections);
  console.log(collectionId);
  const { title, items } = collections;
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

export default CollectionPage;
