import React, { useState } from 'react';
import './Exercise2.css'; // Import the exercise2.css file for styling
import Exercice22 from './Exercice22';
import Exercise23 from './Exercise23';
import Exercise24 from './Exercise24';

const Exercise2 = () => {
  const [selectedChoice, setSelectedChoice] = useState(null); // State to track the user's selected choice
  const [result, setResult] = useState(null); // State to store the result

  // Function to handle choice selection
  const selectChoice = (event) => {
    setSelectedChoice(event.target);
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
      if (choice === event.target) {
        choice.classList.add('selected');
      } else {
        choice.classList.remove('selected');
      }
    });
  }

  // Function to show result
  const showResult = () => {
    if (!selectedChoice) {
      alert('Please select an option before finishing.');
      return;
    }

    // Check if selected choice is correct
    if (selectedChoice.innerText.includes('(ping guo)' || ('mama') || ('ta'))) {
      setResult('Correct!');
    } else {
      setResult('Incorrect.');
    }
  }

  return (
      <div className="exercise-container">
        <h1 className="exercise2-title">Exercise 2 - Quiz</h1>
        <div className="sentence-container">
          {/* English sentence */}
          <p>Which one means "Apple"?</p>

          {/* Choices in Chinese */}
          <div className="choices-container">
            <div className={`choice ${selectedChoice === 'A' ? 'selected' : ''}`} onClick={selectChoice}>
              A. 苹果 (ping guo)
            </div>
            <div className={`choice ${selectedChoice === 'B' ? 'selected' : ''}`} onClick={selectChoice}>
              B. 鱼 (yu)
            </div>
            <div className={`choice ${selectedChoice === 'C' ? 'selected' : ''}`} onClick={selectChoice}>
              C. 蔬菜 (shu cai)
            </div>
            <div className={`choice ${selectedChoice === 'D' ? 'selected' : ''}`} onClick={selectChoice}>
              D. 面条 (mian tiao)
            </div>
          </div>
        </div>

        {/* Finish button */}
        <button id="finish-btn" onClick={showResult}>Finish</button>

        {/* Result container */}
        <div id="result-container" className={result === 'Correct!' ? 'correct' : ''}>
          {result}
        </div>
        
        <Exercice22 />
        <Exercise23 />
        <Exercise24 />
      </div>

    );
}

export default Exercise2;