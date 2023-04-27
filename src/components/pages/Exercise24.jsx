import React, { useState } from 'react';
import './Exercise2.css'; // Import the exercise2.css file for styling

const Exercise24 = () => {
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
    if (selectedChoice.innerText.includes( 'mao' )) {
      setResult('Correct!');
    } else {
      setResult('Incorrect.');
    }
  }

  return (
    <div className="exercise-container">

<div className="sentence-container">
          {/* English sentence */}
          <p>Which one means "Cat"?</p>

          {/* Choices in Chinese */}
          <div className="choices-container">
            <div className={`choice ${selectedChoice === 'A' ? 'selected' : ''}`} onClick={selectChoice}>
              A. 猫 (mao)
            </div>
            <div className={`choice ${selectedChoice === 'B' ? 'selected' : ''}`} onClick={selectChoice}>
              B. 狗 (gou)
            </div>
            <div className={`choice ${selectedChoice === 'C' ? 'selected' : ''}`} onClick={selectChoice}>
              C. 鸟 (niao)
            </div>
            <div className={`choice ${selectedChoice === 'D' ? 'selected' : ''}`} onClick={selectChoice}>
              D. 鱼 (yu)
            </div>
          </div>
        </div>

        {/* Finish button */}
        <button id="finish-btn" onClick={showResult}>Finish</button>

        {/* Result container */}
        <div id="result-container" className={result === 'Correct!' ? 'correct' : ''}>
          {result}
        </div>

    </div>
  );
}

export default Exercise24;