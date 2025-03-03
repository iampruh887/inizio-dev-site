// src/components/Events/EventCard.jsx
import React from "react";
import PropTypes from "prop-types";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card__content">
        <div className="event-card__text-content">
          <p className="event-card__description">{event.description}</p>
          <div className="event-card__tag">
            <span className="event-card__tag-text">@event</span>
            <span className="event-card__tag-number">
              #{String(event.id).padStart(3, "0")}
            </span>
            <svg
              className="event-card__arrow"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.585786 20.1097C-0.195262 20.8908 -0.195262 22.1571 0.585786 22.9381C1.36684 23.7192 2.63316 23.7192 3.41421 22.9381L0.585786 20.1097ZM23.5238 2.00012C23.5238 0.895547 22.6284 0.000116203 21.5238 0.000117046L3.52381 0.000117299C2.41924 0.000116625 1.52381 0.895547 1.52381 2.00012C1.52381 3.10469 2.41924 4.00012 3.52381 4.00012L19.5238 4.00012L19.5238 20.0001C19.5238 21.1047 20.4192 22.0001 21.5238 22.0001C22.6284 22.0001 23.5238 21.1047 23.5238 20.0001L23.5238 2.00012ZM3.41421 22.9381L22.938 3.41433L20.1096 0.585903L0.585786 20.1097L3.41421 22.9381Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="event-card__image-container">
          <img
            src={event.image}
            alt={event.title}
            className="event-card__image"
          />
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
