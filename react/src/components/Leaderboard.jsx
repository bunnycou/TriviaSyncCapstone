import React, { useEffect, useState } from 'react';
import '../css/Leaderboard.css';
const ServerIP = "triviasync.com"
const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [viewMode, setViewMode] = useState('top10');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // Replace with your actual WebSocket server URL
    const socket = new WebSocket(`ws://${ServerIP}:8080`); // Update to local mock server

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data); // Expecting pre-sorted array like [{ name: "Alice", score: 150 }, ...]
      setLeaderboardData(data); // Use data as-is
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
    <div className="leaderboard-component">
      <div className="leaderboard-container">
        <div className="leaderboard-list">
          {leaderboardData.length > 0 ? (
            leaderboardData.map((player, index) => (
              <div
                key={player.username}
                className={`leaderboard-item ${index <= 2 ? 'top-three' : ''}`}
              >
                <span className="rank">
                  {index <= 2 ? (
                    <span className={`medal medal-${index}`}>
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                    </span>
                  ) : (
                    index + 1
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
    </div>
  );
};

export default Leaderboard;