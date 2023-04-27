// Lessons.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Lessons.css'; // Import the CSS file

const Lessons = () => {
  return (
    <div className="lessons-container">
      <h1 className="lessons-title">Courses section</h1>
      <p className="lessons-description">
        Welcome to the HSK 1 Exam Preparation section! Here, you can find
        lessons to help you prepare for the HSK 1 exam, which
        includes vocabulary, grammar, and listening skills.
      </p>
      <div className="lessons-button-group">
        <div className="lessons-button-group">
          <h2 className="lessons-button-group-title">Courses</h2>
          <Link to="/lessons/course1" className="lessons-button">
            Course 1: Vocabulary
          </Link>
          <Link to="/lessons/course2" className="lessons-button">
            Course 2: Grammar
          </Link>
          <Link to="/lessons/course3" className="lessons-button">
            Course 3: Images
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Lessons;
