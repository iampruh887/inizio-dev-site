import React, { useState, useEffect } from "react";
import "./InsightArena.css";
import image_CG from "../assets/CG.png";
// Import speaker images
import SBILogo from "../assets/assets_sponsors/SBI.jpg";
import GailLogo from "../assets/assets_sponsors/Gail.jpg";
import AristaLogo from "../assets/assets_sponsors/arista.jpg";
import AssemTribuneLogo from "../assets/assets_sponsors/assam_tribune.jpg";
import BIPLLogo from "../assets/assets_sponsors/bipl.jpg";
import BRLogo from "../assets/assets_sponsors/br.jpg";
import CanaraLogo from "../assets/assets_sponsors/canara.jpg";
import DominosLogo from "../assets/assets_sponsors/dominos.jpg";
import FatBellyLogo from "../assets/assets_sponsors/fat_belly.jpg";
import GPlusLogo from "../assets/assets_sponsors/g_plus.jpg";
import GratiaLogo from "../assets/assets_sponsors/gratia.jpg";
import BOBLogo from "../assets/assets_sponsors/BOB.jpg";
import IndianBankLogo from "../assets/assets_sponsors/indian_bank.jpg";
import IndianOilLogo from "../assets/assets_sponsors/indian_oil.jpg";
import KuberLogo from "../assets/assets_sponsors/kuber.jpg";
import NEHHDCLogo from "../assets/assets_sponsors/nehhdc.jpg";
import NGCLogo from "../assets/assets_sponsors/ngc.jpg";
import OILLogo from "../assets/assets_sponsors/OIL.jpg";
import PIBLogo from "../assets/assets_sponsors/pib.jpg";
import PizzaHutLogo from "../assets/assets_sponsors/pizza_hut.jpg";
import PragNewsLogo from "../assets/assets_sponsors/prag_news.jpg";
import RoyalEnfieldLogo from "../assets/assets_sponsors/royal_enfield.jpg";
import SouledStoreLogo from "../assets/assets_sponsors/souled_store.jpg";
import SPSinglaLogo from "../assets/assets_sponsors/sp_singla.jpg";
import ZoomcarLogo from "../assets/assets_sponsors/zoomcar.jpg";

import amitImg from "../assets_team/assets_speakers/amit.jpg";
import vandanaImg from "../assets_team/assets_speakers/vandana.jpg";
import nirImg from "../assets_team/assets_speakers/nir.jpg";
import khalidImg from "../assets_team/assets_speakers/khalid.jpg";
import adityaImg from "../assets_team/assets_speakers/aditya-arora.jpg";
import vedangImg from "../assets_team/assets_speakers/vedang.jpg";
import satanikImg from "../assets_team/assets_speakers/satanik.jpg";
import davidImg from "../assets_team/assets_speakers/david.jpg";
import karanImg from "../assets_team/assets_speakers/karan.jpeg";

