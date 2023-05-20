import React from "react";
import "./SkillSection.css";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

function SkillSection() {
  return (
    <div className="Skill" id="skill">
      <h3 className="Skill-title">
        Languages, Libraries and Frameworks I{" "}
        <span style={{ color: "#cd5ff8" }}>Learn</span>
      </h3>
      <div className="row">
        <div className="card" style={{ margin: "2rem" }}>
          <DiHtml5 className="skill-icons" />
          <div className="overlay">
            <h4>HTML</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <DiCss3 className="skill-icons" />
          <div className="overlay">
            <h4>CSS</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <DiJavascript1 className="skill-icons" />
          <div className="overlay">
            <h4>JavaScript</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <DiReact className="skill-icons" />
          <div className="overlay">
            <h4>React</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <DiMongodb className="skill-icons" />
          <div className="overlay">
            <h4>MongoDb</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <SiExpress className="skill-icons" />
          <div className="overlay">
            <h4>Express.js</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <DiNodejs className="skill-icons" />
          <div className="overlay">
            <h4>Nodejs</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <FaJava className="skill-icons" />
          <div className="overlay">
            <h4>Java</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <TbBrandCpp className="skill-icons" />
          <div className="overlay">
            <h4>C++</h4>
          </div>
        </div>
        <div className="card" style={{ margin: "2rem" }}>
          <FaGitAlt className="skill-icons" />
          <div className="overlay">
            <h4>Git & Git Hub</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
