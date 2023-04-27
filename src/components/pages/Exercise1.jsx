// Exercise1.js

import React, { useState } from 'react';
import './Exercise1.css'; // Import the CSS file

const Exercise1 = () => {
  const [quizData, setQuizData] = useState([
    {
      id: 1,
      question: 'What is the meaning of 你好?',
      options: ['Hello', 'Thank you', 'Goodbye'],
      answer: 'Hello',
      selectedOption: '',
      isCorrect: null,
    },
    {
      id: 2,
      question: 'What is the meaning of 谢谢?',
      options: ['Hello', 'Thank you', 'Goodbye'],
      answer: 'Thank you',
      selectedOption: '',
      isCorrect: null,
    },
    {
      id: 3,
      question: 'What is the meaning of 再见?',
      options: ['Hello', 'Thank you', 'Goodbye'],
      answer: 'Goodbye',
      selectedOption: '',
      isCorrect: null,
    },
    // Add more questions as needed
  ]);

  const handleOptionSelect = (questionId, selectedOption) => {
    const updatedQuizData = quizData.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          selectedOption,
        };
      }
      return question;
    });

    setQuizData(updatedQuizData);
  };

  const handleQuizSubmit = () => {
    const updatedQuizData = quizData.map(question => {
      const isCorrect = question.selectedOption === question.answer;
      return {
        ...question,
        isCorrect,
      };
    });

    setQuizData(updatedQuizData);
  };

  return (
    <div className="exercise1-container">
      <h1 className="exercise1-title">Exercise 1 - Quiz</h1>
      <form className="exercise1-form">
        {quizData.map(question => (
          <div key={question.id} className="exercise1-question">
            <p className="exercise1-question-text">{question.question}</p>
            {question.options.map(option => (
              <label key={option} className="exercise1-option">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={question.selectedOption === option}
                  onChange={() => handleOptionSelect(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button
          type="button"
          className="exercise1-submit-btn"
          onClick={handleQuizSubmit}
        >
          Finish
        </button>
      </form>
      <div className="exercise1-recap">
        <h2>Quiz Recap</h2>
        {quizData.map(question => (
          <div
            key={question.id}
            className={`exercise1-recap-item ${
              question.isCorrect === null ? '' : question.isCorrect ? 'correct' : 'incorrect'
            }`}
          >
            <p>
              {question.question} - {question.isCorrect === null ? 'Not answered' : question.isCorrect ? 'Correct' : 'Incorrect'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise1;
