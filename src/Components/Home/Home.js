import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home-container">
       <Hero/>
       <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default Home;
