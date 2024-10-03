import React from "react";
import "./Services.scss";
import ServiceCard from "./ServiceCard";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";

const Services = () => {
  return (
    <div
      id="serviceSection"
      className={` service-section poistion-relative  ${
        isMobile || isTablet ? "is-padding-responsive" : "is-padding-lg"
      }`}
    >
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h3 className="  text-white about-title pb-4">WHAT WE DO</h3>
        <h5 className=" text-center text-white about-company-subtext">
          Comprehensive tech solutions from mobile and web app development to
          AI/ML, UI/UX, testing, and support—We’ve got you covered with tailored
          solutions to drive your business forward.
        </h5>
      </div>
      <Row className=" mt-5 ">
        <Col lg={4}>
          <ServiceCard ServiceCardtext="Mobile App" cardCount="01." />
        </Col>
        <Col lg={4}>
          <ServiceCard ServiceCardtext="Mobile App" cardCount="01." />
        </Col>
        <Col lg={4}>
          <ServiceCard ServiceCardtext="Mobile App" cardCount="01." />
        </Col>
        <Col lg={4}>
          <ServiceCard ServiceCardtext="Mobile App" cardCount="01." />
        </Col>
        <Col lg={4}>
          <ServiceCard ServiceCardtext="Mobile App" cardCount="01." />
        </Col>
        <Col lg={4}>
          <ServiceCard ServiceCardtext="Mobile App" cardCount="01." />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
