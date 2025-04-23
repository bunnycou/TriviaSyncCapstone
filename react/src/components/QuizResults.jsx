import React from 'react';
import MiniLeaderboard from '../components/MiniLeaderboard';

const QuizResults = ({ score, answers, time, questions, correctAnswers, setShowResults }) => {
  return (
    <div className="quiz-results">
      <h1>Quiz Complete!</h1>
      <p>Your score: {score}</p>
      <p>
        You got {numberCorrect(answers, correctAnswers)} out of {questions.length} correct
      </p>
      <p>Your time: {formatTime(time)}</p>
      <button onClick={() => setShowResults(true)} className="quiz-submit-button">
        See Results
      </button>
      <MiniLeaderboard/>

    </div>
  );
};

function numberCorrect(answer, correctAnswers) {
  let total = 0
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].selectedAnswer == correctAnswers[i]) {
      total++
    }
  }
  return total
}

// Format elapsed time as mm:ss
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default QuizResults;