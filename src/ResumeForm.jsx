// ResumeForm.js
import React, { useState } from 'react';
import './ResumeForm.css';

const ResumeForm = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    github: '',
    linkedin: '',
    instagram: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    onUpdate(newData); // Pass updated data to parent
    console.log("Updated Data:", newData);  // Debug statement
  };

  return (
    <div className="resume-form-container">
      <h2>Enter Your Details</h2>
      <form>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </label>
            {key === 'github' || key === 'linkedin' || key === 'instagram' ? (
              <input
                id={key}
                name={key}
                placeholder={`Enter your ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} link`}
                value={formData[key]}
                onChange={handleChange}
              />
            ) : (
              <textarea
                id={key}
                name={key}
                placeholder={`Enter your ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                value={formData[key]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default ResumeForm;