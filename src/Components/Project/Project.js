import React, { useState } from "react";
import "./Project.css";
import { FaPlayCircle, FaTimes } from "react-icons/fa";

import teachingVideo from '../Assets/videos/teaching-video.mp4';
import myportfolio from '../Assets/images/portfolio.png';
import teachphoto from '../Assets/images/teaching.jpeg';
import travelphoto from '../Assets/images/t&tweb.png';
import unicollege from '../Assets/images/unicollege.png';
import admidash from '../Assets/images/admindash.png';



const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    technologies: ["React", "CSS", "Framer Motion"],
    image: myportfolio,
    link: "#"
  },
  {
    title: "Teaching Video",
    description: "Watch me teach a professional French lesson, covering key concepts and techniques.",
    technologies: ["Language Teaching", "Communication"],
    video: teachingVideo,
    image: teachphoto
  },
  {
    title: "Travel and Tour Website",
    description: "A travel and tour website with interactive features and a modern UI.",
    technologies: ["React", "CSS", "Framer Motion"],
    image: travelphoto,
    link: "#"
  },
  {
    title: "University College Website",
    description: "A responsive university website featuring admissions, courses, and student portal.",
    technologies: ["React", "Bootstrap", "Node.js"],
    image: unicollege,
    link: "#"
  },
  {
    title: "Admin Dashboard",
    description: "A fully functional admin dashboard with data visualization and user management.",
    technologies: ["React", "Redux", "Material UI"],
    image: admidash,
    link: "#"
  }
];

const Projects = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handlePlayClick = (video) => {
    setCurrentVideo(video);
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setCurrentVideo(null);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.title === "Teaching Video" ? (
              <div className="video-thumbnail" onClick={() => handlePlayClick(project.video)}>
                <img src={project.image} alt={project.title} className="project-image" />
                {!showVideo && <FaPlayCircle className="play-icon" />}
              </div>
            ) : (
              <img src={project.image} alt={project.title} className="project-image" />
            )}

            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">Technologies: {project.technologies.join(", ")}</p>

              {project.link && (
                <a href={project.link} className="project-link">View Project</a>
              )}

              {project.title === "Teaching Video" && (
                <button className="watch-me-teaching-btn" onClick={() => handlePlayClick(project.video)}>
                  Watch Me Teaching
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showVideo && (
        <div className="video-popup">
          <div className="video-popup-content">
            <FaTimes className="close-icon" onClick={handleCloseVideo} />
            <video controls autoPlay className="video-iframe">
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
