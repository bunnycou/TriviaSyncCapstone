import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "../css/Footer.css";

function Footer() {
    return (
        <div className='footerContainer'>
            <div className="footer">
                <div className='footer-elements'>
                    <p id='copyright'>&copy; 2025 TriviaSync.</p>
                    <div className="footer-content">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/quizhome">Quizzes</Link>
                        <Link to="/leaderboards">Leaderboards</Link>
                    </div>
                    <div className="footer-content">
                        <div className='top-go'>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                Back to Top
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;