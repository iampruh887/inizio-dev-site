import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import eCellLogo from "../assets/e-cell-logo.png";
import wheelIcon from "../assets/wheel.png";
import "./css/Nav.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true); // State for text color

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;

      // Get the background color at the current scroll position
      const elementAtPoint = document.elementFromPoint(100, 10);
      if (elementAtPoint) {
        const backgroundColor =
          window.getComputedStyle(elementAtPoint).backgroundColor;
        // Convert backgroundColor to RGB values and calculate brightness
        const rgb = backgroundColor.match(/\d+/g);
        if (rgb) {
          const brightness =
            (parseInt(rgb[0]) * 299 +
              parseInt(rgb[1]) * 587 +
              parseInt(rgb[2]) * 114) /
            1000;
          setIsDark(brightness < 128); // If brightness < 128, background is dark
        }
      }

      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`navbar-container ${scrolled ? "scrolled" : ""} ${isDark ? "dark-bg" : "light-bg"}`}
    >
      <div className="navbar-content">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={eCellLogo}
              alt="E-Cell Logo"
              className="navbar-logo-image"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links desktop-nav">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/Events" className="nav-link">
            EVENTS
          </Link>
          <img src={wheelIcon} alt="Wheel Icon" className="nav-wheel" />
          <Link to="/Teams" className="nav-link">
            TEAMS
          </Link>
          <Link to="/Sponsors" className="nav-link">
            SPONSORS
          </Link>
        </div>

        {/* Contact Us - Desktop */}
        <div className="contact-link desktop-nav">
          <Link to="/contact" className="nav-link">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-nav">
          {[
            { name: "HOME", path: "/" },
            { name: "EVENTS", path: "/Events" },
            { name: "TEAMS", path: "/Teams" },
            { name: "SPONSORS", path: "/Sponsors" },
            { name: "CONTACT US", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
