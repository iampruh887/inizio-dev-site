import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./css/Nav.css";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      
      <Link to="/" className="nav-link">
      <div className="asset-x" />
      <span className="ecell-logo">[ECELL LOGO]</span>
      </Link>

      <Link to="/Events" className="nav-link">
        <span className="eventss">EVENTS</span>
      </Link>

      {/* <Link to="/speakers" className="nav-link"> */}
        <span className="speakers">SPEAKERS</span>
      {/* </Link> */}

      {/* <Link to="/agenda" className="nav-link"> */}
        <span className="agenda">AGENDA</span>
      {/* </Link> */}

      <Link to="/Sponsors" className="nav-link">
        <span className="sponsors-1">SPONSORS</span>
      </Link>

      {/* <Link to="/contact" className="nav-link"> */}
        <span className="contact-us">CONTACT US</span>
      {/* </Link> */}
    </div>
    </>
  );
};

export default Navbar;
