import React from 'react';
import MiniLeaderboard from '../components/MiniLeaderboard';

import '../csspages/Home.css';

function Home() {
  return (
    <div className="home-container">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Welcome To TriviaSync</h2>
      <h5></h5>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
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