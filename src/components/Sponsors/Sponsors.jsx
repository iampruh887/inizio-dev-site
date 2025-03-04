import React from "react";
import SponsorSection from "./SponsorSection";
import Footer from "../Footer";
import { SPONSOR_TYPES } from "../../constants/sponsorData";
import "./Sponsors.css";
import Navbar from "../Navbar";
import Hero from "../Hero";

const Sponsors = () => {
  return (
    <div className="sponsors">
      {/* <Navbar/> */}
      <Hero title="Sponsors" desc="flashkjdfhkdslajhfkladsjhfkjladshfkjladshfkjsadlhfjsklad flksjahdfjksadh fkjadslhfklasdhflk."  />

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