const InsightArena = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Sample data for speakers
  const speakerCards = [
    {
      title: "Amit Priyadarshan",
      description: "CEO, Caliche Technologies",
      image: amitImg,
    },
    {
      title: "Vandana Srivastava",
      description: "STPI, Director",
      image: vandanaImg,
    },
    {
      title: "Nir Eyal",
      description: "Investor and Author",
      image: nirImg,
    },
    {
      title: "Khalid Wani",
      description: "TEDx Speaker, Serial Entrepreneur",
      image: khalidImg,
    },
    {
      title: "Aditya Arora",
      description: "Padma Shri Nominee",
      image: adityaImg,
    },
    {
      title: "Vedang Patel",
      description: "Co-Founder, The Souled Store",
      image: vedangImg,
    },
    {
      title: "Satanik Roy",
      description: "Co-Founder, HyperXchange",
      image: satanikImg,
    },
    {
      title: "David Gogoi",
      description: "CEO, Zerund",
      image: davidImg,
    },
    {
      title: "Karan Shah",
      description: "Founder and Director, IIDE",
      image: karanImg,
    },
  ];

  // Sample data for partners
  const partnerCards = [
    { title: "SBI", image: SBILogo },
    { title: "GAIL", image: GailLogo },
    { title: "Arista", image: AristaLogo },
    { title: "The Assam Tribune", image: AssemTribuneLogo },
    { title: "BIPL", image: BIPLLogo },
    { title: "Baskin Robbins", image: BRLogo },
    { title: "Canara Bank", image: CanaraLogo },
    { title: "Dominos", image: DominosLogo },
    { title: "Fat Belly", image: FatBellyLogo },
    { title: "G Plus", image: GPlusLogo },
    { title: "Gratia Technologies", image: GratiaLogo },
    { title: "Bank of Baroda", image: BOBLogo },
    { title: "Indian Bank", image: IndianBankLogo },
    { title: "Indian Oil", image: IndianOilLogo },
    { title: "Kuber Techno Craft", image: KuberLogo },
    { title: "NEHHDC", image: NEHHDCLogo },
    { title: "NGC Broadband", image: NGCLogo },
    { title: "OIL India", image: OILLogo },
    { title: "Press Information Bureau", image: PIBLogo },
    { title: "Pizza Hut", image: PizzaHutLogo },
    { title: "Prag News", image: PragNewsLogo },
    { title: "Royal Enfield", image: RoyalEnfieldLogo },
    { title: "Souled Store", image: SouledStoreLogo },
    { title: "SP Singla Constructions", image: SPSinglaLogo },
    { title: "Zoomcar", image: ZoomcarLogo },
  ];

  const generateSliderContent = (cards, includeDescription = true) => {
    const doubledCards = [...cards, ...cards];
    return doubledCards.map((card, index) => (
      <div key={`${card.title}-${index}`} className="speaker-card">
        <div className="speaker-image">
          <img src={card.image} alt={card.title} />
        </div>
        <div className="speaker-info">
          <h3>{card.title}</h3>
          {includeDescription && card.description && <p>{card.description}</p>}
        </div>
      </div>
    ));
  };

  const generateSliderContent_power = (cards, includeDescription = true) => {
    const doubledCards = [...cards, ...cards];
    return doubledCards.map((card, index) => (
      <div
        key={`${card.title}-${index}`}
        className="card-container"
        style={{ backgroundColor: "white" }}
      >
        <img src={card.image} alt={card.title} />
        <div className="card-content">
          {/* <h3>{card.title}</h3> */}
          {includeDescription && card.description && <p>{card.description}</p>}
        </div>
      </div>
    ));
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="insight-arena">
      {/* Speakers Section */}
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: "30px",
        }}
      >
        <img src={image_CG} style={{ marginTop: "-60px", width: "70%" }} />
      </div>
      <div className="container">
        <div className="section">
          <div className="slider-container">
            <div className="slider slider-ltr">
              {generateSliderContent(speakerCards)}
            </div>
          </div>
          <div className="slider-container">
            <div className="slider slider-rtl">
              {generateSliderContent(speakerCards)}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="partner-section">
        <div className="partner-header">
          <h2>
            power partners:
            <br />
            the backbone of
            <br />
            innovation
          </h2>
          <p className="tagline">
            OUR SPONSORS - THE DRIVING FORCE BEHIND INIZIO!
          </p>
          <div className="description">
            <p>
              Powering the dream! INIZIO wouldn't be possible without the
              support of our visionary sponsors. These changemakers fuel
              innovation, and together, we're shaping the future of
              entrepreneurship.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="slider-container">
              <div className="slider slider-ltr">
                {generateSliderContent_power(partnerCards, false)}
              </div>
            </div>
            <div className="slider-container">
              <div className="slider slider-rtl">
                {generateSliderContent_power(partnerCards, false)}
              </div>
            </div>
            <div className="slider-container">
              <div className="slider slider-ltr">
                {generateSliderContent_power(partnerCards, false)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightArena;
