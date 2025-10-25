import React from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Achievements from "./Achievements.jsx";
import Contacts from "./Contacts.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contacts />
    </div>
  );
}

export default App;
