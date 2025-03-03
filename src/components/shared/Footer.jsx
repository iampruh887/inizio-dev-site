import React from "react";
import "../../styles/shared.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <img
            src="/ecell-logo-white.png"
            alt="E-Cell IIITG"
            className="footer__logo"
          />
          <div className="footer__contact">
            <h3>Contact Us</h3>
            <p>E-Cell, IIIT Guwahati</p>
            <p>Bongora, Assam - 781015</p>
            <p>ecell@iiitg.ac.in</p>
          </div>
        </div>
        <div className="footer__socials">
          <h3>Connect With Us</h3>
          <div className="footer__social-links">
            <a href="#" className="social-link">
              <img src="/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className="social-link">
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="#" className="social-link">
              <img src="/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>The Most Innovative Entrepreneurship Summit Of India</p>
        <p>© 2024 E-Cell IIITG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
