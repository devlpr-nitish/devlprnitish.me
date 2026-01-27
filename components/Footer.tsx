import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-800 pt-8 mt-16 pb-12">
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-gray-500 text-sm">
                    Built with <span className="text-pink-500">♥</span> by Nitish
                </p>
                <p className="text-gray-600 text-xs">
                    © {currentYear} devlprnitish. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;