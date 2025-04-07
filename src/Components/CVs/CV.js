import React from 'react';
import './CV.css';
import cvFile from '../Assets/documents/CV_Odumgya.pdf';

const CV = () => {
  return (
    <div className="cv-page">
      <div className="cv-container">
        <h1 className="cv-title">My Curriculum Vitae (CV)</h1>
        <iframe
          src={cvFile}
          className="cv-viewer"
          title="David's CV"
        ></iframe>
      </div>

      <a
        href={cvFile}
        download="David-Odumgya-CV.pdf"
        className="download-btn"
      >
        Download CV
      </a>
    </div>
  );
};

export default CV;
