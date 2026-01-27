import React from 'react';
import { ExternalLink } from 'lucide-react';

interface WorkItem {
    title: string;
    company: string;
    location?: string;
    year: string;
    current?: boolean;
    description: string;
    link?: string;
}

const Work: React.FC = () => {
    const workItems: WorkItem[] = [
        {
            title: 'Associate Software Developer',
            company: 'Nestorbird',
            location: 'Mohali, India',
            year: 'August 2025 - Present',
            current: true,
            description:
                'Developing production-ready modules in Frappe/ERPNext with custom DocTypes, workflows, and background jobs. Integrated third-party services (UPS, Brevo, Twilio) and built Laravel-based CRUD modules following clean MVC architecture. Implemented RBAC and optimized SQL queries for improved performance.',
            link: undefined,
        },
        {
            title: 'Campus Ambassador',
            company: 'GeeksforGeeks',
            location: undefined,
            year: '2024 - 2025',
            current: false,
            description:
                'Organized coding contests and webinars, mentoring peers in DSA preparation and building a strong campus coding community through discussions and daily coding practices.',
            link: undefined,
        },
    ];

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                Work
                <span className="text-sm text-gray-500 font-normal">Here is my work experience</span>
            </h2>

            <div className="space-y-8">
                {workItems.map((item, index) => (
                    <div key={index} className="border-l border-gray-700 pl-6">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="text-sm text-gray-300">{item.company} {item.location && `• ${item.location}`}</p>
                                {item.current && <span className="text-xs text-green-400">Currently Working</span>}
                            </div>
                            <span className="text-sm text-gray-400">{item.year}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mt-2">{item.description}</p>
                        {item.link && (
                            <a
                                href={item.link}
                                className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                            >
                                View Work
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <p className="text-gray-500 text-sm mt-8">Here are some of my Projects</p>
        </section>
    );
};

export default Work;