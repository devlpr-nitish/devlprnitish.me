'use client';

import { MapPin } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
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
        <header className="border-b border-gray-800 sticky top-0 z-50" style={{ backgroundColor: 'oklch(14.1% 0.005 285.823)' }}>
            <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <div className="text-sm text-gray-400">IN {time}</div>
                </div>
                <div className="text-sm text-gray-400 flex items-center gap-2"><MapPin className="w-4 h-4 text-pink-500" /> Mohali, India</div>
            </div>
        </header>
    );
};

export default Header;