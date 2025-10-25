import React from "react";
import { motion } from "framer-motion";
import "./Achievements.css";

function Achievements() {
  const achievements = [
    "⚡ Cleared first round at Smart India Hackathon 2024 among 100 teams",
    "💻 Solved 400+ DSA problems on LeetCode",
    "🚀 Built multiple full-stack projects: WanderWise, PlanItNow, ClickStayDine, Email Notifier",
    "🏆 Completed Internship at Circle Health as a software Developer",
  ];

  return (
    <section id="achievements" className="achievements">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>
      <ul>
        {achievements.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
