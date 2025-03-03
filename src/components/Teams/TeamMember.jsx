import React from "react";
import PropTypes from "prop-types";

const TeamMember = ({ imageUrl, socialLinks }) => {
  return (
    <div className="team-member">
      <div className="team-member__image-container">
        <img src={imageUrl} alt="Team member" className="team-member__image" />
      </div>
      <div className="team-member__social">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="team-member__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.icon} alt="Social media" />
          </a>
        ))}
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default React.memo(TeamMember);
