import React from "react";
import "./About.scss";
import CounterSection from "./CounterSection";
import { isMobile, isTablet } from "react-device-detect";

const About = () => {
  return (
    <div
      className={` about-section poistion-relative  ${
        isMobile || isTablet ? "is-padding-responsive" : "is-padding-lg"
      }`}
      id="aboutSection"
    >
      {/* <Row className=" align-items-center hero-section">
        <Col md={4}>
          <div className=" d-flex  justify-content-center h-100 about-image">
            <img src={aboutImage} alt="" />
          </div>
        </Col>
        <Col md={8}>
        
        </Col>
      </Row> */}
      <div className="d-flex justify-content-center flex-column align-items-center">
        {" "}
        <h3 className="  text-white about-title pb-4">ABOUT COMPANY</h3>
        <h5 className=" text-center text-white about-company-subtext">
        At Hangoutech, we specialize in delivering innovative IT solutions to empower businesses in the digital era. Our expertise spans cloud computing, cybersecurity, custom software development, and mobile app development, including Flutter and native applications.
        </h5>
        <h5 className=" text-center text-white about-company-subtext">
        Our mission is to help businesses thrive by driving growth and efficiency through cutting-edge technology and expert IT consulting. Whether you're looking for scalable cloud solutions, robust security, or intuitive mobile applications, Hangoutech is your trusted partner for success.
        </h5>
      </div>

      <CounterSection />
    </div>
  );
};

export default About;
