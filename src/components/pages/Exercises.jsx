// Lessons.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Lessons.css'; // Import the CSS file

const Exercises = () => {
  return (
    <div className="lessons-container">
      <h1 className="lessons-title">Exercises section</h1>
      <p className="lessons-description">
        Welcome to the HSK 1 Exam Preparation section! Here, you can find
        exercises to help you prepare for the HSK 1 exam, which
        includes vocabulary, grammar, and listening skills.
      </p>
        <div className="lessons-button-group">
          <h2 className="lessons-button-group-title">Exercises</h2>
          <Link to="/lessons/exercise1" className="lessons-button">
            Exercise 1
          </Link>
          <Link to="/lessons/exercise2" className="lessons-button">
            Exercise 2
          </Link>
        </div>
      </div>
  );
};

export default Exercises;
