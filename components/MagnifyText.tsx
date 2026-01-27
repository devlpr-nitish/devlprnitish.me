'use client';

import React, { ReactNode } from 'react';

interface MagnifyTextProps {
    children: ReactNode;
    className?: string;
}

const MagnifyText: React.FC<MagnifyTextProps> = ({ children, className = '' }) => {
    if (typeof children !== 'string') {
        return <>{children}</>;
    }

    const words = children.split(' ');

    return (
        <span className={className}>
            {words.map((word, index) => (
                <React.Fragment key={index}>
                    <span className="magnify-text inline-block cursor-pointer">
                        {word}
                    </span>
                    {index < words.length - 1 && ' '}
                </React.Fragment>
            ))}
        </span>
    );
};

export default MagnifyText;
