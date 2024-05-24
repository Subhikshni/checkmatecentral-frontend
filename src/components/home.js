import React from "react";
import "../css/home.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="home-container">
        <div className="content">
          <h2>Checkmate Central</h2>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h2>About Checkmate Central</h2>
          <p>
            "Checkmate Central is your go-to platform for mastering the art of
            chess. Whether you're a beginner or a seasoned player, we provide a
            comprehensive suite of tools and resources to elevate your game.
            From interactive tutorials and strategy guides to live game analysis
            and personalized training sessions, our platform empowers you to
            hone your skills and outsmart your opponents. Join our vibrant
            community of chess enthusiasts, participate in tournaments, and
            challenge yourself to new heights. At Checkmate Central, the pursuit
            of excellence is endless – come join us on the journey to chess
            mastery!"
          </p>
        </div>
        <div className="about-image"></div>
      </div>
      <footer className="footer">
        <div className="footer-text">
          <p>Checkmate Central by Subhikshni</p>
        </div>
        <div className="social-icons">
          <a
            className="Github_logo"
            href="https://github.com/YourGitHubUsername"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="Linkedin_logo"
            href="https://www.linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
