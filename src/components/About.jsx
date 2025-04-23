import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/myself.jpg";
import resumePDF from "../assets/RESUME.pdf";
import "./About.css";
function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="about-content">
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hello! I'm Rajeev Choudhary, a passionate developer who loves crafting
          beautiful and functional web applications. I enjoy exploring new
          technologies and constantly refining my skills. My goal is to build
          seamless digital experiences that solve real-world problems. Outside
          of tech, I enjoy playing chess, discovering new places, and learning
          about different cultures. I'm a firm believer that learning never
          stops, and I’m always up for new challenges.
        </motion.p>

        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h4>Highlights:</h4>
          <ul>
            <li>⚡ Frontend Developer using React.js</li>
            <li>🔐 Implemented secure user authentication and authorization systems.</li>
            <li>🌐 Passionate about UI/UX and performance</li>
            <li>🔧 Backend Developer with Node.js and Express.js</li>
          </ul>
        </motion.div>
        <motion.div
          className="tech-stack"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h4>Tech Stack I Work With:</h4>
          <p>🛠️ HTML, CSS, JavaScript, ReactJS, Node.js, PostgreSQL</p>
        </motion.div>
        <motion.blockquote
          className="dev-quote"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          “Code is like humor. When you have to explain it, it’s bad.” – Cory
          House
        </motion.blockquote>
      </div>
      <motion.a
        href={resumePDF}
        download="RajeevChoudhary_Resume.pdf"
        className="resume-button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Download Resume
      </motion.a>
      <motion.img
        src={aboutImage}
        alt="Rajeev Choudhary smiling"
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />
    </section>
  );
}
export default About;
