import React from 'react';
import './About.css';
import myPhoto from '../Assets/images/about-photo.png'; // Replace with your photo's path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={myPhoto} alt="My Photo" className="about-photo" />
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-intro">
          I am <strong>Odumgya David Komlan</strong>, from Dambai in the Oti Region of Ghana. I hold a degree in Computer Science and Engineering and I am a hardworking individual with a proactive, solution-oriented mindset.
        </p>
        <p className="about-intro">
          Passionate about problem-solving, I consistently seek opportunities to innovate and improve in every environment. I embrace constructive criticism as a means for personal growth and continuously strive for excellence in all my endeavors.
        </p>

        <div className="about-section">
          <h2 className="section-title">Technical & Professional Skills:</h2>
          <ul className="skills-list">
            <li><strong>Web Development</strong> – Proficient in both front-end and back-end development, specializing in creating responsive and dynamic websites and applications.</li>
            <li><strong>Software Development</strong> – Skilled in building scalable and robust software solutions tailored to client needs.</li>
            <li><strong>Database Management</strong> – Expertise in designing, managing, and optimizing relational databases to ensure efficiency and reliability.</li>
            <li><strong>IT Support</strong> – Capable of troubleshooting, maintaining, and providing technical support for hardware and software issues.</li>
            <li><strong>Graphic Design</strong> – Competent in creating visually appealing digital content, including branding, web graphics, and promotional materials.</li>
            <li><strong>Data Analysis</strong> – Proficient in analyzing large datasets to generate actionable insights for strategic decision-making.</li>
            <li><strong>Teaching (French/ICT)</strong> – Experienced in delivering engaging lessons and developing effective learning materials for students and professionals.</li>
            <li><strong>Leadership</strong> – Strong leadership abilities, guiding teams to successful project completion through collaboration and clear communication.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2 className="section-title">Contact</h2>
          <p className="contact-info">
            <strong>Phone/WhatsApp:</strong> <a href="tel:+233240550824">+233 24 055 0824</a><br />
            <strong>Email:</strong> <a href="mailto:davidodumgya68@gmail.com">davidodumgya68@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
