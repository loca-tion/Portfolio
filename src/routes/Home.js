import React from 'react'
import Navbar from "../Components/Navbar";
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import SkillSection from '../Components/SkillSection';
import ResumeSection from '../Components/ResumeSection';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ResumeSection />
      <Projects />
      {/* <Footer /> */}
    </div>
  )
}

export default Home