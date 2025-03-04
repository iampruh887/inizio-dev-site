import React from "react";
import Navigation from "../../components/shared/Navigation";
import Footer from "../../components/shared/Footer";
import SponsorSection from "./SponsorSection";
<<<<<<< HEAD
=======
import Footer from "../Footer";
>>>>>>> Events
import { SPONSOR_TYPES } from "../../constants/sponsorData";
import "./Sponsors.css";
import Navbar from "../Navbar";
import Hero from "../Hero";

const Sponsors = () => {
  return (
    <div className="sponsors">
<<<<<<< HEAD
      <section className="sponsors__hero">
        <img
          src="https://source.unsplash.com/1920x1080/?abstract"
          className="sponsors__hero-bg"
          alt="Hero background"
        />

        <Navigation />

        <h1 className="sponsors__title">sponsors</h1>
        <p className="sponsors__description">
          Join hands with the leading innovators and entrepreneurs of tomorrow
        </p>
      </section>
=======
      {/* <Navbar/> */}
      <Hero title="Sponsors" desc="flashkjdfhkdslajhfkladsjhfkjladshfkjladshfkjsadlhfjsklad flksjahdfjksadh fkjadslhfklasdhflk."  />
>>>>>>> Events

      <main className="sponsors__content">
        {Object.values(SPONSOR_TYPES).map(({ title, sponsors }) => (
          <SponsorSection key={title} title={title} sponsors={sponsors} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;
