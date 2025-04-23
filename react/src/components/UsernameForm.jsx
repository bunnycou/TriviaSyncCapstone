import React from 'react';

const UsernameForm = ({ username, setUsername, setQuizStarted, fetchQuizData }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (username.trim()) {
          setUsername(username.trim());
          setQuizStarted(true);
          fetchQuizData();
        }
      }}
    >
      <h3 className="quiz-title">Enter Your Username</h3>
      <div className="center-quiz-username">
        <input
          type="text"
          className="username-input"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button
          type="submit"
          className="quiz-submit-button"
          disabled={!username.trim()}
        >
          Start Quiz
        </button>
      </div>
    </form>
  );
};

export default UsernameForm;