import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/start.jpg'; 
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
                    Hello! I'm Rajeev Choudhary, a passionate developer with a love for creating
                    beautiful and functional web applications. I enjoy exploring new technologies
                    and continuously improving my skills. My goal is to build applications that 
                    provide a great user experience and solve real-world problems.
                    In my free time, I love to play chess, explore new places, and learn about 
                    different cultures. I believe that learning never stops, and I am always 
                    looking for new challenges.
                </motion.p>
            </div>
            <motion.img
                src={aboutImage}
                alt="About Me"
                className="about-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            />
        </section>
    );
}
export default About;
