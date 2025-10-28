import React from "react";
import CommonButton from "../../Components/CommonButton";


const ServiceCard = ({ ServiceCardtext, ServiceCardSubText, cardCount, icon }) => {
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
      <div className="service-icon mb-3">
        {icon}
      </div>
      <CommonButton buttontext={ServiceCardtext} />
      <h6 className=" pt-3 text-white text-center">
       {ServiceCardSubText}
      </h6>
    </div>
  );
};

export default ServiceCard;
