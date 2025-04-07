import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>David Odumgya</h3>
          <p>
            Web Developer | Software Developer | Graphic Designer | French
            Teacher
          </p>
          <p>
            Email:{" "}
            <a href="mailto:davidodumgya68@gmail.com">
              davidodumgya68@gmail.com
            </a>
          </p>
          <p>
            Phone/WhatsApp: <a href="tel:+233 24 055 0824">+233 24 055 0824</a>
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>{" "}
            {/* Use Link for internal routes */}
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/skill">My Skills</Link>
            </li>
            <li>
              <Link to="/project">My Projects</Link>
            </li>
            <li>
              <Link to="/cv">Current CV</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61568233574200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/david-odumgya-6682b2359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 David Odumgya. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
