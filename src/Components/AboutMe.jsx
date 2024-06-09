import React from "react";
import { Link, Route, Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import display from "../images/display.jpg";
import whatsapp from "../images/whatsapp.svg";
import ContactLink from "./ContactLink";

export default function AboutMe() {
  return (
    <div>
      <div className="about-container">
        <div className="left-side-about">
          <div className="left-side-head">
            <h2>About Me</h2>
            <div className="socials">
              <div className="social-whatsapp">
                <img src={whatsapp} alt="whatsapp" width="16px" />
                <Link className="social-linked" to="www.whatsapp.com/">
                  +2348139308197
                </Link>
              </div>
              <div className="social-email">
                <FontAwesomeIcon icon={faEnvelope} />
                <Link className="social-linked" to="www.mail.google.com">
                  dikee5200@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <p className="about-text">
            I am a results-driven and enthusiastic <b>Frontend Developer</b>{" "}
            with current expertise in <i>React.JS</i>. I am Proficient in
            <i>HTML, CSS and JavaScript,</i> I have a proven track record of
            delivering high-quality, scalable solutions. My commitment to
            staying current with industry trends and my passion for learning, as
            well as an eye for creating innovative solutions drive my continuous
            learning and professional growth.
          </p>
        </div>
        <img className="profile-image" src={display} alt="profile" />
      </div>
    </div>
  );
}
