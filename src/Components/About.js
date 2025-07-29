import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="detail-button">
            <div className="left-box">
              <p>
                <strong>Name:</strong> Ritika Gupta
              </p>
              <p>
                <strong>Email:</strong> rg4281074@gmail.com
              </p>
              <p>
                <strong>Location:</strong> Ludhiana, Punjab
              </p>
              <strong>Volunteer :</strong>
              <p>Event Head at Training and Placement Cell</p>
            </div>
            <div className="about-buttons">
              <a href="#contact">
                <button className="button-gradient">Contact Me</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1f2iye1-gLfO7hll3z0yveoxo1G41dfVA/view"
                download
              >
                <button className="button-outline-gradient">My Resume</button>
              </a>
            </div>
          </div>

          <div className="right-container">
            <div className="right-box">
              <p>
                A Frontend Developer and UI/UX Designer with a passion for
                building clean, responsive web experiences and intuitive user
                interfaces.
              </p>
            </div>

            <div className="research">
              <h4> My Research Work</h4>
              <p>
                Kochhar, A., Patel, S., Gupta, R., Dhaliwal, M.K., Pateriya,
                B.(2025). Land Surface Temperature Variability and Climate
                Change Assessment for Ludhiana's Tehsils using Google Earth
                Engine. Theoretical and Applied Climatology, 156, 228.
                <a href=" https://doi.org/10.1007/s00704-025-05453-8">
                  Click here
                </a>{" "}
                (Impact Factor=3.1)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
