import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contacts.css';

function Contacts() {
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(
                'service_vw551qd',  
                'template_hf2flg8',  
                e.target,  
                'uDbmUkzUU44jkoFbM'
            );
            console.log('Email sent successfully:', result.text);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.log('Error sending email:', error.text);
            setStatus('There was an error. Please try again.');
        }
    };
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
            <motion.div
                className="contact-form-container"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
            >
                <form onSubmit={handleSubmit} className="contact-form">
                    <h3>Contact Me</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                {status && <p className="form-status">{status}</p>}
            </motion.div>
        </section>
    );
}
export default Contacts;
