import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../csspages/quizhome.css';
import "../csspages/Home.css"; // Optional: Add styles for the card
import MiniLeaderboard from '../components/MiniLeaderboard';

function QuizHome() {
  return (

      <div className="home-container">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      
      
      <h2>General Knowledge Quiz</h2>
        <p>Test your knowledge across a variety of topics in this competetive quiz!</p>
        <Link to="/takequiz" className="quiz-link">
          Go to Quiz
        </Link>
      </div>

  </div>
  <div class="rightcolumn">
    <div class="card">
      <MiniLeaderboard/>
      
     
    </div>
  </div>
</div>
    </div>
    
  );
}

export default QuizHome;