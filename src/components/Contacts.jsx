import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contacts.css';

function Contacts() {
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

        const target = document.getElementById('contacts');
        if (target) {
            observer.observe(target);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="contacts" className="contacts">
            <motion.h2
                initial={{opacity:0,y:-50 }}
                animate={isVisible?{opacity:1,y:0}:{}}
                transition={{duration:0.5,delay:0.5}}
            >
                Get in Touch
            </motion.h2>
            <motion.div
                className="contact-container"
                initial={{opacity:0}}
                animate={isVisible?{ opacity:1}:{}}
                transition={{duration:0.5,delay:1}}
            >
                <div className="contact-item">
                    <h3>Email</h3>
                    <a href="mailto:rajeevchoudhary2425@gmail.com">rajeevchoudhary2425@gmail.com</a>
                </div>
                <div className="contact-item">
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/rajeev-choudhary-b83b36250" target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                    </a>
                </div>
                <div className="contact-item">
                    <h3>GitHub</h3>
                    <a href="https://github.com/rajeev2004" target="_blank" rel="noopener noreferrer">
                        github.com/rajeev2004
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
export default Contacts;
