/* eslint-disable jsx-a11y/alt-text, jsx-a11y/img-redundant-alt */
import React from "react";
import CommonButton from "../../Components/CommonButton";
import aboutImage from "../../assests/images/Love App.svg";

const ServiceCard = ({ ServiceCardtext, ServiceCardSubText, cardCount }) => {
  return (
    <div className="position-relative service-card p-3 d-flex justify-content-center align-items-center flex-column">
      <div className="card-count">
        <span className="card-count-text">{cardCount}</span>
      </div>
      <img src={aboutImage} alt="Service Card Image" />
      <CommonButton buttontext={ServiceCardtext} />
      <h6 className="pt-3 text-white text-center">
        {ServiceCardSubText}
      </h6>
    </div>
  );
};

export default ServiceCard;
