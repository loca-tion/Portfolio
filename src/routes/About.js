import React from "react";
import Navbar from "../Components/Navbar";
import AboutSection from '../Components/AboutSection';


function About() {
  return (
    <>
    <Navbar />
    <div style={{paddingTop:'30vh'}}>
    <AboutSection />
    </div>
    </>

  );
}

export default About;
