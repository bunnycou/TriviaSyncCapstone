import React, { useEffect, useState } from 'react';
import '../css/Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [viewMode, setViewMode] = useState('top10');
  const [searchInput, setSearchInput] = useState('');

  // useEffect(() => {
  //   if (!searchInput) {
  //     fetchLeaderboardData(viewMode);
  //   }
  // }, [viewMode]);

  useEffect(() => {
    // Replace with your actual WebSocket server URL
    const socket = new WebSocket('ws://localhost:8080'); // Update to local mock server

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data); // Expecting pre-sorted array like [{ username: "Alice", score: 150 }, ...]
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
                key={index}
                className={`leaderboard-item ${index <= 2 ? 'top-three' : ''}`}
              >
                <span className="rank">
                  {index <= 2 ? (
                    <span className={`medal medal-${index}`}>
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
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
            <p className="no-players">No players found.</p>
          )}
        </div>
      </div>
    </div>
  );
};



// const Leaderboard = () => {
//   const [leaderboardData, setLeaderboardData] = useState([]);
//   const [viewMode, setViewMode] = useState('top10');
//   const [searchInput, setSearchInput] = useState('');

//   // Mock data for testing
//   const mockData = [
//     { name: "Alice", score: 150, originalRank: 1 },
//     { name: "Bob", score: 120, originalRank: 2 },
//     { name: "Charlie", score: 100, originalRank: 3 },
//     { name: "Dave", score: 80, originalRank: 4 },
//     { name: "Eve", score: 70, originalRank: 5 },
//     { name: "Frank", score: 60, originalRank: 6 },
//     { name: "Grace", score: 50, originalRank: 7 },
//     { name: "Hank", score: 40, originalRank: 8 },
//     { name: "Ivy", score: 30, originalRank: 9 },
//     { name: "Jack", score: 20, originalRank: 10 },
//   ];

//   useEffect(() => {
//     // Populate leaderboard with mock data on initial load
//     if (!searchInput) {
//       fetchLeaderboardData(viewMode);
//     }
//   }, [viewMode]);

//   const fetchLeaderboardData = async (mode) => {
//     try {
//       const limit = mode === 'top10' ? 10 : mode === 'top100' ? 100 : 500;
//       // Simulate API call with mock data
//       const data = mockData.slice(0, limit);
//       setLeaderboardData(data);
//     } catch (error) {
//       console.error('Error fetching leaderboard:', error);
//       setLeaderboardData([]); // Clear leaderboard on error
//     }
//   };

//   const handleSearch = async () => {
//     if (searchInput) {
//       try {
//         // Simulate search functionality with mock data
//         const filtered = mockData.filter(player =>
//           player.name.toLowerCase().includes(searchInput.toLowerCase())
//         );
//         setLeaderboardData(filtered.length ? filtered : []);
//       } catch (error) {
//         console.error('Error searching player:', error);
//         setLeaderboardData([]);
//       }
//     } else {
//       fetchLeaderboardData(viewMode);
//     }
//   };

//   return (
//     <div className="leaderboard-component">
//       <div className="leaderboard-container">
//         <div className="leaderboard-controls">
//           <button
//             className={`view-btn ${viewMode === 'top10' ? 'active' : ''}`}
//             onClick={() => setViewMode('top10')}
//           >
//             Top 10
//           </button>
//           <button
//             className={`view-btn ${viewMode === 'top100' ? 'active' : ''}`}
//             onClick={() => setViewMode('top100')}
//           >
//             Top 100
//           </button>
//           <button
//             className={`view-btn ${viewMode === 'top500' ? 'active' : ''}`}
//             onClick={() => setViewMode('top500')}
//           >
//             Top 500
//           </button>
//           <input
//             type="text"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search Player"
//             className="search-input"
//           />
//           <button onClick={handleSearch} className="search-btn">Search</button>
//         </div>

//         <div className="leaderboard-list">
//           {leaderboardData.length > 0 ? (
//             leaderboardData.map((player) => (
//               <div
//                 key={player.name}
//                 className={`leaderboard-item ${index <= 3 ? 'top-three' : ''}`}
//               >
//                 <span className="rank">
//                   {index <= 3 ? (
//                     <span className={`medal medal-${index}`}>
//                       {index === 1 ? '🥇' : index === 2 ? '🥈' : '🥉'}
//                     </span>
//                   ) : (
//                     index
//                   )}
//                 </span>
//                 <span className="name">{player.name}</span>
//                 <span className="score">{player.score}</span>
//               </div>
//             ))
//           ) : (
//             <p className="no-players">No players found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Leaderboard; 