import React, { useState } from 'react'
import questions from './data';
const QuizApp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState("");
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
  
    const currentQuestion = questions[currentIndex];
  
    const handleOptionClick = (option) => {
      setSelected(option);
    };
  
    const handleNext = () => {
      if (selected === currentQuestion.answer) {
        setScore(score + 1);
      }
  
      setSelected("");
  
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsFinished(true);
      }
    };
  
    const handleRestart = () => {
      setCurrentIndex(0);
      setSelected("");
      setScore(0);
      setIsFinished(false);
    };
  
    return (
      <div className="quiz-container">
        <h1>📝 React Quiz App</h1>
        {isFinished ? (
          <div className="result">
            <h2>Your Score: {score} / {questions.length}</h2>
            <button onClick={handleRestart}>Restart Quiz</button>
          </div>
        ) : (
          <div className="question-card">
            <h2>Q{currentIndex + 1}. {currentQuestion.question}</h2>
            <div className="options">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`option-btn ${selected === option ? "selected" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button onClick={handleNext} disabled={!selected}>
              {currentIndex + 1 === questions.length ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </div>
    );
}

export default QuizApp