import React, { useState, useEffect } from 'react';
import '../css/quizzesComponent.css';
import UsernameForm from './UsernameForm';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import DetailedResults from './DetailedResults';
import Timer from './Timer';

const QuizSubmission = () => {
  const [questions, setQuestions] = useState([]);
  const [sessionId, setSessionId] = useState('');
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [username, setUsername] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const fetchQuizData = async () => {
    try {
      const response = await fetch('/questions'); 
      if (!response.ok) {
        throw new Error('Failed to fetch quiz data');
      }
      const data = await response.json();
      console.log('Fetched Data:', data);
      console.log('Questions:', data.questions);
      console.log('Session ID:', data.sessionId);
      setQuestions(data.questions); // Assuming the API returns { questions: [...] }
      setSessionId(data.sessionId); // Assuming the API returns { sessionId: '...' }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };

  const handleAnswerChange = (selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = {
      questionId: currentQuestionIndex,
      selectedAnswer: selectedOption,
    };
    setAnswers(updatedAnswers);
  };

  const handleSubmitQuiz = async () => {
    try {
      // Send user's answers to the server for scoring
      const response = await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: username, submissions: answers, sessionId: sessionId}),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quiz');
      }

      const data = await response.json();
      setScore(data.score); // Assuming the server returns { score: 0.8 }
      setCorrectAnswers(data.answers)
      setTimeElapsed(data.time)
      setIsComplete(true);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  const handleSubmit = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <UsernameForm
          username={username}
          setUsername={setUsername}
          setQuizStarted={setQuizStarted}
          fetchQuizData={fetchQuizData}
        />
      ) : questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : !isComplete ? (
      <>
        <Timer isRunning={quizStarted && !isComplete} />
        <QuizQuestion
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          questionsLength={questions.length}
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          handleSubmit={handleSubmit}
        />
      </>) : !showResults ? (
        <QuizResults
          score={score}
          answers={answers}
          time={timeElapsed}
          questions={questions}
          correctAnswers={correctAnswers}
          setShowResults={setShowResults}
        />
      ) : (
        <DetailedResults
          score={score}
          answers={answers}
          questions={questions}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  );
};

export default QuizSubmission;