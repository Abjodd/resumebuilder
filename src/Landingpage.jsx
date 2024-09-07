import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landingpage.css'; // Ensure this path is correct

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/resume'); // Redirect to the resume page
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Your Resume Builder</h1>
        <p>Create a professional resume easily and quickly with our tool.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </header>
    </div>
  );
};

export default LandingPage;
