import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import ImageCarousel from './ImageCarousel';
import wanderWise1 from '../assets/wanderWise1.png';
import wanderwise2 from '../assets/wanderwise2.png';
import dining1 from '../assets/dining1.png';
import dining2 from '../assets/dining2.png';
import dining3 from '../assets/dining3.png';
import planItnow1 from '../assets/planItnow1.png';
import planItnow2 from '../assets/planItnow2.png';
import planItnow3 from '../assets/planItnow3.png';
const projects = [
    {
        title: 'WanderWise (Travel Agency)',
        description: 'WanderWise is a comprehensive travel agency application that facilitates smooth trip management for both users and administrators. Users can explore and book packages, while administrators have additional control over managing package details and bookings.',
        images: [wanderWise1,wanderwise2],
        url: 'https://rajeev2004.github.io/WanderWise/', 
    },
    {
        title: 'ClickStayDine (Hotel & Restaurant booking website)',
        description: 'ClickStayDine is a restaurant and hotel booking web application that allows users to explore listings, make reservations, and manage their bookings seamlessly. The platform also provides a vendor dashboard for businesses to list and manage their hotels and restaurants.',
        images: [dining2,dining1,dining3],
        url: 'https://rajeev2004.github.io/ClickStayDine-Restaurant-and-Hotel-Booking-Website/', 
    },
    {
        title: 'PlanItNow (Event Management)',
        description: 'PlanItNow is a robust event management platform that allows users to create, manage, and join events. Whether you are an organizer looking to create an event or a user interested in joining, PlanItNow provides an intuitive interface for all.',
        images: [planItnow1,planItnow2,planItnow3],
        url: 'https://rajeev2004.github.io/PlanItNow-Event-Management/', 
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
                        <ImageCarousel images={project.images} />
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
