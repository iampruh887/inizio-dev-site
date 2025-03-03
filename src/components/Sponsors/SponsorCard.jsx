import React from "react";
import "./Sponsors.css";

const SponsorCard = ({ imageUrl, title }) => {
  return (
    <div className="sponsor-card">
      <div className="sponsor-card__image-container">
        <img
          src={imageUrl}
          className="sponsor-card__image"
          alt={`${title} logo`}
        />
      </div>
      <div className="sponsor-card__title">{title}</div>
    </div>
  );
};

export default SponsorCard;
