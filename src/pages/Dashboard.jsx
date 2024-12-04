import React from 'react';
import { FaGithub, FaLinkedin,  FaCode } from 'react-icons/fa';

const Dashboard = () => {
    const profiles = [
        { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/yourusername', details: '100+ Repositories' },
        { name: 'LeetCode', icon: <FaCode />, link: 'https://leetcode.com/yourusername', details: '300+ Problems Solved' },
        { name: 'GeeksforGeeks', icon: <FaCode />, link: 'https://auth.geeksforgeeks.org/user/yourusername', details: '200+ Articles' },
        { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com/in/yourusername', details: 'Professional Network' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold mb-8">My Profiles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-6 max-w-4xl">
                {profiles.map((profile, index) => (
                    <a
                        key={index}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="text-4xl text-blue-500 dark:text-yellow-400">{profile.icon}</div>
                            <div>
                                <h2 className="text-xl font-semibold">{profile.name}</h2>
                                <p className="text-gray-600 dark:text-gray-400">{profile.details}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div style={{height:"150px"}}> </div>
        </div>
    );
};

export default Dashboard;
