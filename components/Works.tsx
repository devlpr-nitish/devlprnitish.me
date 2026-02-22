"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface WorkItem {
    title: string;
    company: string;
    location?: string;
    year: string;
    current?: boolean;
    description: string;
    link?: string;
}

const Work: React.FC = () => {
    const workItems: WorkItem[] = [
        {
            title: 'Associate Software Developer',
            company: 'Nestorbird',
            location: 'Mohali, India',
            year: 'July 2025 - Present',
            current: true,
            description:
                'Developing production-ready modules in Frappe/ERPNext with custom DocTypes, workflows, and background jobs. Integrated third-party services (UPS, Brevo, Twilio) and built Laravel-based CRUD modules following clean MVC architecture. Implemented RBAC and optimized SQL queries for improved performance.',
            link: undefined,
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
                className="text-2xl font-bold mb-8 flex items-center gap-2"
                variants={itemVariants}
            >
                Work
                <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">Here is my work experience</span>
            </motion.h2>

            <div className="space-y-8">
                {workItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="glass rounded-xl p-5 border-l-4 border-pink-500/50"
                        variants={itemVariants}
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{item.company} {item.location && `• ${item.location}`}</p>
                                {item.current && <span className="text-xs text-green-600 dark:text-green-400">Currently Working</span>}
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.year}</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mt-2">{item.description}</p>
                        {item.link && (
                            <a
                                href={item.link}
                                className="inline-flex items-center gap-2 mt-3 text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors"
                            >
                                View Work
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>

        </motion.section>
    );
};

export default Work;