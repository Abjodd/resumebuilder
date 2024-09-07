// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import LandingPage from './Landingpage';
import Login from './Login';
import Chatbot from './Chatbot'; // Import the Chatbot component
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={
            <div className="app-container">
              <div className="resume-form">
                <h1>ATS-Friendly Resume Builder</h1>
                <ResumeForm onUpdate={setResumeData} />
              </div>
              <div className="resume-preview-container">
                <ResumePreview data={resumeData} />
              </div>
            </div>
          } />
        </Routes>
        <Chatbot /> {/* Add the Chatbot component here */}
      </div>
    </Router>
  );
};

export default App;
