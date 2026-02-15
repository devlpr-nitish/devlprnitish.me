import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface SocialLinkProps {
    icon?: LucideIcon;
    label: string;
    href: string;
    iconColor?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, label, href, iconColor = 'text-gray-300' }) => {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-gray-300 text-sm transition-all border border-gray-700 hover:border-pink-500"
            style={{ backgroundColor: 'oklch(14.1% 0.005 285.823)' }}
        >
            {Icon && <Icon className={`w-4 h-4 ${iconColor}`} />}
            {label}
        </a>
    );
};

export default SocialLink;