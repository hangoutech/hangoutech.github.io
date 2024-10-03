import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./CommonButton.scss";

function CommonButton({ buttontext, homePage, className }) {
  return (
    <div className={` start-btn animate-btn ${className}`}>
      {buttontext}
      {homePage && (
        <span className=" ps-2">
          <FaArrowRightLong size={20} />
        </span>
      )}
    </div>
  );
}

export default CommonButton;
