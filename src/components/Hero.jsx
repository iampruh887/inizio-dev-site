import React from "react";
import "./css/Hero.css";
import Img from "../assets_team/vector-background.svg";

const Hero = ({ title, desc }) => {
  return (
    <div className="hero-wrapper">
      <section className="hero-container">
        <div className="hero-background">
          <img
            src={Img}
            alt="Hero background"
            className="hero-background-image"
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{desc}</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
