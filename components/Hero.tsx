'use client';

import React from 'react';
import { Mail, Twitter, Github, Linkedin, Download, Code2 } from 'lucide-react';
import SocialLink from './SocialLink';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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
            className="py-12 mb-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="flex items-start gap-4 mb-8" variants={itemVariants}>
                <img
                    src="/nitish-logo.png"
                    alt="Nitish"
                    className="w-16 h-16 rounded-full flex-shrink-0 object-cover border-2 border-gray-300 dark:border-gray-700"
                />
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl font-bold" style={{ fontFamily: "'Bitcount Grid Single', monospace" }}>NITISH</h1>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">@devlprnitish</p>
                </div>
            </motion.div>

            <motion.p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6" variants={itemVariants}>
                I&apos;m <span className="text-gray-900 dark:text-white font-semibold">Nitish</span>, an{' '}
                <span className="text-gray-900 dark:text-white font-semibold">Associate Software Developer</span>{' '}
                based in <span className="text-gray-900 dark:text-white font-medium">Mohali, India</span>. I build{' '}
                <span className="text-gray-900 dark:text-white font-semibold">production-ready applications</span> with modern technologies.
            </motion.p>

            <motion.div className="space-y-3 text-sm text-gray-500 dark:text-gray-400 mb-8" variants={itemVariants}>
                <p>
                    <span className="text-gray-900 dark:text-white font-semibold">What I do:</span> Developing{' '}
                    <span className="text-gray-900 dark:text-white font-medium">Frappe/ERPNext</span> modules,{' '}
                    <span className="text-gray-900 dark:text-white font-medium">Laravel</span> applications, and building{' '}
                    <span className="text-gray-900 dark:text-white font-medium">full-stack solutions</span> with React, Next.js, and modern databases.
                </p>
                <p>
                    <span className="text-gray-900 dark:text-white font-semibold">Currently:</span> Working at{' '}
                    <span className="text-gray-900 dark:text-white font-medium">Nestorbird</span>, integrating third-party services,{' '}
                    optimizing SQL queries, and implementing{' '}
                    <span className="text-gray-900 dark:text-white font-medium">role-based access control</span>.
                </p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4 mb-8" variants={itemVariants}>
                <a
                    href="https://drive.google.com/drive/folders/1IS59Ov0PV2rX3T0EYdIJDGMetXd7X_Fy?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-2 px-3 py-1 text-sm rounded-lg text-gray-800 dark:text-white transition-all hover:border-pink-500/50 hover:scale-105"
                >
                    <Download className="w-4 h-4 text-pink-500" />
                    Download CV
                </a>
                <a
                    href="mailto:devlprnitish@gmail.com"
                    className="glass flex items-center gap-2 px-3 py-1 text-sm rounded-lg text-gray-800 dark:text-white transition-all hover:border-pink-500/50 hover:scale-105"
                >
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                    Open to work for your idea
                </a>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3 mb-8" variants={itemVariants}>
                <SocialLink icon={Mail} label="Email" href="mailto:devlprnitish@gmail.com" iconColor="text-red-500" />
                <SocialLink icon={Twitter} label="Twitter" href="https://x.com/devlprnitish" iconColor="text-blue-400" />
                <SocialLink icon={Github} label="GitHub" href="https://github.com/devlpr-nitish" iconColor="text-purple-500" />
                <SocialLink icon={Code2} label="LeetCode" href="https://leetcode.com/u/devlprnitish/" iconColor="text-orange-500" />
                <SocialLink icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/devlpr-nitish/" iconColor="text-blue-500" />
            </motion.div>

            <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
        </motion.section >
    );
};

export default Hero;