import { Link } from "react-router-dom";
import slogo from '../assets/TriviaSyncLogo.png';
import skyline from "../assets/ToledoSkyline.png";
import '../css/NavBar.css';


function NavBar() {

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={slogo} alt="TriviaSync Logo" />
                </Link>
            </div>

            
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/takequiz" className="nav-link">Quiz</Link>
                <Link to="/leaderboards" className="nav-link">Leaderboard</Link>
                <Link to="/about" className="nav-link">About</Link>

            </div>
            <div className="navbar-box">
            </div>
            <div className="navbar-image">
                <img src={skyline} alt="Toledo Skyline" />
            </div>
            <h1 className="navbar-title">TriviaSync</h1>
            
        </div>
    );
}

export default NavBar;