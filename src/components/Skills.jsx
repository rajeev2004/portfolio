import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Skill.css';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.jpg';
import jsLogo from '../assets/js.avif';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import uiuxLogo from '../assets/uiux.jpg';
import postgresLogo from '../assets/postgres.png';
import gitLogo from '../assets/git.png';
function Skills() {
    const skills = [
        { name: 'HTML', image: htmlLogo },
        { name: 'CSS', image: cssLogo },
        { name: 'JavaScript', image: jsLogo },
        { name: 'React', image: reactLogo },
        { name: 'Node.js', image: nodeLogo },
        { name: 'UI/UX', image: uiuxLogo },
        { name: 'PostgreSQL', image: postgresLogo },
        { name: 'Git', image: gitLogo }
    ];
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, 
        });
        const target = document.getElementById('skills');
        if (target) {
            observer.observe(target); 
        }
        return () => {
            observer.disconnect(); 
        };
    }, []);
    return (
        <section id="skills" className="skills">
            <motion.h2
                initial={{opacity:0,y:-50}}
                animate={isVisible?{opacity:1,y:0}:{}}
                transition={{duration:0.5,delay:0.5}} 
            >
                My Skills
            </motion.h2>
            <div className="skills-container">
                {skills.map((skill,index)=>(
                    <motion.div
                        key={index}
                        className="skill-card"
                        initial={{opacity:0,scale:0.8}}
                        animate={isVisible?{opacity:1,scale:1}:{}}
                        transition={{duration:0.5,delay:0.7+index*0.1}}
                    >
                        <img src={skill.image} alt={`${skill.name} logo`} />
                        <h3>{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
