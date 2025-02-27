import React from "react";
import SponsorSection from "./SponsorSection";
import Footer from "./Footer";
import "./Sponsors.css";

const Sponsors = () => {
  const platinumSponsors = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9993918216cf8822abd9fb476e7482db95b754fb2aa93c1834be8f320d0c1c0e?placeholderIfAbsent=true",
    },
  ];
  const goldSponsors = Array(3).fill({
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9993918216cf8822abd9fb476e7482db95b754fb2aa93c1834be8f320d0c1c0e?placeholderIfAbsent=true",
  });
  const silverSponsors = Array(6).fill({
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9993918216cf8822abd9fb476e7482db95b754fb2aa93c1834be8f320d0c1c0e?placeholderIfAbsent=true",
  });

  return (
    <div className="sponsors">
      <div className="sponsors__hero">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8dc8f23d576e3d76d164bf65285402d515936010ef8137e2b0f673bcca92406?placeholderIfAbsent=true"
          className="sponsors__hero-bg"
          alt="Background"
        />

        <nav className="sponsors__nav">
          <div className="sponsors__logo">[ECELL LOGO]</div>
          <div className="sponsors__nav-links">
            <a href="#" className="sponsors__nav-link">
              HOME
            </a>
            <a href="#" className="sponsors__nav-link">
              EVENTS
            </a>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/afc251ee63be3ca6c02c421f8a7a5c3ff8d5d25a4b7565538a31fb0d23107124?placeholderIfAbsent=true"
              className="sponsors__nav-icon"
              alt="Icon"
            />
            <a href="#" className="sponsors__nav-link">
              TEAMS
            </a>
            <a href="#" className="sponsors__nav-link">
              SPONSORS
            </a>
            <a href="#" className="sponsors__nav-link">
              CONTACT US
            </a>
          </div>
        </nav>

        <h1 className="sponsors__title">sponsors</h1>
        <p className="sponsors__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="sponsors__content">
        <SponsorSection title="Platinum Sponsor" sponsors={platinumSponsors} />

        <SponsorSection title="Gold Sponsor" sponsors={goldSponsors} />

        <div className="sponsors__silver-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2369220204fcc42af3ca124f1aa1361ddf3c789088b027345115a65e9aabef14?placeholderIfAbsent=true"
            className="sponsors__silver-bg"
            alt="Background"
          />
          <SponsorSection title="Silver Sponsor" sponsors={silverSponsors} />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Sponsors;
