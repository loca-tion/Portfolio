import React from "react";
import "./Projects.css";
import PJ1 from "../Images/project1.png"
import PJ2 from "../Images/project2.png"
import PJ3 from "../Images/project3.png"
import PJ4 from "../Images/calculator.jpg";

function Projects() {
  return (
    <div className="Projects" id="project">
      <div className="Project-Title">
        <h4>
          My Recent <span style={{ color: "#cd5ff8" }}>PROJECTS</span>
        </h4>
        <p>Here are a few projects I've worked on recently.</p>
      </div>
      <div className="row">
        <a href="https://github.com/loca-tion/Shopping-Cart-Website">
        <div className="project-card" style={{ margin: "2rem" }}>
          <img
            src={PJ1}
            alt="No"
          ></img>
          <h3>Shopping Cart Website</h3>
        </div>
        </a>
        <a href="https://github.com/loca-tion/Daily-Journal-">
        <div className="project-card" style={{ margin: "2rem" }}>
          <img
            src={PJ2}
            alt="No"
          ></img>
          <h3>Daily Journal</h3>
        </div>
        </a>
        <a href="https://github.com/loca-tion/Shopping-website-UI">
        <div className="project-card" style={{ margin: "2rem" }}>
          <img
            src={PJ3}
            alt="No"
          ></img>
          <h3>Shopping website UI</h3>
        </div>
        </a>
        <a href="https://github.com/loca-tion/Calculator">
        <div className="project-card" style={{ margin: "2rem" }}>
          <img
            src={PJ4}
            alt="No"
          ></img>
          <h3>Calculator</h3>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
