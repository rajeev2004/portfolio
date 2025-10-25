import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I'm <span>Rajeev Choudhary</span>
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Full Stack Developer | React • Node • PostgreSQL
      </motion.h3>
      <motion.p
        className="hero-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I build modern, scalable web applications that combine functionality and
        design.
      </motion.p>
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a href="#contacts" className="btn-outline">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
