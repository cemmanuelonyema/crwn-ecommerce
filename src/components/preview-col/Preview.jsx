import React from "react";
import "./preview.style.scss";
import PreviewItem from "./PreviewItem";

const preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <PreviewItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default preview;
