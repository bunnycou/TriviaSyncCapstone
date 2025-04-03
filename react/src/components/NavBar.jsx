import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import slogo from '../assets/TriviaSyncLogo.png';
import skyline from "../assets/ToledoSkyline.png";
import '../css/NavBar.css';


function NavBar() {
    // useEffect(() => {
    //     const navbarLinks = document.querySelectorAll('.nav-link');
    //     const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE'];
    //     navbarLinks.forEach((link, index) => {
    //         link.style.backgroundColor = colors[index % colors.length];
    //         link.style.border = '2px solid black'; // Add black borders between colors
    //     });
    // }, []);

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
                <Link to="/leaderboards" className="nav-link">Leaderboards</Link>
                <Link to="/about" className="nav-link">About</Link>                

            </div>
            <div className="navbar-image">
                <img src={skyline} alt="Toledo Skyline" />
            </div>
            <h1 className="navbar-title">TriviaSync</h1>
            
        </div>
    );
}

export default NavBar;