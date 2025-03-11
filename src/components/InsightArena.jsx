// src/components/InsightArena.jsx
import React, { useState, useEffect, useRef } from "react";
import "./InsightArena.css";

const InsightArena = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // References to slider elements
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const slider4Ref = useRef(null);
  const slider5Ref = useRef(null);

  // Sample data for cards
  const speakerCards = [
    { title: "John Doe", description: "CEO, Tech Innovations" },
    { title: "Jane Smith", description: "Founder, Future Labs" },
    { title: "Alex Johnson", description: "AI Researcher" },
    { title: "Maria Garcia", description: "Blockchain Expert" },
    { title: "Robert Chen", description: "Serial Entrepreneur" },
    { title: "Sarah Williams", description: "Venture Capitalist" },
    { title: "Michael Brown", description: "Marketing Guru" },
    { title: "Lisa Taylor", description: "Product Strategist" },
  ];

  const partnerCards = [
    { title: "Tech Corp", description: "Technology Partner" },
    { title: "Finance Plus", description: "Financial Sponsor" },
    { title: "Media Group", description: "Media Partner" },
    { title: "Startup Hub", description: "Incubation Partner" },
    { title: "Global Ventures", description: "Investment Partner" },
    { title: "Creative Solutions", description: "Design Partner" },
    { title: "University Alliance", description: "Academic Partner" },
    { title: "Innovation Labs", description: "Research Partner" },
  ];

  // Generate card elements
  const generateCards = (data) => {
    return data.map((card, index) => (
      <div className="card" key={index}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    ));
  };

  useEffect(() => {
    console.log("InsightArena component mounted!");
    setIsLoaded(true);
  }, []);

  return (
    <div className="insight-arena">
      <div className="header">
        <h1>
          insight arena:
          <br />
          where visionaries
          <br />
          take the stage
        </h1>
        <p className="tagline">
          SPEAKER EXPRESS - INSIGHTS FROM THE BEST IN THE GAME!
        </p>
        <div className="description">
          <p>
            Fast-track your learning with industry giants, startup founders, and
            thought leaders.
          </p>
          <p>
            This isn't just another talk—it's a masterclass on the future.
            Buckle up and get ready to be inspired!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="section">
          {/* First row - Left to Right */}
          <div className="slider-container">
            <div className="slider slider-ltr" ref={slider1Ref}>
              {generateCards(speakerCards)}
              {generateCards(speakerCards)}{" "}
              {/* Duplicate for continuous effect */}
            </div>
          </div>
          {/* Second row - Right to Left */}
          <div className="slider-container">
            <div className="slider slider-rtl" ref={slider2Ref}>
              {generateCards(speakerCards)}
              {generateCards(speakerCards)}{" "}
              {/* Duplicate for continuous effect */}
            </div>
          </div>
        </div>
      </div>
      <div className="partner-section">
        <div className="container">
          <div className="partner-header">
            <h2>
              power partners:
              <br />
              the backbone of
              <br />
              innovation
            </h2>
            <p className="tagline">
              OUR SPONSORS - THE DRIVING FORCE BEHIND INZIO!
            </p>
            <div className="description">
              <p>
                Powering the dream! INZIO wouldn't be possible without the
                support of our visionary sponsors. These changemakers fuel
                innovation, and together, we're shaping the future of
                entrepreneurship.
              </p>
            </div>
          </div>
          <div className="section">
            {/* First row - Left to Right */}
            <div className="slider-container">
              <div className="slider slider-ltr" ref={slider3Ref}>
                {generateCards(partnerCards)}
                {generateCards(partnerCards)}{" "}
                {/* Duplicate for continuous effect */}
              </div>
            </div>
            {/* Second row - Right to Left */}
            <div className="slider-container">
              <div className="slider slider-rtl" ref={slider4Ref}>
                {generateCards(partnerCards)}
                {generateCards(partnerCards)}{" "}
                {/* Duplicate for continuous effect */}
              </div>
            </div>
            {/* Third row - Left to Right */}
            <div className="slider-container">
              <div className="slider slider-ltr" ref={slider5Ref}>
                {generateCards(partnerCards)}
                {generateCards(partnerCards)}{" "}
                {/* Duplicate for continuous effect */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightArena;
