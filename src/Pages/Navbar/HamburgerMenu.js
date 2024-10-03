import React, { useEffect, useState } from "react";
import "./HamburgerMenu.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assests/images/hangotech-logo.png";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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
    <div className="d-flex position-relative">
      <div
        onClick={toggleSidebar}
        className={` cursor-pointer ${
          isSticky ? "text-primary" : "text-white"
        }`}
      >
        <HiMiniBars3BottomRight size={30} />
      </div>
      <div className={`hamburger-menu-sidebar ${isOpen ? "show" : ""}`}>
        <div className=" d-flex  justify-content-between align-items-center">
          <div
            className=" d-flex align-items-center h-100 cursor-pointer"
            title="Hangoutech"
          >
            <div className=" company-logo">
              <img src={logo} alt="" />
            </div>
            <span className="company-logo-text ps-1 text-primary fw-medium ">
              ANGOUTECH
            </span>
          </div>
          <div onClick={toggleSidebar}>
            <RxCross2 size={30} color="text-primary" />
          </div>
        </div>
        <ul>
          <li>
            <a
              href="#homeSection"
              className=" text-decoration-none"
              onClick={toggleSidebar}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutSection"
              className=" text-decoration-none"
              onClick={toggleSidebar}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#serviceSection"
              className=" text-decoration-none"
              onClick={toggleSidebar}
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#blogSection"
              className=" text-decoration-none"
              onClick={toggleSidebar}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contactSection"
              className=" text-decoration-none"
              onClick={toggleSidebar}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
