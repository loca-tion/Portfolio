import React from 'react'
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";


function Footer() {
  return (
    <div className='Footer'>
        <div className='Links'>
            <ul>
                <li>
                    <a href='https://github.com/loca-tion'><AiFillGithub className='Link-icon'/></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/sujal-sharma-55046824b/'><AiFillLinkedin className='Link-icon'/></a>
                </li>
                <li>
                    <a href='https://leetcode.com/sujalsharma_13/'><SiLeetcode className='Link-icon'/></a>
                </li>
                <li>
                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBlHqvlRpVKzTlSvCgdzbBqhPKJtgLDSTvGdKFZGdxcZZVjsWdNqrhXCZGpXHzJnKNBFsx'><MdEmail className='Link-icon'/></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/sujalsharma_13/'><AiFillInstagram className='Link-icon'/></a>
                </li>
            </ul>
        </div>
        <div className='Footer-title' style={{paddingRight:'4rem'}}>
            <h3 style={{color:'#fff'}}>SUJAL SHARMA</h3>
        </div>
    </div>
  )
}

export default Footer