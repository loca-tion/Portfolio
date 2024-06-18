import React from "react";
import Image from "../Image.png";
import "./HeroSection.css";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className="hero" id="hero">
      <div className="hero-title">
        <p>Hi There ! <span className="hand-wave">👋🏻</span></p>
        <h4>I'M <strong>SUJAL SHARMA</strong></h4>
        <div className="text" style={{color:'#cd5ff8'}}>
          <Typewriter
          options={{autoStart:true,loop:true,delay:40,strings:['Web Developer','Competetive programmer','Computer Science Enthusiast']}}
           />
        </div>
      </div>
      <div className="hero-img">
        <img src={Image} alt='No'></img>
      </div>
    </div>
  );
}

export default HeroSection;
