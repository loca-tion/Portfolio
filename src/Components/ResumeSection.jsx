import React from "react";
import "./ResumeSection.css";
import { FaDownload } from "react-icons/fa";

function ResumeSection() {
  return (
    <div className="Resume" id="resume" style={{padding:'50px 4rem'}}>
      <div className="download-resume">
        <button className="download-btn">
          <a href="#">
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
                        <p><strong>CGPI : 8.14</strong></p>
                    </div>

                    <div className="box">
                        <h4>2020-2021</h4>
                        <h3>DAV Public School, Alampur</h3>
                        <p>Class 12th in Science (Non-Medical) stream</p>
                        <p><strong>Percentage : 94%</strong></p>
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
                        {/* <h4>2020-2021</h4>
                        <h3>Class 12th</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ut fugiat eum dolorem deserunt! Ex, quam maxime! Error quis, assumenda, hic quaerat est architecto ab tenetur quibusdam ipsum, laboriosam rem.</p> */}
                    </div>

                    <div className="box">
                        {/* <h4>2020-2021</h4>
                        <h3>Class 12th</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ut fugiat eum dolorem deserunt! Ex, quam maxime! Error quis, assumenda, hic quaerat est architecto ab tenetur quibusdam ipsum, laboriosam rem.</p> */}
                    </div>

                </div>
            </section>
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
