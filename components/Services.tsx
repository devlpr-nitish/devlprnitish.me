"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Palette, Cloud } from 'lucide-react';

const Services: React.FC = () => {
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

    const servicesData = [
        {
            icon: Layout,
            title: "Full-Stack Development",
            description: "Building responsive and scalable end-to-end web applications utilizing modern frameworks like Next.js and the React ecosystem.",
            color: "text-cyan-400",
            bgHover: "group-hover:bg-cyan-500/10",
            textHover: "group-hover:text-cyan-400",
            borderHover: "hover:border-cyan-500/50"
        },
        {
            icon: Server,
            title: "Backend Engineering",
            description: "Designing secure, high-performance REST APIs and microservices using GoLang, Node.js, and robust databases like PostgreSQL and MongoDB.",
            color: "text-emerald-400",
            bgHover: "group-hover:bg-emerald-500/10",
            textHover: "group-hover:text-emerald-400",
            borderHover: "hover:border-emerald-500/50"
        },
        {
            icon: Palette,
            title: "Frontend & UI/UX",
            description: "Translating designs into pixel-perfect, accessible user interfaces with Tailwind CSS and engaging animations using Framer Motion.",
            color: "text-pink-400",
            bgHover: "group-hover:bg-pink-500/10",
            textHover: "group-hover:text-pink-400",
            borderHover: "hover:border-pink-500/50"
        },
        {
            icon: Cloud,
            title: "Cloud & DevOps",
            description: "Containerizing workflows with Docker, managing deployments on AWS/Linux, and setting up CI/CD pipelines to ensure seamless delivery.",
            color: "text-amber-400",
            bgHover: "group-hover:bg-amber-500/10",
            textHover: "group-hover:text-amber-400",
            borderHover: "hover:border-amber-500/50"
        }
    ];

    return (
        <motion.section
            className="mb-16 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-2xl font-bold mb-8 flex items-center gap-2"
                variants={itemVariants}
            >
                Services
                <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">What I can do for you</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={`glass rounded-xl p-6 ${service.borderHover} transition-all group cursor-default flex flex-col`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-lg bg-white/30 dark:bg-gray-800/50 ${service.color} transition-colors ${service.bgHover}`}>
                                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${service.textHover} transition-colors`}>
                                    {service.title}
                                </h3>
                            </div>

                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                                {service.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Services;
