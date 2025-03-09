import React from "react";
import Footer from "../../components_team/Footer";
import SponsorSection from "./SponsorSection";
import { SPONSOR_TYPES } from "../../constants/sponsorData";
import "./Sponsors.css";
import Navbar from "../Navbar";
import Hero from "../Hero";

const Sponsors = () => {
  return (
    <div className="relative">
      <Hero title="Sponsors" desc="..." />
      <div className="relative z-20 mt-[-100px]">
        <main className="sponsors__content">
          {Object.values(SPONSOR_TYPES).map(({ title, sponsors }) => (
            <SponsorSection key={title} title={title} sponsors={sponsors} />
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Sponsors;
