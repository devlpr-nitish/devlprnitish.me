"use client";

import React, { useEffect, useRef } from 'react';
import {
    Code2,
    Layers,
    Palette,
    Server,
    Database,
    Wrench,
    FileCode,
    Braces,
    FileType,
    Box,
    Layout,
    Wind,
    Figma,
    Image,
    Terminal,
    Globe,
    Code,
    Package,
    Send
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import LeetCodeHeatmap from './LeetCodeHeatmap';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    icon: LucideIcon;
}

interface SkillCategory {
    name: string;
    icon: LucideIcon;
    skills: Skill[];
}

const Skills: React.FC = () => {
    const calendarContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (calendarContainerRef.current) {
            calendarContainerRef.current.scrollLeft = calendarContainerRef.current.scrollWidth;
        }
    }, []);

    const skillCategories: SkillCategory[] = [
        {
            name: 'PROGRAMMING LANGUAGES',
            icon: Code2,
            skills: [
                { name: 'JavaScript', icon: FileCode },
                { name: 'TypeScript', icon: FileType },
                { name: 'C++', icon: Braces },
                { name: 'Java', icon: Braces },
                { name: 'Python', icon: Code },
                { name: 'PHP', icon: Code },
                { name: 'Go', icon: Terminal },
            ],
        },
        {
            name: 'FRAMEWORKS & LIBRARIES',
            icon: Layers,
            skills: [
                { name: 'React', icon: Box },
                { name: 'Next.js', icon: Globe },
                { name: 'Node.js', icon: Terminal },
                { name: 'Express.js', icon: Server },
                { name: 'Vue.js', icon: Box },
                { name: 'Laravel', icon: Code },
                { name: 'Frappe', icon: Code },
                { name: 'Tailwind CSS', icon: Wind },
                { name: 'Bootstrap', icon: Layout },
                { name: 'GSAP', icon: Code },
                { name: 'Framer Motion', icon: Code },
                { name: 'Zustand', icon: Package },
            ],
        },
        {
            name: 'DATABASES & ORM',
            icon: Database,
            skills: [
                { name: 'MySQL', icon: Database },
                { name: 'PostgreSQL', icon: Database },
                { name: 'MongoDB', icon: Database },
                { name: 'SQLite', icon: Database },
                { name: 'Prisma ORM', icon: Code },
            ],
        },
        {
            name: 'DEVOPS & TOOLS',
            icon: Wrench,
            skills: [
                { name: 'Git', icon: Code2 },
                { name: 'GitHub', icon: Code },
                { name: 'Docker', icon: Package },
                { name: 'Kubernetes', icon: Package },
                { name: 'AWS', icon: Globe },
                { name: 'CI/CD', icon: Code },
                { name: 'Linux', icon: Terminal },
                { name: 'Nginx', icon: Server },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                variants={itemVariants}
            >
                Skills
                <span className="text-sm text-gray-500 font-normal">What I work with</span>
            </motion.h2>

            <motion.div className="space-y-6" variants={itemVariants}>
                {skillCategories.map((category) => {
                    const CategoryIcon = category.icon;
                    return (
                        <div key={category.name}>
                            <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-wider flex items-center gap-2">
                                <CategoryIcon className="w-3 h-3" />
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => {
                                    const SkillIcon = skill.icon;
                                    // Assign colors to icons based on skill name
                                    const getIconColor = (name: string) => {
                                        const colorMap: Record<string, string> = {
                                            'JavaScript': 'text-yellow-400',
                                            'TypeScript': 'text-blue-400',
                                            'C++': 'text-purple-500',
                                            'Java': 'text-red-500',
                                            'Python': 'text-blue-500',
                                            'PHP': 'text-indigo-400',
                                            'Go': 'text-cyan-500',
                                            'React': 'text-cyan-400',
                                            'Next.js': 'text-gray-800 dark:text-white',
                                            'Node.js': 'text-green-500',
                                            'Express.js': 'text-green-400',
                                            'Vue.js': 'text-green-400',
                                            'Laravel': 'text-red-500',
                                            'Frappe': 'text-blue-400',
                                            'Tailwind CSS': 'text-cyan-400',
                                            'Bootstrap': 'text-purple-500',
                                            'GSAP': 'text-green-500',
                                            'Framer Motion': 'text-pink-400',
                                            'Zustand': 'text-amber-500',
                                            'MySQL': 'text-blue-500',
                                            'PostgreSQL': 'text-blue-400',
                                            'MongoDB': 'text-green-600',
                                            'SQLite': 'text-blue-300',
                                            'Prisma ORM': 'text-indigo-400',
                                            'Git': 'text-orange-500',
                                            'GitHub': 'text-white',
                                            'Docker': 'text-blue-500',
                                            'Kubernetes': 'text-blue-400',
                                            'AWS': 'text-orange-400',
                                            'CI/CD': 'text-green-400',
                                            'Linux': 'text-yellow-300',
                                            'Nginx': 'text-green-500',
                                        };
                                        return colorMap[name] || 'text-gray-400';
                                    };

                                    return (
                                        <button
                                            key={skill.name}
                                            className="glass px-3 py-1 rounded-lg text-gray-600 dark:text-gray-300 text-sm transition-all flex items-center gap-1.5 cursor-default hover:border-pink-500/50 hover:scale-105"
                                        >
                                            <SkillIcon className={`w-3.5 h-3.5 ${getIconColor(skill.name)}`} />
                                            {skill.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </motion.div>

            <motion.h2
                className="text-2xl font-bold mb-6 mt-16 flex items-center gap-2"
                variants={itemVariants}
            >
                Days I Code
                <span className="text-sm text-gray-500 font-normal">My GitHub activity</span>
            </motion.h2>

            <motion.div
                ref={calendarContainerRef}
                className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex justify-center"
                variants={itemVariants}
            >
                <div className="min-w-fit">
                    <GitHubCalendar
                        username="devlpr-nitish"
                        colorScheme="dark"
                        blockMargin={4}
                        blockSize={14}
                        fontSize={14}
                    />
                </div>
            </motion.div>

            <motion.h2
                className="text-2xl font-bold mb-6 mt-16 flex items-center gap-2"
                variants={itemVariants}
            >
                LeetCode Activity
                <span className="text-sm text-gray-500 font-normal">My Problem Solving Journey</span>
            </motion.h2>

            <motion.div
                className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex justify-center text-gray-400"
                variants={itemVariants}
            >
                <div className="min-w-fit w-full max-w-4xl">
                    <LeetCodeHeatmap />
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Skills;