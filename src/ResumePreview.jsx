import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './ResumePreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ResumePreview = ({ data }) => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    html2pdf()
      .set({
        margin: [0, 0, 0, 0], // No additional margins
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // A4 format
      })
      .from(element)
      .save();
  };

  return (
    <>
      <div className="resume-preview" ref={resumeRef}>
        <header>
          <h1>{data.fullName}</h1>
          <p>{data.email} | {data.phone} | {data.address}</p>
        </header>
        <div className="page-break-space"></div>
        <section>
          <div className="page-break-space"></div>
          <h2>Professional Summary</h2>
          <p>{data.summary}</p>
        </section>
        <div className="page-break-space"></div>
        <section>
          <div className="page-break-space"></div>
          <h2>Work Experience</h2>
          <p>{data.experience}</p>
        </section>
        <div className="page-break-space"></div>
        <section>
          <div className="page-break-space"></div>
          <h2>Education</h2>
          <p>{data.education}</p>
        </section>
        <div className="page-break-space"></div>
        <section>
          <div className="page-break-space"></div>
          <h2>Skills</h2>
          <p>{data.skills}</p>
        </section>
        <div className="page-break-space"></div>
        <section>
          <div className="page-break-space"></div>
          <h2>Links</h2>
          <ul>
            {data.github && (
              <li>
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '10px' }} />GitHub
                </a>
              </li>
            )}
            {data.linkedin && (
              <li>
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '10px' }} />LinkedIn
                </a>
              </li>
            )}
            {data.instagram && (
              <li>
                <a href={data.instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '10px' }} />Instagram
                </a>
              </li>
            )}
          </ul>
        </section>
      </div>
      <div className="button">
        <button onClick={handleDownload} className="download-button">Download PDF</button>
      </div>
    </>
  );
};

export default ResumePreview;