import React from "react";
import PropTypes from "prop-types";

const SponsorCard = ({ imageUrl, title }) => (
  <div className="sponsor-card">
    <div className="sponsor-card__image-container">
      <img src={imageUrl} className="sponsor-card__image" alt={title} />
    </div>
    <h3 className="sponsor-card__title">{title}</h3>
  </div>
);

SponsorCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(SponsorCard);
