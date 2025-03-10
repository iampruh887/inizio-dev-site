import React from "react";
import EventCard from "./EventCard";

const EventContainer = () => {
  const events = [
    {
      title: "Event 01",
      description:
        "Where ideas collide and opportunities emerge! Experience startup showcases, power-packed panels, and game-changing networking at the heart of innovation.",
      reversed: false,
    },
    {
      title: "Event 02",
      description:
        "Where ideas collide and opportunities emerge! Experience startup showcases, power-packed panels, and game-changing networking at the heart of innovation.",
      reversed: true,
    },
  ];

  return (
    <div className="px-36 py-16 mx-auto my-0 max-w-[1440px] max-md:px-5 max-md:py-10 max-sm:px-2.5 max-sm:py-5">
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          description={event.description}
          reversed={event.reversed}
        />
      ))}
    </div>
  );
};

export default EventContainer;
