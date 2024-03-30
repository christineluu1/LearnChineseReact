// Articles.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Articles.css'; // Import the CSS file

const Articles = () => {
  return (
    <div className="lessons-container">
      <h1 className="lessons-title">Articles section</h1>
      <p className="lessons-description">
      Welcome to the articles section, where we provide you with a curated list of articles focusing on mental health and diagnostics.
      </p>
      <div className="lessons-button-group">
        <div className="lessons-button-group">
          <h2 className="lessons-button-group-title">Mental health articles</h2>
          <Link to="/articles/course1" className="lessons-button">
            Understanding Anxiety Disorders: A Comprehensive Guide
          </Link>
          <Link to="/articles/course2" className="lessons-button">
          Breaking the Stigma: Addressing Depression in the Modern Age
          </Link>
          <Link to="/articles/course3" className="lessons-button">
            Navigating ADHD: Strategies for Success
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Articles;
