import React from 'react'
import { Link, Route, Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
//   faReact,
} from "@fortawesome/free-solid-svg-icons";
import bs from '../images/bs.svg'
import react from "../images/react.svg";
import html from "../images/html.svg";
import tailwind from "../images/tailwind.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import git from "../images/git.svg";
import github from "../images/github.svg";



export default function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="row">
        <div className="box">
          <img className="skills-icons" src={html} alt="html" />
          <p>HTML</p>
        </div>
        <div className="box">
          <img className="skills-icons" src={css} alt="css" />
          <p>CSS</p>
        </div>
        <div className="box">
          <img className="skills-icons" src={bs} alt="bootstrap" />
          <p>Bootstrap</p>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <img className="skills-icons" src={js} alt="javascript" />
          <p>Javascript</p>
        </div>
        <div className="box">
          <img className="skills-icons" src={react} alt="react" />
          <p>React</p>
        </div>
        <div className="box">
          <img className="skills-icons" src={tailwind} alt="tailwind" />
          <p>Tailwind</p>
        </div>
      </div>
      <div className="services">
        <h4>Services</h4>
        <div className="row">
          <div className="box2">
            <img className="skills-icons" src={github} alt="github" />
            <p>Github</p>
          </div>

          <div className="box2">
            <img className="skills-icons" src={git} alt="git" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}
