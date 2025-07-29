import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contact.css";

import MagicBento from "./MagicBento.js";

const Contact = () => {
  const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "service_pfcu4jd",
  //         "template_8f109bj",
  //         form.current,
  //         "7T1RCHS45dD-R5JbL"
  //       )
  //       .then(
  //         (result) => {
  //           alert("Message sent successfully!");
  //           form.current.reset();
  //         },
  //         (error) => {
  //           alert("Failed to send message. Please try again.");
  //         }
  //       );
  //   };

  return (
    <section className="contact-section" id="contact">
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />

      {/* <h2>Contact Me</h2> */}
      <div className="contact-container">
        {/* <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="send-button">
            Send Message
          </button>
        </form> */}

        {/* <div className="contact-info">
          <h3>Reach Me At</h3>
          <p>
            <strong>Email:</strong> rg4281074@email.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/ritika-gupta-80a8a6260"
              target="_blank"
            >
              ritika-gupta
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/Ritika0820" target="_blank">
              Ritika0820
            </a>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
