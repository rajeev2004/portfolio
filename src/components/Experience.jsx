import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3>
          Software Developer Intern – Circle Health, Karnataka (Bangalore)
        </h3>
        <p className="duration">May 2025 – Sep 2025</p>
        <ul>
          <li>
            Engineered a secure <strong>Video Consultation Platform</strong>{" "}
            using <strong>Agora SDK</strong>, supporting up to 3 participants
            per session (doctor, patient, support agent) with secure{" "}
            <strong>AWS S3</strong> recording storage for privacy and easy
            retrieval.
          </li>
          <li>
            Spearheaded development of an <strong>HR Dashboard</strong> using{" "}
            <strong>ReactJS</strong> and <strong>NodeJS</strong> to track health
            goals of 4,000+ employees, helping reduce sick days by{" "}
            <strong>15%</strong> through data-driven health interventions.
          </li>
          <li>
            Contributed to the <strong>Wacom Healthcare Application</strong>,
            improving performance by <strong>30%</strong> for faster load times
            and better user experience, enabling healthcare managers to
            efficiently address patient issues.
          </li>
          <li>
            Deployed and configured{" "}
            <strong>self-hosted Sentry monitoring</strong>, reducing
            average bug detection time by <strong>60%</strong> and enabling
            developers to resolve critical errors within{" "}
            <strong>2 hours</strong> using real-time alerts and detailed stack
            traces.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

export default Experience;
