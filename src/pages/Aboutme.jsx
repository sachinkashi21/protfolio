import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaTwitter, FaFacebook, FaInstagram, FaBirthdayCake, FaGraduationCap, FaUserGraduate, FaGlobe, FaSchool } from 'react-icons/fa';
import Timeline from '../components/Timeline';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { FaChalkboardUser } from 'react-icons/fa6';

import { FaLightbulb, FaRocket, FaNetworkWired } from 'react-icons/fa';

import photo from "../assets/Sachin1.jpeg";

const MyTimeline = () => {
    const timeline = [
        {
            date: 'Feb 2004',
            title: 'Born in Hubli, Karnataka',
            icon: <FaBirthdayCake />,
            description: 'Completed early education and later moved to Bengaluru along with my family',
        },
        {
            date: '2008-2020',
            title: 'School',
            icon: <FaSchool />,
            description: 'Enjoyed my school days in Bengaluru. Studied at "St Johns High School", made many friends, was class representative',
        },
        {
            date: 'July 2020',
            title: 'Matriculation',
            icon: <FaGraduationCap />,
            description: 'End of school life. Secured 615/625 marks (98.4%) in SSLC state board exams and later joined PU college and made new friends there',
        },
        {
            date: 'July 2022',
            title: 'Post-Matriculation',
            icon: <FaUserGraduate />,
            description: 'Studied at "KLE PU college, Bengaluru", Science stream(PCMB). Secured 96% in board exams, KCET: 2098 rank',
        },
        {
            date: 'August 2022',
            title: 'Joined Engineering at UVCE',
            icon: <FaGlobe />,
            description: 'Currently pursuing Computer Science Engineering at UVCE, Bengaluru',
        },
        {
            date: 'July 2024 - Nov 2024',
            title: 'Part-time Teacher',
            icon: <FaChalkboardUser />,
            description: 'Worked as MERN stack teaching assistant (Remote Job) apart from college time, mentoring around 5000+ students',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold mb-4">My Journey</h1>
            <VerticalTimeline>
                {timeline.map((e, index) => (
                    <Timeline
                        key={index}
                        date={e.date}
                        title={e.title}
                        icon={e.icon}
                        description={e.description}
                    />
                ))}
            </VerticalTimeline>
            <div style={{ height: '50px' }}></div>
        </div>
    );
};

const MyProfiles = () => {
    const profiles = [
        { name: 'GitHub', icon: <FaGithub />, link: import.meta.env.VITE_GITHUB, details: '15+ Repositories, 50+ commits' },
        { name: 'LeetCode', icon: <FaCode />, link: import.meta.env.VITE_LC, details: '300+ Problems, 1700+ rating' },
        { name: 'GeeksforGeeks', icon: <FaCode />, link: import.meta.env.VITE_GFG, details: '150+ Problems, 3 star' },
        { name: 'LinkedIn', icon: <FaLinkedin />, link: import.meta.env.VITE_LINKEDIN, details: '350+ connections' },
        { name: 'Facebook', icon: <FaFacebook />, link: import.meta.env.VITE_FB, details: 'Sachin A' },
        { name: 'Twitter', icon: <FaTwitter />, link: import.meta.env.VITE_X, details: '@Sachin_kashi_21' },
        { name: 'Instagram', icon: <FaInstagram />, link: import.meta.env.VITE_IG, details: '@kashi_sachin_a' },
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
            <div style={{ height: "150px" }}> </div>
        </div>
    );
};


const InterestsAndGoals = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center py-10 mb-8">
            <h1 className="text-4xl font-bold mb-10">Interests & Future Goals</h1>
            <div className="max-w-6xl w-full px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Interests Section */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">My Interests</h2>
                    <ul className="space-y-8">
                        <li className="flex items-start">
                            <FaCode className="w-8 h-8" />&nbsp;
                            <p className="text-lg leading-relaxed">
                                Exploring and mastering full-stack web development, particularly the MERN stack, and creating user-centric applications.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <FaLightbulb className="w-8 h-8" />&nbsp;
                            <p className="text-lg leading-relaxed">
                                Learning new technologies and staying updated with trends in software engineering and web development.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <FaNetworkWired className="w-8 h-8" />&nbsp;
                            <p className="text-lg leading-relaxed">
                                Networking and collaborating with like-minded individuals in the tech community to exchange ideas and knowledge.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Future Goals Section */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">My Future Goals</h2>
                    <ul className="space-y-8">
                        <li className="flex items-start">
                            <FaRocket className="w-8 h-8" />&nbsp;
                            <p className="text-lg leading-relaxed">
                                Building innovative and impactful projects that solve real-world problems while leveraging my technical expertise.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <FaUserGraduate className="w-8 h-8" />&nbsp;
                            <p className="text-lg leading-relaxed">
                                Constantly improving my skills in data structures, algorithms, and software design to excel in competitive environments.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <FaLightbulb className="w-8 h-8" />&nbsp;
                            <p className="text-lg leading-relaxed">
                                Eventually starting my own tech startup focused on creating cutting-edge software solutions.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ height: "50px" }}> </div>
        </div>
    );
};




const Aboutme = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center py-10 mb-8">
                <h1 className="text-4xl font-bold mb-6">About Me</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full px-6 sm:px-12 lg:px-24">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-lg leading-relaxed mb-6">
                            I am a <span className="font-semibold text-teal-600 dark:text-teal-400">web developer</span> with a strong focus on the MERN stack. My expertise lies in creating interactive, user-friendly applications that combine functionality and design.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            With experience in full-stack development, I take pride in building solutions that are both efficient and visually appealing. My passion for coding drives me to stay updated with the latest technologies and continuously refine my skills.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Beyond development, I enjoy collaborating with others, sharing knowledge, and taking on challenges that push me to grow both personally and professionally.
                        </p>
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={photo}
                            alt="Sachin"
                            className="rounded-full shadow-lg w-64 h-64 md:w-72 md:h-72 border-4 border-gray-300 dark:border-gray-700"
                        />
                    </div>
                </div>
                <div style={{ height: "50px" }}> </div>
            </div>
            <MyTimeline />
            <InterestsAndGoals/>
            <MyProfiles />
        </>
    );
};

export default Aboutme;


