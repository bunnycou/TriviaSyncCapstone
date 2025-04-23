import React from 'react';
import MiniLeaderboard from '../components/MiniLeaderboard';

import '../csspages/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className='PinkGreen'>Welcome To TriviaSync</h1>
<div class="row">
  <div class="leftcolumn">
    
    <div class="card">

      <p class="welcome-heading">Welcome to the B-02 Capstone Project!</p>
      <p>Our capstone started with the aim of creating a project that allows every member of the team to showcase the skills that they have developed throughout their time at UT. This was accomplished through a website utilizing dynamic updates hosted on a server connected to a wireless router, all fully configured by the team.</p>

      <p>Visit the Quiz tab to play our trivia game! Once complete, watch the leaderboard update immediately!</p>
      
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

export default Home;