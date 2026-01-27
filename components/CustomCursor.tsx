'use client';

import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );
        };

        window.addEventListener('mousemove', updateCursor);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    transition: 'width 0.2s, height 0.2s',
                    width: isPointer ? '32px' : '16px',
                    height: isPointer ? '32px' : '16px',
                }}
            />
            {/* Trailing circle */}
            <div
                className="fixed w-8 h-8 rounded-full border-2 border-pink-500 pointer-events-none z-50"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.15s ease-out',
                    opacity: 0.5,
                }}
            />
        </>
    );
};

export default CustomCursor;
