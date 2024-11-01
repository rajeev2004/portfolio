import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import notekeeperImage from '../assets/notekeeper.png';
import weatherImage from '../assets/weather2.png';
import calendarImage from '../assets/calendar.png';
const projects = [
    {
        title: 'NoteKeeper',
        description: 'The NoteKeeper app is a dynamic and user-friendly note-taking application built using ReactJS, HTML, CSS, and JavaScript. With an intuitive interface and smooth user interactions, NoteKeeper allows users to effortlessly create, view, and delete notes, making it an ideal tool for organizing thoughts, tasks, and ideas. This app features a clean, modern UI/UX, crafted with thoughtful design principles to ensure a seamless experience. Leveraging Material UI (MUI) components, NoteKeeper provides a polished aesthetic with consistent and responsive elements.',
        image: notekeeperImage,
        url: 'https://rajeev2004.github.io/noteKeeper/', 
    },
    {
        title: 'Weather App',
        description: 'The Weather App is a sleek, user-friendly application designed to provide real-time weather updates for any location. Built using HTML, CSS, and JavaScript, the app utilizes the OpenWeather API to fetch current weather data, offering users an accurate and informative experience.',
        image: weatherImage,
        url: 'https://weather-noio.onrender.com/', 
    },
    {
        title: 'Calendar',
        description: 'The Calendar App is a feature-rich, interactive application built using ReactJS, HTML, CSS, and JavaScript, designed to help users efficiently manage their schedules. With an intuitive interface, the app allows users to seamlessly add, edit, and delete events, making it a valuable tool for personal organization and time management.',
        image: calendarImage,
        url: 'https://rajeev2004.github.io/Calendar/', 
    },
];
function Projects() {
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
        const target = document.getElementById('projects');
        if (target) {
            observer.observe(target);
        }
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <section id="projects" className="projects">
            <motion.h2
                initial={{opacity:0,y:-50}}
                animate={isVisible?{opacity:1,y:0}:{}}
                transition={{duration:0.5,delay:0.5}}
            >
                My Projects
            </motion.h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{opacity:0,scale:0.8}}
                        animate={isVisible?{opacity:1,scale:1}:{}}
                        transition={{duration:0.5,delay:0.7+index*0.1}}
                    >
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="visit-site-button"
                        >
                            Visit Site
                        </a>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="github-link-container"
                initial={{opacity:0,y:20}}
                animate={isVisible?{opacity:1,y:0}:{}}
                transition={{duration:0.5,delay:1.5}}
            >
                <p>If you'd like to check out more of my projects, visit my <a href="https://github.com/rajeev2004" target="_blank" rel="noopener noreferrer" className="github-link">GitHub profile</a>.</p>
            </motion.div>
        </section>
    );
}

export default Projects;
