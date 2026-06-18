import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assests/images/hangotech-logo.png";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { isMobile, isTablet } from "react-device-detect";

const Footer = () => {
  const responsive = isMobile || isTablet;

  return (
    <footer className={`footer-section ${responsive ? "is-padding-responsive" : "is-padding-lg"}`}>
      <div className="row mb-5">
        {/* Brand column */}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <Link to="/" className="d-flex align-items-center text-decoration-none mb-3">
            <div className="company-logo">
              <img src={logo} alt="Hangoutech" />
            </div>
            <span className="company-logo-text ps-1 text-white">ANGOUTECH</span>
          </Link>
          <p className="footer_description">
            Custom software development for Healthcare, EdTech, Logistics and D2C brands.
            We build digital products that drive real business outcomes.
          </p>
          <div className="social-links mt-3">
            <a href="https://in.linkedin.com/company/hangoutech" target="_blank" rel="noopener noreferrer" aria-label="Hangoutech LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href="#facebook" aria-label="Hangoutech Facebook">
              <FaFacebook size={22} />
            </a>
            <a href="#twitter" aria-label="Hangoutech Twitter">
              <FaXTwitter size={22} />
            </a>
            <a href="#instagram" aria-label="Hangoutech Instagram">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Industries */}
        <div className="col-6 col-lg-2 mb-4 mb-lg-0">
          <div className="footer_title">Industries</div>
          <Link to="/industries/healthcare" className="footer_link">Healthcare</Link>
          <Link to="/industries/edtech" className="footer_link">EdTech</Link>
          <Link to="/industries/logistics" className="footer_link">Logistics</Link>
          <Link to="/industries/retail-d2c" className="footer_link">Retail & D2C</Link>
        </div>

        {/* Company */}
        <div className="col-6 col-lg-2 mb-4 mb-lg-0">
          <div className="footer_title">Company</div>
          <Link to="/" className="footer_link">Home</Link>
          <Link to="/about" className="footer_link">About Us</Link>
          <Link to="/case-studies" className="footer_link">Our Work</Link>
          <Link to="/tech-stack" className="footer_link">Tech Stack</Link>
          <Link to="/careers" className="footer_link">Careers</Link>
          <Link to="/blog" className="footer_link">Blog</Link>
          <Link to="/contact" className="footer_link">Contact</Link>
        </div>

        {/* Legal & Contact */}
        <div className="col-lg-4">
          <div className="footer_title">Get in Touch</div>
          <a href="tel:+919698338807" className="footer_link">+91 96983 38807</a>
          <a href="mailto:info@hangoutech.com" className="footer_link">info@hangoutech.com</a>
          <p className="footer_address">
            No: 26, Madeena Nagar, Vannivedu,<br />
            Walajapet – 632513, Tamil Nadu, India.
          </p>
          <Link to="/contact" className="btn-electric footer-cta mt-3">
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <div className="copy_rights pt-4 border-top">
        <span>Hangoutech Private Limited © 2025</span>
        <span className="border_left">All Rights Reserved</span>
        <span className="border_left">
          <a href="#privacy">Privacy Policy</a>
        </span>
        <span className="border_left">
          <a href="#terms">Terms & Conditions</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
