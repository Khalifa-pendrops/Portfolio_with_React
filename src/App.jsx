import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './App.css'
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Experince from './Components/Experince';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <div className='background-image'>
        <Navbar />
        <Intro />
      </div>
      <AboutMe />
      <Skills />
      <Experince />
      <Contact />
      <Footer />
    </>
  );
}

export default App