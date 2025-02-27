import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "./sponsorData.js";

const Navigation = () => (
  <nav className="sponsors__nav">
    <div className="sponsors__logo">[ECELL LOGO]</div>
    <div className="sponsors__nav-links">
      {NAV_LINKS.map(({ title, path }) => (
        <Link key={title} to={path} className="sponsors__nav-link">
          {title}
        </Link>
      ))}
    </div>
  </nav>
);

export default Navigation;
