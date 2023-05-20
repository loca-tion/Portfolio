import React, { useState } from "react";
import "./Navbar.css";
import logo from "../logo.png";
import logo2 from "../logoswitch.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "Header Header-bg" : "Header"}>
      <Link to="/">
        <img src={click  || color ? logo2 : logo} alt="Sujal Sharma."></img>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={-100} duration={500} className={color ? 'active':''}>
            <AiFillHome className="link-icons" />
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} duration={500} className={color ? 'active':''}>
            <IoPerson className="link-icons" />
            About
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} offset={-100} duration={500} className={color ? 'active':''}>
            <IoNewspaper className="link-icons" />
            Resume
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} offset={-100} duration={500} className={color ? 'active':''}>
            <HiOutlineClipboardDocumentList className="link-icons" />
            Projects
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} className="hamburger-icon"/>
        ) : (
          <FaBars size={20} className="hamburger-icon" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
