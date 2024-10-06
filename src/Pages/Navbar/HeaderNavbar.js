import React, { useEffect, useState } from "react";
import "./HeaderNavbar.scss";
import logo from "../../assests/images/hangotech-logo.png";
import { FaArrowUpLong } from "react-icons/fa6";
import HamburgerMenu from "./HamburgerMenu";
import { isDesktop } from "react-device-detect";

const HeaderNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` header-section ${
        isSticky ? "header-section-fixed" : "header-section-sticky"
      }`}
    >
      <div className=" d-flex align-items-center h-100 w-100 justify-content-between">
        <div
          className=" d-flex align-items-center h-100 cursor-pointer"
          title="Hangoutech"
        >
          <div className=" company-logo">
            <img src={logo} alt="" />
          </div>
          <span
            className={`company-logo-text ps-1 ${
              isSticky ? "text-primary fw-medium" : "text-white"
            }`}
          >
            ANGOUTECH
          </span>
        </div>
        {!isDesktop ? (
          <HamburgerMenu isSticky={isSticky} />
        ) : (
          <div className=" d-flex align-items-center justify-content-end  flex-grow-1 header-title">
            <div className="d-flex align-items-center">
              <a href="#homeSection" className=" text-decoration-none">
                Home
              </a>
              <a href="#aboutSection" className=" text-decoration-none">
                About
              </a>
              <a href="#serviceSection" className=" text-decoration-none">
                Service
              </a>
              <a href="#blogSection" className=" text-decoration-none">
                Blog
              </a>
            </div>
            <div>
              <a
                className="pe-0 d-flex align-items-center gap-2 text-decoration-none contact-arrow-wrapper"
                href="#contactSection"
              >
                Contact{" "}
                <span className=" contact-arrow">
                  <FaArrowUpLong
                    // color={isSticky ? "var(--primary)" : "var(--white)"}
                    size={20}
                  />
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderNavbar;
