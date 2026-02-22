'use client';

import { MapPin, Sun, Moon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
    const [time, setTime] = useState('');
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            setTime(`${hours}:${minutes}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.header
            className="glass sticky top-0 z-50"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">IN {time}</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"><MapPin className="w-4 h-4 text-pink-500" /> Mohali, India</div>
                    {/* {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-pink-400 hover:bg-white/20 dark:hover:bg-white/10 transition-all"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    )} */}
                </div>
            </div>
        </motion.header>
    );
};

export default Header;