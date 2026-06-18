import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderNavbar.scss";
import logo from "../../assests/images/hangotech-logo.png";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import HamburgerMenu from "./HamburgerMenu";

const industryLinks = [
  { label: "Healthcare", path: "/industries/healthcare" },
  { label: "EdTech", path: "/industries/edtech" },
  { label: "Logistics", path: "/industries/logistics" },
  { label: "Retail & D2C", path: "/industries/retail-d2c" },
];

const HeaderNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <div className={`header-section ${isSticky ? "header-section-fixed" : "header-section-sticky"}`}>
      <div className="d-flex align-items-center h-100 w-100 justify-content-between">
        <Link to="/" className="d-flex align-items-center h-100 cursor-pointer text-decoration-none" title="Hangoutech">
          <div className="company-logo">
            <img src={logo} alt="Hangoutech logo" />
          </div>
          <span className={`company-logo-text ps-1 ${isSticky ? "text-primary fw-medium" : "text-white"}`}>
            ANGOUTECH
          </span>
        </Link>

        {/* Desktop nav — visible on lg+ via CSS */}
        <div className="d-none d-lg-flex align-items-center justify-content-end flex-grow-1 header-title">
          <div className="d-flex align-items-center">
            <Link to="/" className={`text-decoration-none ${location.pathname === "/" ? "nav-active" : ""}`}>
              Home
            </Link>

            {/* Industries dropdown */}
            <div className="nav-dropdown-wrapper" ref={dropdownRef}>
              <button
                className={`nav-dropdown-trigger ${isActive("/industries") ? "nav-active" : ""}`}
                onClick={() => setDropdownOpen((o) => !o)}
                aria-expanded={dropdownOpen}
              >
                Industries <FaChevronDown size={12} className={`dropdown-chevron ${dropdownOpen ? "open" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="nav-dropdown-menu">
                  {industryLinks.map((item) => (
                    <Link key={item.path} to={item.path} className="dropdown-item-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className={`text-decoration-none ${isActive("/about") ? "nav-active" : ""}`}>
              About
            </Link>
            <Link to="/case-studies" className={`text-decoration-none ${isActive("/case-studies") ? "nav-active" : ""}`}>
              Work
            </Link>
            <Link to="/blog" className={`text-decoration-none ${isActive("/blog") ? "nav-active" : ""}`}>
              Blog
            </Link>
          </div>

          <div>
            <Link
              to="/contact"
              className={`pe-0 d-flex align-items-center gap-2 text-decoration-none contact-arrow-wrapper ${isActive("/contact") ? "nav-active" : ""}`}
            >
              Contact <FaArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Hamburger menu — visible below lg via CSS */}
        <div className="d-lg-none">
          <HamburgerMenu isSticky={isSticky} />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
