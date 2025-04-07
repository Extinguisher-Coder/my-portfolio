import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../Assets/images/profile-photo.png";


const skills = [
  "Web Development",
  "Software Development",
  "Database Management",
  "Graphic Design",
  "Data Analysis",
  "Teaching (French/ICT)",
  "Leadership",
];
const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        index = (index + 1) % skills.length;
        setCurrentSkill(skills[index]);
        setFade(false);
      }, 500); // Half-second fade-out before switching
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="main-content">
        {/* Profile Image */}
        <div className="profile-img">
          <div className="img-box">
            <div className="img-item">
              <img src={profilePhoto} alt="Profile" />
            </div>
          </div>
        </div>

        {/* Profile Text */}
        <div className="profile-text">
          <h1>Welcome to My Portfolio</h1>
          <h2>
            Hello, I'm <span className="name-highlight">David Odumgya</span>
          </h2>

          {/* Animated Text with Fade Effect */}
          <p>
            <span className="specialize-text">I specialize in</span>
            <span className={`animated-skill ${fade ? "fade-out" : "fade-in"}`}>
              {currentSkill}
            </span>
          </p>

          {/* Buttons */}
          <div className="buttons">
            <button
              className="contacts-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
            <button className="cv-btn" onClick={() => navigate("/cv")}>
              Current CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61568233574200"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/in/david-odumgya-6682b2359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
