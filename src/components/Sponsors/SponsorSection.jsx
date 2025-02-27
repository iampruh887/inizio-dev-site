import React from "react";
import SponsorCard from "./SponsorCard";
import "./Sponsors.css";

const SponsorSection = ({ title, sponsors }) => {
  return (
    <div className="sponsor-section">
      <h2 className="sponsor-section__title">{title}</h2>
      <div className="sponsor-section__divider" />
      <div className="sponsor-section__grid">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={index}
            imageUrl={sponsor.imageUrl}
            title="Sponsor !!"
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorSection;
