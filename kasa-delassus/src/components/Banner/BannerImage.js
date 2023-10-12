import React from "react";
import "./BannerImage.scss";

function BannerImage() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div className="banner-container">
      <h1>{bannerTitle}</h1>
    </div>
  );
}

export default BannerImage;
