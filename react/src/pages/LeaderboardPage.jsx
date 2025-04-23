import React from 'react';
import '../csspages/LeaderboardPage.css';
import Leaderboard from '../components/Leaderboard';

const LeaderboardPage = () => {
  return (
    <div className="leaderboard-page">
      <h1 className='PinkGreen'>Leaderboard Showcase</h1>
      <Leaderboard />
    </div>
  );
};

export default LeaderboardPage;