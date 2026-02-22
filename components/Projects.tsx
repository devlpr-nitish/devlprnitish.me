"use client";

import React from 'react';
import {
    ExternalLink,
    Github,
    Code2,
    FileCode,
    FileType,
    Terminal,
    Box,
    Globe,
    Server,
    Database,
    Code
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image: string;
    category?: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            category: 'Full-Stack',
            title: 'Appointment Booking System',
            tags: ['GoLang', 'Next.js', 'PostgreSQL', 'JWT', 'REST APIs'],
            description: 'Backend system for appointment scheduling with user authentication, role-based access control (admin, service provider, user), and secure JWT-based REST APIs.',
            image: '/appointment-booking-image.png',
            link: 'https://appointment-booking-next.vercel.app/',
            github: 'https://github.com/devlpr-nitish/appointment-booking-next',
        },
        {
            category: 'Full-Stack',
            title: 'CodeLibra',
            tags: ['Next.js', 'Node.js', 'Express', 'Go', 'Tailwind CSS'],
            description: 'Platform for competitive programmers to track and compare coding profiles, solve contest-wise questions, set weekly goals, and view detailed analytics—all in a clean, structured interface.',
            image: '/codelibra.png',
            link: 'https://codelibra.vercel.app/',
            github: 'https://github.com/devlpr-nitish/code-libra',
        },
        {
            category: 'Full-Stack',
            title: 'PreExport',
            tags: ['Next.js', 'Tailwind CSS', 'Express', 'ExcelJS'],
            description: 'DSA sheet converter that transforms popular problem sheets (Striver SDE, A2Z, Blind 75, Last Moment) into Excel, Markdown, and CSV formats with smart filtering, progress tracking, custom metadata, and a clean responsive UI.',
            image: '/preexport-image.png',
            link: 'https://pre-export.vercel.app/',
            github: 'https://github.com/devlpr-nitish/PreExport',
        },
        {
            category: 'Full-Stack',
            title: 'Daily Thoughts',
            tags: ['React', 'Express', 'MongoDB', 'JWT'],
            description: 'College-exclusive platform where students share thoughts with 24-hour auto-deletion, like/dislike system, and role-based APIs for admins and users.',
            image: '/daily-thought-image.png',
            link: 'https://daily-thought-silk.vercel.app/',
            github: 'https://github.com/devlpr-nitish/DailyThought_frontend',
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
                Projects
            </motion.h2>

            <div className="grid gap-8 mb-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="glass rounded-lg overflow-hidden hover:border-pink-500/50 transition-all group cursor-pointer"
                        onClick={() => project.link && window.open(project.link, '_blank')}
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-64 md:h-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {project.category && (
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-xs text-gray-300 border border-gray-700">
                                        {project.category}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-pink-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="glass p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-pink-400 transition-colors hover:border-pink-500/50"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="View on GitHub"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.link && (
                                                <div className="glass p-2 rounded-lg text-gray-500 dark:text-gray-400 group-hover:text-pink-400 transition-colors group-hover:border-pink-500/50">
                                                    <ExternalLink className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => {
                                        // Icon mapping
                                        const getIcon = (name: string): LucideIcon => {
                                            const iconMap: Record<string, LucideIcon> = {
                                                'GoLang': Terminal,
                                                'Go': Terminal,
                                                'Next.js': Globe,
                                                'PostgreSQL': Database,
                                                'JWT': Code2,
                                                'REST APIs': Server,
                                                'React': Box,
                                                'Express': Server,
                                                'MongoDB': Database,
                                                'JavaScript': FileCode,
                                                'TypeScript': FileType,
                                            };
                                            return iconMap[name] || Code;
                                        };

                                        // Color mapping
                                        const getIconColor = (name: string): string => {
                                            const colorMap: Record<string, string> = {
                                                'GoLang': 'text-cyan-500',
                                                'Go': 'text-cyan-500',
                                                'Next.js': 'text-white',
                                                'PostgreSQL': 'text-blue-400',
                                                'JWT': 'text-orange-500',
                                                'REST APIs': 'text-green-400',
                                                'React': 'text-cyan-400',
                                                'Express': 'text-green-400',
                                                'MongoDB': 'text-green-600',
                                                'JavaScript': 'text-yellow-400',
                                                'TypeScript': 'text-blue-400',
                                            };
                                            return colorMap[name] || 'text-gray-400';
                                        };

                                        const Icon = getIcon(tag);

                                        return (
                                            <button
                                                key={tag}
                                                className="text-xs px-3 py-1 rounded-md text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-pink-500 transition-all flex items-center gap-1.5 cursor-default bg-gray-50 dark:bg-gray-900/80"
                                            >
                                                <Icon className={`w-3.5 h-3.5 ${getIconColor(tag)}`} />
                                                {tag}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;