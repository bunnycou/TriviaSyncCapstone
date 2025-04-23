import React, { useState, useEffect } from 'react';

const Timer = ({ isRunning, onComplete }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning) {
      // Start the timer
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Clear the timer when the component unmounts or when `isRunning` is false
    return () => clearInterval(timer);
  }, [isRunning]);

  // Format elapsed time as mm:ss
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Call `onComplete` when the timer stops (optional)
  useEffect(() => {
    if (!isRunning && onComplete) {
      onComplete(elapsedTime);
    }
  }, [isRunning, elapsedTime, onComplete]);

  return <div className="quiz-timer">Time Elapsed: {formatTime(elapsedTime)}</div>;
};

export default Timer;