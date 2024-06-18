import React from "react";
import "./Projects.css";
import PJ1 from "../Images/project1.png"
import PJ2 from "../Images/project2.png"
import PJ3 from "../Images/project3.png"

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
        <a href="https://github.com/loca-tion/E-Commerce-App">
        <div className="project-card" style={{ margin: "2rem" }}>
          <img
            src={PJ1}
            alt="No"
           className="images"></img>
          <h3>E-Commerce App</h3>
        </div>
        </a>
        <a href="https://github.com/loca-tion/Live-Code-Editor-Backend">
        <div className="project-card" style={{ margin: "2rem" }}>
          <img
            src={PJ3}
            alt="No"
            className="images"
          ></img>
          <h3>Live Cde Editor</h3>
        </div>
        </a>
        <a href="https://github.com/loca-tion/FreshInk-App">
        <div className="project-card" style={{ margin: "2rem" }}>
          <img
            src={PJ2}
            alt="No"
            className="images"
          ></img>
          <h3>FreshInk : Blog App</h3>
        </div>
        </a>
    </div>
    </div>
  );
}

export default Projects;
