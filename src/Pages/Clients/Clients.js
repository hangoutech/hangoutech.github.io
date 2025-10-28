import React from "react";
import "./Clients.scss";

// Import local client logos
import client1 from "../../assests/images/coducer_logo.png";
import client2 from "../../assests/images/findicus_logo.png";
import client3 from "../../assests/images/proppify_logo.png";
import client4 from "../../assests/images/pitchiton_logo.png";
import client5 from "../../assests/images/vigno_inc_logo.png";
import client6 from "../../assests/images/broadridge_logo.png";


const Clients = () => {
  return (
    <div className="slider border-bottom border-top">
      <div className="slide-track">
        <div className="slide">
          <img
            src={client1}
            alt="Client Logo 1"
          />
        </div>
        <div className="slide">
          <img
            src={client2}
            alt="Client Logo 2"
          />
        </div>
        <div className="slide">
          <img
            src={client3}
            alt="Client Logo 3"
          />
        </div>
        <div className="slide">
          <img
            src={client4}
            alt="Client Logo 4"
          />
        </div>
        <div className="slide">
          <img
            src={client5}
            alt="Client Logo 5"
          />
        </div>
        <div className="slide">
          <img
            src={client6}
            alt="Client Logo 6"
          />
        </div>
        
        <div className="slide">
          <img
            src={client1}
            alt="Client Logo 1"
          />
        </div>
        <div className="slide">
          <img
            src={client2}
            alt="Client Logo 2"
          />
        </div>
        <div className="slide">
          <img
            src={client3}
            alt="Client Logo 3"
          />
        </div>
        <div className="slide">
          <img
            src={client4}
            alt="Client Logo 4"
          />
        </div>
        <div className="slide">
          <img
            src={client5}
            alt="Client Logo 5"
          />
        </div>
        <div className="slide">
          <img
            src={client6}
            alt="Client Logo 6"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
