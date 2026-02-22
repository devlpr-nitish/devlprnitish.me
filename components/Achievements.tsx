"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
    const achievements = [
        {
            text: 'Achieved ',
            highlights: ['Knight rating of 1915+', ' on LeetCode, placing in the ', 'Top 4% globally'],
        },
        {
            text: 'Secured ',
            highlights: ['Global Rank 347', ' in ', 'LeetCode Weekly Contest 483'],
        },
        {
            text: 'Earned ',
            highlights: ['Excellence Certificate', ' in ', 'Data Structures and Algorithms', ' from Coding Ninjas'],
        },
        {
            text: 'Earned ',
            highlights: ['Excellence Certificate', ' in ', 'Full Stack Web Development (MERN)', ' from Coding Ninjas'],
        },
        {
            text: 'Solved over ',
            highlights: ['1300+ DSA problems', ' on LeetCode and GeeksforGeeks'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-2xl font-bold mb-8"
                variants={itemVariants}
            >
                Achievements
            </motion.h2>
            <div className="space-y-3">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start gap-3 text-sm"
                        variants={itemVariants}
                    >
                        <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-500 dark:text-gray-400">
                            {achievement.text}
                            {achievement.highlights.map((part, i) => (
                                i % 2 === 0 ? (
                                    <span key={i} className="text-gray-900 dark:text-white font-semibold">{part}</span>
                                ) : (
                                    <span key={i}>{part}</span>
                                )
                            ))}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Achievements;
