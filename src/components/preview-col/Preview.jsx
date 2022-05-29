import React from "react";
import "./preview.style.scss";
import PreviewItem from "./PreviewItem";

const Preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <PreviewItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default Preview;
