import React, { useState } from "react";
import CommonButton from "../../Components/CommonButton";
import aboutImage from "../../assests/images/Love App.svg";

const ServiceCard = ({ ServiceCardtext, ServiceCardSubText, cardCount }) => {
  //   const [bgColor, setBgColor] = useState("service-card-blue");

  //   const handleMouseEnter = () => {
  //     setBgColor("service-card-green");
  //   };

  //   const handleMouseLeave = () => {
  //     setBgColor("service-card-blue");
  //   };
  return (
    <div
      className={`position-relative service-card p-3 d-flex justify-content-center align-items-center flex-column `}
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
    >
      <div className=" card-count">
        <span className=" card-count-text">{cardCount}</span>
      </div>
      <img src={aboutImage} alt="" />
      <CommonButton buttontext={ServiceCardtext} />
      <h6 className=" pt-3 text-white text-center">
        We are leading technology solutions providing company all over the world
        doing lorem ipsum dolor sit amet.
      </h6>
    </div>
  );
};

export default ServiceCard;
