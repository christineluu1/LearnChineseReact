import React from 'react';
import './Course3.css';

import { cat, dog, bird, fish } from "../../assets";

const Course3 = () => {
  return (
    <div className="vocabulary-course-container">
      <h1 className="vocabulary-course-title">Vocabulary Course: Animals</h1>
      <div className="vocabulary-course-lesson">
        <h2 className="vocabulary-course-lesson-title">Lesson 1: Common Animals</h2>
        <div className="vocabulary-course-words">
          <div className="vocabulary-course-word">
            <img src={cat} alt="cat" className="vocabulary-course-word-image" />
            <p className="vocabulary-course-word-text">Cat</p>
            <p className="vocabulary-course-word-text-chinese">猫 (māo)</p>
          </div>
          <div className="vocabulary-course-word">
            <img src={dog} alt="dog" className="vocabulary-course-word-image" />
            <p className="vocabulary-course-word-text">Dog</p>
            <p className="vocabulary-course-word-text-chinese">狗 (gǒu)</p>
          
          </div>
          <div className="vocabulary-course-word">
            <img src={bird} alt="bird" className="vocabulary-course-word-image" />
            <p className="vocabulary-course-word-text">Bird</p>
            <p className="vocabulary-course-word-text-chinese">鸟 (niǎo)</p>
          
          </div>
          <div className="vocabulary-course-word">
            <img src={fish} alt="fish" className="vocabulary-course-word-image" />
            <p className="vocabulary-course-word-text">Fish</p>
            <p className="vocabulary-course-word-text-chinese">鱼 (yú)</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course3;
