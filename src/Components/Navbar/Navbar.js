import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">I am Odumgya David </h1>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li><NavLink to="/" className="nav-item" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-item" activeClassName="active">About Me</NavLink></li>
          <li><NavLink to="/skill" className="nav-item" activeClassName="active">My Skills</NavLink></li>
          <li><NavLink to="/project" className="nav-item" activeClassName="active">My Projects</NavLink></li>
          <li><NavLink to="/cv" className="nav-item" activeClassName="active">Current CV</NavLink></li>
          <li><NavLink to="/contact" className="nav-item contact-btn" activeClassName="active">Contact Me</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
