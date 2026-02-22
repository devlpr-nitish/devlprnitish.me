import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface SocialLinkProps {
    icon?: LucideIcon;
    label: string;
    href: string;
    iconColor?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, label, href, iconColor = 'text-gray-500 dark:text-gray-300' }) => {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="glass inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-gray-600 dark:text-gray-300 text-sm transition-all hover:border-pink-500/50 hover:scale-105"
        >
            {Icon && <Icon className={`w-4 h-4 ${iconColor}`} />}
            {label}
        </a>
    );
};

export default SocialLink;