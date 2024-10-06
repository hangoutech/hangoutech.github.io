import React, { useRef, useState } from "react";
import "./Contact.scss";
import { Col, Row } from "react-bootstrap";
import CommonButton from "../../Components/CommonButton";
import contactImage from "../../assests/images/download4.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGlobe, FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

const Contact = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      inputRef?.current &&
      inputRef?.current.value.trim()
    ) {
      event.preventDefault();
    }
  };

  return (
    <div
      className={` contact-section poistion-relative  ${
        isMobile || isTablet ? "is-padding-responsive" : "is-padding-lg"
      }`}
      id="contactSection"
    >
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h3 className="  text-white contact-title pb-4">CONTACT US</h3>
        <h5 className=" text-center text-white contact-company-subtext">
          Looking to turn your vision into reality? We’d love to help. Shoot us
          a message or fill out the form, and we’ll get back to you faster than
          you expect!
        </h5>
      </div>
      <Row className=" mt-5 ">
        <Col lg={6}>
          <div className=" mb-4">
            <label className=" text-white fs-14 mb-2">Your Name</label>
            <input
              ref={inputRef}
              type="text"
              className="footer-input w-100"
              onChange={(e) => setMessage(e?.target?.value)}
              placeholder=" Enter your name "
              onKeyDown={handleKeyDown}
              id="inputID"
              maxLength={20}
            />
          </div>
          <div className=" mb-4">
            <label className=" text-white fs-14 mb-2">Your E-mail</label>
            <input
              ref={inputRef}
              type="email"
              className="footer-input w-100"
              onChange={(e) => setMessage(e?.target?.value)}
              placeholder=" Enter your e-mail address "
              onKeyDown={handleKeyDown}
              id="inputID"
              maxLength={20}
            />
          </div>

          <div className="mb-4">
            <label className=" text-white fs-14 mb-2">Your Message</label>
            <textarea
              ref={inputRef}
              className="textarea-footer-input w-100"
              placeholder="Type a message here..."
              onChange={(e) => setMessage(e?.target?.value)}
              onKeyDown={handleKeyDown}
              id="inputID"
              rows={5}
            />
          </div>
          <div
            className={`d-flex ${
              isDesktop ? "justify-content-start" : "justify-content-center"
            }`}
          >
            <CommonButton buttontext="Send Message" className="mt-5" />
          </div>
        </Col>
        <Col
          lg={6}
          className={isDesktop ? "d-flex align-items-center flex-column" : ""}
        >
          <div className=" ms-4">
            <div className=" d-flex  justify-content-center  contact-image align-items-center d-none d-lg-block">
              <img src={contactImage} alt="contactImage" />
            </div>
            <div className=" mt-4">
              <div className=" mb-3">
                <h5 className=" text-white fs-15 d-flex align-items-center letter-spacing">
                  <a
                    href="https://www.google.com/maps/place/Software/@12.9296256,79.3492006,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad35291db25dad:0x3855568df97b0a53!8m2!3d12.9296204!4d79.3517755!16s%2Fg%2F11w4j07380?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                    className=" text-white text-decoration-none d-flex "
                  >
                    <div className=" me-3">
                      <FaMapMarkerAlt color="var(--white)" size={20} />
                    </div>
                    Hangoutech Private Limited No: 26, Madeena Nagar, Vannivedu,
                    <br />
                    Walajapet - 632513.
                  </a>
                </h5>
              </div>
              <div className=" mb-3">
                <h5 className=" text-white fs-15 d-flex  align-items-center letter-spacing">
                  <a
                    href="tel:+919698338807"
                    className=" text-white text-decoration-none"
                  >
                    <span className=" me-3">
                      <FaPhone color="var(--white)" size={20} />
                    </span>
                    +91 96983 38807
                  </a>
                </h5>
              </div>
              <div className=" mb-3">
                <h5 className=" text-white fs-15 d-flex  align-items-center letter-spacing">
                  <a
                    href="mailto:help.hangoutech@gmail.com"
                    className=" text-white text-decoration-none"
                  >
                    <span className=" me-3">
                      <TbMailFilled color="var(--white)" size={22} />
                    </span>
                    help.hangoutech@gmail.com
                  </a>
                </h5>
              </div>
              {/* <div className=" mb-3">
                <h5 className=" text-white fs-15 d-flex  align-items-center letter-spacing">
                  <a
                    href="https://hangoutech.com"
                    className=" text-white text-decoration-none"
                  >
                    <span className=" me-3">
                      <FaGlobe color="var(--white)" size={20} />
                    </span>
                    hangoutech.com
                  </a>
                </h5>
              </div> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
