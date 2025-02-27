import React from "react";
import "./Sponsors.css";

const Footer = () => {
  return (
    <div className="sponsors-footer">
      <div className="sponsors-footer__content">
        <div className="sponsors-footer__logos">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57634bda7a964ae96ff8d550e9a1504ad80f12972f4c52211b64e7d189a9d3ec?placeholderIfAbsent=true"
            alt="Logo 1"
            className="sponsors-footer__logo"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9848b1ad74e4a033f31de8b973d8570395d70148771be650a0d58f750dce1560?placeholderIfAbsent=true"
            alt="Logo 2"
            className="sponsors-footer__logo"
          />
        </div>

        <div className="sponsors-footer__info">
          <div className="sponsors-footer__address">
            <h3 className="sponsors-footer__heading">Address</h3>
            <p className="sponsors-footer__text">
              E-Cell, IIIT Guwahati
              <br />
              Assam - 781015
            </p>
          </div>

          <div className="sponsors-footer__email">
            <h3 className="sponsors-footer__heading">Email</h3>
            <p className="sponsors-footer__text">ecell@iiitg.ac.in</p>
          </div>
        </div>

        <div className="sponsors-footer__social">
          <h3 className="sponsors-footer__heading">Follow Us</h3>
          <div className="sponsors-footer__social-icons">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/330da0ac810482a7cdf061410698da84c20ae4c5792982f9be4eb9eaa79f7783?placeholderIfAbsent=true"
              alt="Social 1"
              className="sponsors-footer__social-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/114970135b1b853e755332cf576fdfb0b660e6443453bfe0d654bfb66fb73c72?placeholderIfAbsent=true"
              alt="Social 2"
              className="sponsors-footer__social-icon"
            />
          </div>
        </div>
      </div>

      <p className="sponsors-footer__tagline">
        The Most Innovative entrepreneurship summit Of INDIA
      </p>

      <p className="sponsors-footer__credits">
        Made in panic by ecell technical team (2025)
      </p>
    </div>
  );
};

export default Footer;
