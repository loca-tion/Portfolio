import React from "react";
import "./ResumeSection.css";
import { FaDownload } from "react-icons/fa";
import Resume from "../files/SujalResume.pdf";

function ResumeSection() {
  return (
    <div className="Resume" id="resume" style={{ padding: "50px 4rem" }}>
      <div className="download-resume">
        <button className="download-btn">
          <a href={Resume} download>
            <FaDownload /> Download CV
          </a>
        </button>
      </div>
      <div className="Resume-Container">
        <div className="row">
          {/* EDUCATION SECTION  */}
          <section className="col">
            <header id="title">
              <h2>EDUCATION</h2>
            </header>
            <div id="content">
              <div className="box">
                <h4>2021-2025</h4>
                <h3>National Institute of Technology, Hamirpur</h3>
                <p>Computer Science and Engineering Student </p>
                <p>
                  <strong>CGPI : 8.4</strong>
                </p>
              </div>

              <div className="box">
                <h4>2020-2021</h4>
                <h3>DAV Public School, Alampur</h3>
                <p>Class 12th in Science (Non-Medical) stream</p>
                <p>
                  <strong>Percentage : 94%</strong>
                </p>
              </div>
            </div>
          </section>
          {/* EXPERIENCE SECTION */}
          <section className="col">
            <header id="title">
              <h2>EXPERIENCE</h2>
            </header>
            <div id="content">
              <div className="box">
                <h4>Society of Civil Engineering of NIT Hamirpur Website</h4>
                <h3>React.js, HTML , TailwindCSS</h3>
                <p>
                  • Designed and implemented UI for college civil Society
                  website.
                </p>
                <p>
                  • Fully Responsive for various width devices and optimized
                  using React-Scroll and MaterialUI
                </p>
                <p>• Worked in team of 4 member to create fully Responsive for various width devices and optimized using React-Scroll and MaterialUI</p>
              </div>

              <div className="box">
                {/* <h4>2020-2021</h4> */}
                        <h3>AI-Thon</h3>
                        <p>Organized by Intel India and Central Board of Secondary Education (CBSE) where we learn about AI
and Machine Learning Technologies using Python Libraries.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
