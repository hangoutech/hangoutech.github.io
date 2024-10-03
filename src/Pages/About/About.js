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
          At Hangoutech, we deliver innovative IT solutions, including cloud
          computing, cybersecurity, and custom software development, to help
          businesses thrive in the digital era. Our mission is to empower growth
          and efficiency through cutting-edge technology and expert consulting.
        </h5>
      </div>

      <CounterSection />
    </div>
  );
};

export default About;
