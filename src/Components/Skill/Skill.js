// Skill.js
import React from "react";
import "./Skill.css";
import reacts_logo from '../Assets/images/react.png'
import backend_logo from '../Assets/images/backend.png'
import data_analys_logo from '../Assets/images/data-analysis.png'
import database from '../Assets/images/database.png'
import design from '../Assets/images/design.png'
import frontend from '../Assets/images/frontend.png'
import html_css from '../Assets/images/html_css.png'
import leader from '../Assets/images/leader.png'
import softwaredev from '../Assets/images/sof-dev.png'
import teach from '../Assets/images/teaching.png'
import wedev from '../Assets/images/web-dev.png'
import ms_office from '../Assets/images/msoffice.png'


const skills = [
  { name: "React", image: reacts_logo, info: "Frontend library for UI development", level: "Intermediate" },
  { name: "Web Development", image: wedev , info: "Building and maintaining websites", level: "Intermediate" },
  { name: "Software Development", image: softwaredev, info: "Creating software applications", level: "Intermediate" },
  { name: "HTML & CSS", image: html_css, info: "Structuring and styling web pages", level: "Intermediate" },
  { name: "Front-End", image: frontend, info: "User interface development", level: "Intermediate" },
  { name: "Back-End", image: backend_logo, info: "Server-side logic and databases", level: "Intermediate" },
  { name: "Database Management", image: database, info: "Handling and structuring data", level: "Intermediate" },
  { name: "Teaching", image: teach, info: "Educating and mentoring students", level: "Intermediate" },
  { name: "Graphic Design", image: design, info: "Creating visual content", level: "Intermediate" },
  { name: "Leadership", image: leader, info: "Guiding teams effectively", level: "Intermediate" },
  { name: "Data Analysis", image: data_analys_logo, info: "Interpreting complex data", level: "Intermediate" },
  { name: "Microsoft Office Suite", image: ms_office, info: "Using Word, Excel, and PowerPoint", level: "Intermediate" },
];

const Skill = () => {
  return (
    <section className="skill-container">
      <h2 className="skill-title">My Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-info">{skill.info}</p>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
