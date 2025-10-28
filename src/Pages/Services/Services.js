import React from "react";
import "./Services.scss";
import ServiceCard from "./ServiceCard";
import { Col, Row } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import { 
  FaMobileScreen, 
  FaCode, 
  FaChartLine, 
  FaPenNib, 
  FaInfinity,
} from "react-icons/fa6";
import { SiTensorflow } from "react-icons/si";

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
          <ServiceCard 
            ServiceCardtext="Mobile App" 
            ServiceCardSubText="Create innovative and user-friendly mobile apps tailored for Android and iOS platforms to enhance user engagement and drive business growth." 
            cardCount="01." 
            icon={<FaMobileScreen size={70} color="#00D9FF" />}
          />
        </Col>
        <Col lg={4}>
          <ServiceCard 
            ServiceCardtext="Web App"  
            ServiceCardSubText="Develop high-performance, scalable web applications with seamless user experiences to transform your online presence and boost digital efficiency." 
            cardCount="02."  
            icon={<FaCode size={70} color="#7C3AED" />}
          />
        </Col>
        <Col lg={4}>
          <ServiceCard 
            ServiceCardtext="AI/ML" 
            ServiceCardSubText="Leverage cutting-edge Artificial Intelligence and Machine Learning solutions to automate processes, gain insights, and revolutionize decision-making." 
            cardCount="03."
            icon={<SiTensorflow size={70} color="#F59E0B" />}
          />
        </Col>
        <Col lg={4}>
          <ServiceCard 
            ServiceCardtext="Digital Marketing" 
            ServiceCardSubText="Boost your online visibility with expert digital marketing strategies, including SEO, PPC, social media marketing, and content optimization." 
            cardCount="04." 
            icon={<FaChartLine size={70} color="#10B981" />}
          />
        </Col>
        <Col lg={4}>
          <ServiceCard 
            ServiceCardtext="UI/UX" 
            ServiceCardSubText="Design intuitive and visually stunning UI/UX experiences that captivate users, improve usability, and increase customer retention." 
            cardCount="05."  
            icon={<FaPenNib size={70} color="#EC4899" />}
          />
        </Col>
        <Col lg={4}>
          <ServiceCard 
            ServiceCardtext="Devops" 
            ServiceCardSubText="Implement robust DevOps practices to streamline development, automate workflows, and accelerate deployment with CI/CD pipelines." 
            cardCount="06."  
            icon={<FaInfinity size={70} color="#06B6D4" />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
