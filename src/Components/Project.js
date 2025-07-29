import React from "react";
import "../Styles/Project.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-container1">
        <div className="project-card">
          <h3>SAFAR- an AI Trip Planner</h3>
          <p>
            A responsive React Native travel app with animated destinations and
            a modern booking form.
          </p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            This portfolio – designed with custom gradients, responsive layout,
            and subtle hover effects.
          </p>
        </div>
        <div className="project-card custom-tooltip">
          <h3>Some more projects</h3>

          <p>TextUtils</p>

          <p>Rock-Paper-Scissors Game</p>

          <p>Conference Ticket Generator</p>
        </div>
      </div>

      {/* Full-width project section */}
      <div className="project-card-full">
        <h3>Mini Projects</h3>
        <p>
          <h6 className="heading">Pac-Man Game</h6> – A fun Pac-Man clone built
          using HTML5 Canvas and JavaScript with collision detection and smooth
          movement.
          <a
            href="https://github.com/Ritika0820/Pac-Man-Game"
            target="_blank"
            className="project-link"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </p>
        <p>
          <h6 className="heading">Tic-Tac-Toe Game</h6> – A classic two-player
          Tic Tac Toe game built with React and JavaScript, featuring move
          tracking, win/draw detection, and a responsive UI.
          <a
            href="https://github.com/Ritika0820/Tic-Tac-Toe-Game"
            target="_blank"
            className="project-link"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </p>
        <p>
          <h6 className="heading">Weather App</h6> – A simple weather app that
          fetches real-time data using the OpenWeather API, allowing users to
          check weather by city name.
          <a
            href="https://github.com/Ritika0820/Weather-App"
            target="_blank"
            className="project-link"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
