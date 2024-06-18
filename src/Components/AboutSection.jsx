import React from "react";
import "./AboutSection.css";
import MyImage from "../myimage.png";
import logo from "../logo.png";

function AboutSection() {
  return (
    <div className="About" id="about">
      <div className="About-content">
        <h3>
          Little bit about <span style={{ color: "#cd5ff8" }}>MYSELF</span>
        </h3>
        <p>
          Hi Everyone, I am{" "}
          <span style={{ color: "#cd5ff8" }}>Sujal Sharma</span>,<br></br> I am
          doing my B.Tech in Computer Science and Engineering from National
          Institute of Technology Hamirpur. I have an overall CGPI of 8.4.
          Currently, I'm pre-final year student at NIT Hamirpur. I like to learn
          new techs, tackle complex challenges head-on to deliver technically
          sound solutions with optimum efficiency.
        </p>
        <div className="profiles_links">
          <button className="profile_button"><a href="https://codeforces.com/profile/sujalsharma_13">Codeforces</a></button>
          <button className="profile_button"><a href="https://leetcode.com/u/sujalsharma_13/">LeetCode</a></button>
        </div>
      </div>
      <div className="About-img">
        <img src={MyImage} alt={logo} id="myimg"></img>
      </div>
    </div>
  );
}

export default AboutSection;
