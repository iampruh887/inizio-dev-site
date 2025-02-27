import React from "react";
import SponsorSection from "./SponsorSection";
import Footer from "./Footer";
import { SPONSOR_TYPES } from "../../constants/sponsorData";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <section className="sponsors__hero">
        <img
          src="https://source.unsplash.com/1920x1080/?abstract"
          className="sponsors__hero-bg"
          alt="Hero background"
        />

        <nav className="sponsors__nav">
          <div className="sponsors__logo">E-CELL IIITG</div>
          <div className="sponsors__nav-links">
            {["HOME", "EVENTS", "TEAMS", "SPONSORS", "CONTACT"].map((link) => (
              <a key={link} href={`#${link}`} className="sponsors__nav-link">
                {link}
              </a>
            ))}
          </div>
        </nav>

        <h1 className="sponsors__title">sponsors</h1>
        <p className="sponsors__description">
          Join hands with the leading innovators and entrepreneurs of tomorrow
        </p>
      </section>

      <main className="sponsors__content">
        {Object.values(SPONSOR_TYPES).map(({ title, sponsors }) => (
          <SponsorSection key={title} title={title} sponsors={sponsors} />
        ))}
        <Footer />
      </main>
    </div>
  );
};

export default Sponsors;
