import React from "react";
import PropTypes from "prop-types";
import TeamMember from "./TeamMember";

const TeamSection = ({ title, description, members }) => {
  return (
    <section className="team-section">
      <h2 className="team-section__title">{title}</h2>
      <div className="team-section__divider" />
      <p className="team-section__description">{description}</p>

      <div className="team-section__members">
        {members.map((member, index) => (
          <TeamMember
            key={index}
            imageUrl={member.imageUrl}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </section>
  );
};

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default TeamSection;
