"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="w-full pt-8 mt-16 pb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="glass relative w-full rounded-xl p-6 md:p-8 mb-6 hover:border-white/20 transition-colors">
                <p className="text-center text-gray-600 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-2 font-medium leading-relaxed">
                    कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br />
                    मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
                </p>
                <p className="text-center md:text-left text-gray-500 dark:text-gray-400 text-xs tracking-wider uppercase mt-2 md:mt-0 md:absolute md:bottom-0 md:right-0 md:p-4">
                    — Shrimad Bhagavad Gita 2.47
                </p>
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Built with <span className="text-pink-500">♥</span> by Nitish
                </p>
                <p className="text-gray-500 dark:text-gray-600 text-xs">
                    © {currentYear} devlprnitish. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;