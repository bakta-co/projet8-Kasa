import React from "react";

export default function Banner({ imageUrl, title = "" }) {
  return (
    <div className="Banner">
      <div className="banner-overlay"></div>
      <img className="ImgBanner" src={imageUrl} alt="{title}" />
      {title && <h2 className="BannerTitle">{title}</h2>}
    </div>
  );
}
