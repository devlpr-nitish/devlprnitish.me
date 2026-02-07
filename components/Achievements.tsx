import React from 'react';
import { CheckCircle } from 'lucide-react';

const Achievements: React.FC = () => {
    const achievements = [
        {
            text: 'Achieved ',
            highlights: ['Knight rating of 1915+', ' on LeetCode, placing in the ', 'Top 4% globally'],
        },
        {
            text: 'Secured ',
            highlights: ['Global Rank 347', ' in ', 'LeetCode Weekly Contest 483'],
        },
        {
            text: 'Earned ',
            highlights: ['Excellence Certificate', ' in ', 'Data Structures and Algorithms', ' from Coding Ninjas'],
        },
        {
            text: 'Earned ',
            highlights: ['Excellence Certificate', ' in ', 'Full Stack Web Development (MERN)', ' from Coding Ninjas'],
        },
        {
            text: 'Solved over ',
            highlights: ['1300+ DSA problems', ' on LeetCode and GeeksforGeeks'],
        },
    ];

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Achievements</h2>
            <div className="space-y-3">
                {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-400">
                            {achievement.text}
                            {achievement.highlights.map((part, i) => (
                                i % 2 === 0 ? (
                                    <span key={i} className="text-white font-semibold">{part}</span>
                                ) : (
                                    <span key={i}>{part}</span>
                                )
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
