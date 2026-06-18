import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HamburgerMenu.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../../assests/images/hangotech-logo.png";

const industryLinks = [
  { label: "Healthcare", path: "/industries/healthcare" },
  { label: "EdTech", path: "/industries/edtech" },
  { label: "Logistics", path: "/industries/logistics" },
  { label: "Retail & D2C", path: "/industries/retail-d2c" },
];

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  const close = () => {
    setIsOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <div className="d-flex position-relative">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
        <HiMiniBars3BottomRight size={30} />
      </div>

      {isOpen && <div className="hamburger-overlay" onClick={close} />}

      <div className={`hamburger-menu-sidebar ${isOpen ? "show" : ""}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to="/" className="d-flex align-items-center text-decoration-none" onClick={close}>
            <div className="company-logo">
              <img src={logo} alt="Hangoutech" />
            </div>
            <span className="company-logo-text ps-1 text-primary fw-medium">ANGOUTECH</span>
          </Link>
          <div onClick={close} className="cursor-pointer">
            <RxCross2 size={26} />
          </div>
        </div>

        <ul>
          <li>
            <Link to="/" className="text-decoration-none" onClick={close}>Home</Link>
          </li>

          <li className="has-submenu">
            <button className="submenu-trigger" onClick={() => setIndustriesOpen((o) => !o)}>
              Industries
              <FaChevronDown size={12} className={industriesOpen ? "open" : ""} />
            </button>
            {industriesOpen && (
              <ul className="submenu">
                {industryLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-decoration-none" onClick={close}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/about" className="text-decoration-none" onClick={close}>About</Link>
          </li>
          <li>
            <Link to="/case-studies" className="text-decoration-none" onClick={close}>Our Work</Link>
          </li>
          <li>
            <Link to="/blog" className="text-decoration-none" onClick={close}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="text-decoration-none contact-link" onClick={close}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
