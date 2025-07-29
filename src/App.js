import React from "react";
import "./Styles/App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
// import MagicBento from "./Components/MagicBento";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      {/* <MagicBento /> */}
    </div>
  );
}

export default App;
