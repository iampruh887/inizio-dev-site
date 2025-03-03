import React from "react";
import { Link } from "react-router-dom";
import "../../styles/shared.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img
          src="/ecell-logo.png"
          alt="E-Cell IIITG"
          className="nav__logo-img"
        />
      </div>
      <div className="nav__links">
        {["HOME", "EVENTS", "TEAMS", "SPONSORS", "CONTACT"].map((link) => (
          <Link key={link} to={`/${link.toLowerCase()}`} className="nav__link">
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
