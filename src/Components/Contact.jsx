import React from "react";
import { Link, Route, Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import whatsapp from "../images/whatsapp.svg";
import twitter from "../images/twitter.svg";
import envelop from "../images/envelop.png";

export default function Contact() {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-text">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind? <span>Send me a DM.</span>
          </p>
        </div>
        <div className="contact-social">
          <Link to="www.whatsapp.com/dl/">
            <img src={whatsapp} alt="whatsapp" width="100px" />
          </Link>
          <Link to="dikee5200@gmail.com">
            <img src={envelop} alt="email" width="100px" />
          </Link>
          <Link to="https://x.com/P3ndrops?t=2vZEhefyiX3WOeo6kW37wQ&s=09">
            <img src={twitter} alt="twitter" width="100px" />
          </Link>
        </div>
      </div>
    </div>
  );
}
