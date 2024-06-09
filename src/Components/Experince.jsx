import React from 'react'
import { Link, Route, Router } from "react-router-dom";
import whisper from '../images/whisper.png'
import bandage from "../images/bandage.png";
import todo from "../images/todo.png";
import netflix from "../images/netflix.png";
import weather from "../images/weather.png";
import notepad from "../images/notepad.png";

export default function Experince() {
  return (
    <div>
      <div className="experience-container">
        <h2>Professional Experience</h2>
        <div className="row">
          <div className="whisper">
            <img className="experience-image" src={whisper} alt="whisper app" />
            <Link className="linked-apps" to="/whisper">
              Whisper App
            </Link>
            <p>Frontend Developer</p>
          </div>
          <div className="whisper">
            <img className="experience-image" src={bandage} alt="bandage app" />
            <Link className="linked-apps" to="/whisper">
              Bandage App
            </Link>
            <p>Frontend Developer</p>
          </div>
          <div className="whisper">
            <img
              className="experience-image"
              src={netflix}
              alt="netflix clone app"
            />
            <Link className="linked-apps" to="/whisper">
              Netflix Clone App
            </Link>
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className="row">
          <div className="whisper">
            <img className="experience-image" src={todo} alt="to-do app" />
            <Link className="linked-apps" to="/whisper">
              To-Do App
            </Link>
            <p>Frontend Developer</p>
          </div>

          <div className="whisper">
            <img className="experience-image" src={weather} alt="weather app" />
            <Link className="linked-apps" to="/whisper">
              Weather App
            </Link>
            <p>Frontend Developer</p>
          </div>

          <div className="whisper">
            <img className="experience-image" src={notepad} alt="notepad app" />
            <Link className="linked-apps" to="/whisper">
              Notepad App
            </Link>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
