import React from "react";
import "./Footer.scss";
import logo from "../../assests/images/hangotech-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

const Footer = () => {
  return (
    <>
      <div
        className={` footer-section poistion-relative  ${
          isMobile || isTablet ? "is-padding-responsive" : "is-padding-lg"
        }`}
      >
        <div className="row mb-5">
          <div
            className={`col-lg-5 ${
              isDesktop
                ? ""
                : " d-flex flex-column align-items-center justify-content-center"
            }`}
          >
            <div
              className=" d-flex align-items-center cursor-pointer"
              title="Hangoutech"
            >
              <div className=" company-logo">
                <img src={logo} alt="" />
              </div>
              <span className=" company-logo-text ps-1 text-white">
                ANGOUTECH
              </span>
            </div>
            <div className="footer_description">
              <p>
                We are leading technology solutions providing company all over
                the world doing lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="footer_side col-lg-7 ">
            <div className="footer_things">
              <div className="footer_title">Usefull Links</div>
              <div className="sub_heading"> Contact Us</div>
              {/* <div className="sub_heading">Frequently Asked Question</div> */}
              <div className="sub_heading"> Privacy & Policy</div>
              <div className="sub_heading"> Terms & Condition</div>
            </div>
            <div className="footer_things">
              <div className="footer_title">Features</div>
              <div className="sub_heading"> Home</div>
              <div className="sub_heading"> About</div>
              <div className="sub_heading"> Service</div>
              {/* <div className="sub_heading"> Blog</div> */}
            </div>
            <div className="footer_things">
              <div className="footer_title">Social Media</div>

              <span className="media ">
                <span>
                  <FaFacebook color="var(--white)" size={24} />
                </span>
                <span>
                  <FaTwitter color="var(--white)" size={24} />
                </span>
                <span>
                  <FaInstagram color="var(--white)" size={24} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="copy_rights pt-5 border-top">
          <span>Hangoutech &#169; 2024</span>
          <span className="border_left">All Rights Reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
