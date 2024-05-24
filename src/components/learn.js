import React from "react";
import { Link } from "react-router-dom";
import NavBar2 from "./NavBar2.js";
import "../css/learn.css"; // Importing the new CSS file

const Learn = () => {
  // Get the username from localStorage
  const username = localStorage.getItem("username");

  return (
    <div className="learn-container">
      <NavBar2 />
      <h1>Learn Chess</h1>
      <div className="module beginner">
        <h2>Beginner</h2>
        <div className="module-section">
          <h3>Chess Board</h3>
          <p>
            Learn about the chessboard layout and how pieces are positioned.
          </p>
          <Link to={`/profile2/${username}/learn/beginner`}>
            <button className="learn-button">Learn Now</button>
          </Link>
        </div>
        {/* Add similar sections for other beginner modules */}
      </div>

      <div className="module intermediate">
        <h2>Intermediate</h2>
        <div className="module-section">
          <h3>Chess Tactics</h3>
          <p>
            Introduction to chess tactics and strategies for intermediate
            players.
          </p>
          <Link to={`/profile2/${username}/learn/intermediate`}>
            <button className="learn-button">Learn Now</button>
          </Link>
        </div>
        {/* Add similar sections for other intermediate modules */}
      </div>
    </div>
  );
};

export default Learn;
