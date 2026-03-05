"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
    Filter,
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
    Code,
    ChevronDown,
    Check
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
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isTechOpen, setIsTechOpen] = useState(false);
    const categoryRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
                setIsCategoryOpen(false);
            }
            if (techRef.current && !techRef.current.contains(event.target as Node)) {
                setIsTechOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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
            tags: ['Next.js', 'Node.js', 'Express', 'GoLang', 'Tailwind CSS'],
            description: 'Platform for competitive programmers to track and compare coding profiles, solve contest-wise questions, set weekly goals, and view detailed analytics—all in a clean, structured interface.',
            image: '/codelibra.png',
            link: 'https://codelibra.vercel.app/',
            github: 'https://github.com/devlpr-nitish/code-libra',
        },
        {
            category: 'Frontend',
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

    const categories = useMemo(() => {
        return Array.from(new Set(projects.map(p => p.category).filter(Boolean))) as string[];
    }, [projects]);

    const techStacks = useMemo(() => {
        return Array.from(new Set(projects.flatMap(p => p.tags))) as string[];
    }, [projects]);

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const toggleTech = (tech: string) => {
        setSelectedTechs(prev =>
            prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
        );
    };

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchCategory = selectedCategories.length === 0 || (project.category && selectedCategories.includes(project.category));
            const matchTech = selectedTechs.length === 0 || project.tags.some(t => selectedTechs.includes(t));
            return matchCategory && matchTech;
        });
    }, [projects, selectedCategories, selectedTechs]);

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
                className="text-2xl font-bold mb-8 flex items-center gap-2"
                variants={itemVariants}
            >
                Projects
                <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">Here are some of my projects</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="mb-10 flex flex-col gap-6 glass px-3 py-2 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 relative" ref={categoryRef}>
                        <label className="text-sm font-small text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <Filter className="w-3 h-3 text-pink-500" />
                            By Category
                        </label>
                        <button
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            className="w-full flex items-center justify-between px-2 py-2 border border-gray-200 dark:border-gray-700 hover:border-pink-500/50 rounded-md text-sm font-small text-gray-700 dark:text-gray-200 transition-colors focus:outline-none"
                        >
                            <span className="truncate pr-2">
                                {selectedCategories.length === 0 ? 'All Categories' : `${selectedCategories.length} selected`}
                            </span>
                            <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isCategoryOpen && (
                            <div className="absolute top-full mt-2 w-full bg-white dark:bg-[#111118] border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/50 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="p-2 flex flex-col gap-1 max-h-60 overflow-y-auto">
                                    {categories.map(cat => (
                                        <button
                                            key={cat as string}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleCategory(cat as string);
                                            }}
                                            className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group focus:outline-none"
                                        >
                                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat as string) ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300 dark:border-gray-600 group-hover:border-gray-400 dark:group-hover:border-gray-500'}`}>
                                                {selectedCategories.includes(cat as string) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                            </div>
                                            <span className={`text-sm ${selectedCategories.includes(cat as string) ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300'}`}>
                                                {cat as string}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="flex-[2] relative" ref={techRef}>
                        <label className="text-sm font-small text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <Code2 className="w-3 h-3 text-pink-500" />
                            By Tech Stack
                        </label>
                        <button
                            onClick={() => setIsTechOpen(!isTechOpen)}
                            className="w-full flex items-center justify-between px-2 py-2 border border-gray-200 dark:border-gray-700 hover:border-pink-500/50 rounded-md text-sm font-small text-gray-700 dark:text-gray-200 transition-colors focus:outline-none"
                        >
                            <span className="truncate pr-2">
                                {selectedTechs.length === 0 ? 'All Tech Stacks' : `${selectedTechs.length} selected`}
                            </span>
                            <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${isTechOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isTechOpen && (
                            <div className="absolute top-full mt-2 w-full bg-white dark:bg-[#111118] border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/50 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="p-2 flex flex-col gap-1 max-h-60 overflow-y-auto">
                                    {techStacks.map(tech => (
                                        <button
                                            key={tech as string}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleTech(tech as string);
                                            }}
                                            className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group focus:outline-none"
                                        >
                                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedTechs.includes(tech as string) ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300 dark:border-gray-600 group-hover:border-gray-400 dark:group-hover:border-gray-500'}`}>
                                                {selectedTechs.includes(tech as string) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                            </div>
                                            <span className={`text-sm flex-1 truncate ${selectedTechs.includes(tech as string) ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300'}`}>
                                                {tech as string}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            <div className="grid gap-8 mb-12">
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12 text-gray-500 dark:text-gray-400 glass rounded-xl w-full">
                        No projects found matching the selected filters.
                    </div>
                )}
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
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
                                            <div
                                                key={tag}
                                                className="inline-flex items-center px-3 py-1 gap-1.5 text-xs font-medium border border-pink-500/20 rounded-sm cursor-default hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors text-gray-700 dark:text-gray-300"
                                            >
                                                <Icon className={`w-3.5 h-3.5 ${getIconColor(tag)}`} />
                                                <span>{tag}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )).slice(0, showAllProjects ? undefined : 2)}
            </div>

            {filteredProjects.length > 2 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAllProjects(!showAllProjects)}
                        className="px-6 py-2.5 rounded-xl border border-pink-500/30 text-pink-500 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 font-medium text-sm flex items-center gap-2"
                    >
                        {showAllProjects ? 'Show Less' : 'View More Projects'}
                    </button>
                </div>
            )}
        </motion.section>
    );
};

export default Projects;