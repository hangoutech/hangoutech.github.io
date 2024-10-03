import React from "react";
import "./Home.scss";
import HeaderNavbar from "../Navbar/HeaderNavbar";
import { Col, Row } from "react-bootstrap";
import heroImage from "../../assests/images/data.svg";
import heroImageBusiness from "../../assests/images/file.png";
import CommonButton from "../../Components/CommonButton";
import { isMobile, isTablet } from "react-device-detect";

const Home = (isSticky) => {
  return (
    <div className="poistion-relative" id="homeSection">
      {/* <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div> */}
      <div
        className={` home-section poistion-relative ${
          isMobile || isTablet ? "is-padding-responsive" : "is-padding-lg"
        } ${
          isSticky
            ? ""
            : "d-flex align-items-center justify-content-center flex-column"
        }`}
      >
        <HeaderNavbar isSticky={isSticky} />

        <Row className=" align-items-center hero-section">
          <Col lg={6}>
            <div>
              <div className=" hero-text-1">We Make The Best</div>
              <div className=" hero-text-2 py-3">Technology Solutions</div>
            </div>
            <h2 className=" hero-subtext">
              We are leading technology solutions providing company all over the
              world doing lorem ipsum dolor sit amet.
            </h2>

            <CommonButton
              buttontext=" Get started"
              homePage={true}
              className="mt-5"
            />
          </Col>
          <Col lg={6} className=" d-flex justify-content-end">
            <div className=" d-flex  justify-content-center h-100 hero-image">
              {/* <img src={heroImage} alt="" /> */}
              <img src={heroImageBusiness} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
