import React from "react";
import { Link, Route, Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <div>
      <nav className="nav-container">
        <Link className="name-logo-linked" to="/">
          <h2>
            Kha<span>lifa.</span>
          </h2>
        </Link>
        <HamburgerMenu />
        <div className="nav-items">
          <ul>
            <Link className="nav-item-linked" to="/">
              <li>Home</li>
            </Link>
            <Link className="nav-item-linked" to="/about">
              <li>About Me</li>
            </Link>
            <Link className="nav-item-linked" to="/skills">
              <li>Skills</li>
            </Link>
            <Link className="nav-item-linked" to="/experiences">
              <li>Experiences</li>
            </Link>
          </ul>
        </div>
        <button className="contact-btn">
          <FontAwesomeIcon className="font-icon" icon={faPhone} />
          <Link className="contact-link-btn" to="/contact">
            Contact Me
          </Link>
        </button>
      </nav>
    </div>
  );
}
