import React from "react";
import "./css/Hero.css";
import Img from "../assets/background.jpg";
const Hero = (props) => {
    return(
      <div className="heros">
        <section className="hero">
        <img
          src={Img}
          className="hero-bg"
          alt="Hero background"
        />

        <h1 className="hero_title">{props.title}</h1>
        <p className="hero__description">
          {props.desc}
        </p>
      </section>
      </div>
    );
};
export default Hero;