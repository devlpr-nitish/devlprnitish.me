"use client";

import React from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface WorkItem {
    title: string;
    company: string;
    location?: string;
    year: string;
    current?: boolean;
    description: string;
    link?: string;
    projects?: { name: string; techStack?: string[]; description?: string; }[];
}

const Work: React.FC = () => {
    const workItems: WorkItem[] = [
        {
            title: 'Associate Software Developer',
            company: 'Nestorbird',
            location: 'Mohali, India',
            year: 'Nov 2025 - Present',
            current: true,
            description:
                'Developing production-ready modules in Frappe/ERPNext with custom DocTypes, workflows, and background jobs. Integrated third-party services (UPS, Brevo, Twilio) and built Laravel-based CRUD modules following clean MVC architecture. Implemented RBAC and optimized SQL queries for improved performance.',
            link: undefined,
            projects: [
                { name: 'Swanity Healthcare', techStack: ['Frappe/ERPNext', 'Python', 'JavaScript', 'React', 'TailwindCSS'], description: 'A healthcare management system with patient and appointment modules. OPD/IPD, Billing, Pharmacy, Lab, and Inventory Management.' },
                { name: 'PLC-ToolBox', techStack: ['Frappe/ERPNext', 'Python', 'JavaScript', 'React', 'TailwindCSS'], description: 'PLC Toolbox Supply is a distributor of new and used industrial automation, PLC’s, and networking equipment.' },
                { name: 'Samasta Foods', techStack: ['Frappe/ERPNext', 'Python', 'JavaScript'], description: 'Company Selling Food seedsCertified organic food manufacturing, including private labelling for spices, pulses, and superfoods. ' },
            ],
        },
        {
            title: 'Software Developer Intern',
            company: 'Nestorbird',
            location: 'Mohali, India',
            year: 'July 2025 - Oct 2025',
            current: false,
            description:
                'Assisted in the development of production-ready modules in Frappe/ERPNext, focusing on custom DocTypes and workflows. Contributed to integrating third-party services and building Laravel-based CRUD modules, gaining experience in clean MVC architecture and SQL query optimization.',
            link: undefined,
            projects: [
                { name: 'Ellerston', techStack: ['Laravel', 'PHP', 'React', 'GSAP'], description: 'A Golf Course Management System.' },
                { name: 'NannyGranny', techStack: ['Laravel', 'PHP', 'VueJs', 'SQL'], description: 'A platform connecting caregivers with families, focusing on user authentication, subscription plans.' },
                { name: 'Vitrum Shades', techStack: ['Frappe/ERPNext', 'Python', 'JavaScript', 'React', 'TailwindCSS'], description: 'A manufacturing and retail management system, managing product catalogs.' },
            ],
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

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-pink-500/20 dark:bg-pink-500/10 rounded-full" />

                <div className="space-y-8">
                    {workItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-12"
                            variants={itemVariants}
                        >
                            {/* Dot on the timeline */}
                            <div className="absolute left-[7px] top-6 w-[18px] h-[18px] rounded-full border-[3px] border-white dark:border-gray-900 shadow-sm z-10"
                                style={{ backgroundColor: item.current ? '#ec4899' : '#fbcfe8' }}
                            />

                            {/* Content Card */}
                            <div className="glass rounded-xl p-5 border-l-4 border-pink-500/50 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                                    <div className="mb-2 sm:mb-0">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.company} {item.location && `• ${item.location}`}</p>
                                        {item.current && <span className="inline-flex items-center gap-2 mt-2 text-xs text-green-600 dark:text-green-400 font-medium bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            Currently Working</span>}
                                    </div>
                                    <span className="inline-block px-3 py-1 text-xs font-medium text-pink-600 dark:text-pink-300 bg-pink-500/10 border border-pink-500/20 rounded-full whitespace-nowrap self-start">
                                        {item.year}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-2">{item.description}</p>

                                <p className="text-sm text-pink-500 dark:text-pink-400 font-normal mt-4">Projects</p>
                                {item.projects && item.projects.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {item.projects.map((project, projIndex) => (
                                            <div
                                                key={projIndex}
                                                className="relative group inline-block"
                                            >
                                                <div className="inline-flex items-center px-3 py-1 gap-1 text-xs font-medium border border-pink-500/20 rounded-sm cursor-help hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors">
                                                    <span>{project.name}</span>
                                                    <span className="text-pink-500 dark:text-pink-400"><Info size={10} className="inline-block" /></span>
                                                </div>
                                                {(project.techStack || project.description) && (
                                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-[#2C2C2C] text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 border border-gray-700">
                                                        {project.description && <p className="mb-2 leading-relaxed">{project.description}</p>}
                                                        {project.techStack && project.techStack.length > 0 && (
                                                            <div className="pt-2 border-t border-gray-700">
                                                                <span className="font-semibold text-pink-400 block mb-1.5">Tech Stack:</span>
                                                                <div className="flex flex-wrap gap-1.5 mt-1">
                                                                    {project.techStack.map((tech, techIndex) => (
                                                                        <span key={techIndex} className="px-1.5 py-0.5 bg-white text-gray-900 border border-gray-600 rounded whitespace-nowrap text-[10px]">
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-900 drop-shadow"></div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {item.link && (
                                    <a
                                        href={item.link}
                                        className="inline-flex items-center gap-2 mt-4 text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 text-sm font-medium transition-colors"
                                    >
                                        View Work
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </motion.section >
    );
};

export default Work;