import React from "react";

const Footer = () => {
  return (
    <div className="sponsors-footer">
      <div className="sponsors-footer__content">
        {/* Left: E-Cell Logo + Address */}
        <div className="sponsors-footer__section">
          <img
            src="/ecell-logo-white.png"
            alt="E-Cell IIITG"
            className="sponsors-footer__logo"
          />
          <div className="sponsors-footer__details">
            <h4>E-Cell, IIIT Guwahati</h4>
            <p>Bongora, Assam - 781015</p>
            <p>ecell@iiitg.ac.in</p>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="sponsors-footer__section">
          <h4>Quick Links</h4>
          <div className="sponsors-footer__links">
            <a href="#">Home</a>
            <a href="#">Events</a>
            <a href="#">Team</a>
            <a href="#">Contact</a>
          </div>
        </div>

        {/* Right: Social Links */}
        <div className="sponsors-footer__section">
          <h4>Connect With Us</h4>
          <div className="sponsors-footer__social">
            <a href="#" className="social-icon">
              <img src="/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className="social-icon">
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="#" className="social-icon">
              <img src="/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="sponsors-footer__bottom">
        <p>The Most Innovative Entrepreneurship Summit Of INDIA</p>
        <span>Made with 💻 by E-Cell Technical Team</span>
      </div>
    </div>
  );
};
//22px border radius
export default Footer;
