import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import MeImage from "../assets/me2.jpg";
import Particles from "./Particles.js";

const Hero = () => {
  const roles = ["Frontend Developer", "UI/UX Designer"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="particles-background">
        <Particles
          particleColors={["#D9D9D9", "#FFA4F4"]}
          particleCount={200}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="hero-left">
        <div className="hero-image">
          <div className="my-image-container">
            <img src={MeImage} alt="Ritika" />
          </div>
        </div>
        <div className="hero-icons">
          <a
            href="https://github.com/Ritika0820"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ritika-gupta-80a8a6260/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <h1>
          Hi, I'm <span className="gradient-name">Ritika</span>
        </h1>
        <h3 className={`rotating-text ${fade ? "fade-in" : "fade-out"}`}>
          {roles[index]}
        </h3>
        <p>
          Creative Frontend Developer crafting modern, responsive web
          experiences with a passion for clean design and code.
        </p>
        <div className="hero-buttons">
          <a href="#contact">
            <button className="outlined-button">Hire Me</button>
          </a>
          <a href="#about">
            <button className="outlined-button">View More</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
