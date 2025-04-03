import React, { useEffect, useState } from 'react';
import '../css/MiniLeaderboard.css';

const MiniLeaderboard = () => {
  const [miniLeaderboardData, setMiniLeaderboardData] = useState([]);

  useEffect(() => {
    // Replace with your actual WebSocket server URL
    const socket = new WebSocket('ws://localhost:8080'); // Update to local mock server

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data); // Expecting pre-sorted array like [{ username: "Alice", score: 150 }, ...]
      let shortData = []
      for (let i = 0; i < 10; i++) {
        shortData.push(data[i])
      }
      setMiniLeaderboardData(shortData); // Use data as-is
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup: Close WebSocket on unmount
    return () => {
      socket.close();
    };
  }, []); // Runs once on mount, updates via WebSocket

  return (
    <div className="mini-leaderboard-component">
      <h3 className="mini-leaderboard-title">Top 10 Players</h3>
      <div className="mini-leaderboard-list">
        {miniLeaderboardData.length > 0 ? (
          miniLeaderboardData.map((player, index) => (
            <div
              key={index} // Using index since no unique IDs
              className={`mini-leaderboard-item ${index <= 3 ? 'top-three' : ''}`}
            >
              <span className="rank">
                {index <= 3 ? (
                  <span className={`medal medal-${index}`}>
                    {index === 1 ? '🥇' : index === 2 ? '🥈' : '🥉'}
                    </span>
                ) : (
                  index
                )}
              </span>
              <span className="name">{player.username}</span>
              <span className="score">{player.score}</span>
            </div>
          ))
        ) : (
          <p className="no-players">Connecting to live updates...</p>
        )}
      </div>
    </div>
  );
};

export default MiniLeaderboard;