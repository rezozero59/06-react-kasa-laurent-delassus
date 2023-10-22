import React from "react";
import "../../pages/Product.scss";

function ProductTitleTags({ appart }) {
  return (
    <div className="title-tags-container">
      <div className="title-location">
        <h3>{appart.title}</h3>
        <p>{appart.location}</p>
        <div className="tags-container">
          {appart.tags.map((tag, index) => (
            <button key={index} className="tag">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductTitleTags;
