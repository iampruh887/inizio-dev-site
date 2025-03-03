import React, { useState } from "react";
import Navigation from "../components/shared/Navigation";
import EventCard from "../components/Events/EventCard";
import Footer from "../components/shared/Footer";
import "../styles/Events.css";

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const events = [
    {
      id: 1,
      title: "E-Summit",
      description:
        "Join us for the biggest entrepreneurship summit of the year",
      image: "https://source.unsplash.com/1600x900/?conference",
    },
    {
      id: 2,
      title: "Startup Weekend",
      description: "48 hours to turn your idea into reality",
      image: "https://source.unsplash.com/1600x900/?startup",
    },
    {
      id: 3,
      title: "Pitch Perfect",
      description: "Showcase your startup to industry experts",
      image: "https://source.unsplash.com/1600x900/?presentation",
    },
    {
      id: 4,
      title: "Innovate",
      description: "Annual innovation challenge for aspiring entrepreneurs",
      image: "https://source.unsplash.com/1600x900/?innovation",
    },
  ];

  return (
    <div className="events">
      <section className="events__hero">
        <img
          src="https://source.unsplash.com/1920x1080/?abstract"
          className="events__hero-bg"
          alt="Hero background"
        />

        <Navigation />

        <h1 className="events__title">Events</h1>
        <p className="events__description">
          Experience the most innovative entrepreneurship events at IIIT
          Guwahati
        </p>
      </section>

      <main className="events__content">
        <div className="events__card-container">
          <EventCard event={events[activeEvent]} />

          <div className="events__progress">
            <div className="events__progress-bar">
              {events.map((_, index) => (
                <div
                  key={index}
                  className={`events__progress-segment ${
                    index === activeEvent ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="events__buttons">
            {events.map((event, index) => (
              <button
                key={index}
                className={`events__button ${
                  index === activeEvent ? "active" : ""
                }`}
                onClick={() => setActiveEvent(index)}
              >
                {event.title}
              </button>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Events;
