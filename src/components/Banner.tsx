import React from "react";
import "./Banner.css";

interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="banner-contents">
        <h1 className="banner-title">{title}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Reproducir</button>
          <button className="banner-button">Mi Lista</button>
        </div>
        <p className="banner-description">{description}</p>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
};

export default Banner;
