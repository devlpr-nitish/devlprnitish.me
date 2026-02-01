import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-gray-800 pt-8 mt-16 pb-12">
            <div className="relative w-full bg-black/10 border border-white/10 rounded-lg p-6 md:p-8 mb-6 hover:border-white/20 transition-colors">
                <p className="text-center text-gray-300 text-base md:text-lg mb-4 md:mb-2 font-medium leading-relaxed">
                    कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br />
                    मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
                </p>
                <p className="text-center md:text-left text-gray-500 text-xs tracking-wider uppercase mt-2 md:mt-0 md:absolute md:bottom-0 md:right-0 md:p-4">
                    — Shrimad Bhagavad Gita 2.47
                </p>
            </div>

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