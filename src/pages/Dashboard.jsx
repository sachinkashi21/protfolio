import React from 'react';
import { FaGithub, FaLinkedin,  FaCode, FaTwitter, FaFacebook, FaInstagram, FaBirthdayCake } from 'react-icons/fa';

import Timeline from '../components/Timeline';
import { VerticalTimeline } from 'react-vertical-timeline-component';

const MyTimeline = () => {
    const timeline = [
      {
        date: 'Feb 2004',
        title: 'Born in Hubli, Karnataka',
        icon: <FaBirthdayCake />,
        description: 'Completed early education in native and later moved to Bengaluru along with family.',
      },
      {
        date: '2020',
        title: 'Joined Engineering at UVCE',
        icon: <FaBirthdayCake />,
        description: 'Started my journey as a Computer Science undergraduate.',
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-8">My Timeline</h1>
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
        <div style={{ height: '150px' }}></div>
      </div>
    );
  };

const MyProfiles=()=>{
    const profiles = [
        { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/sachinkashi21/', details: '15+ Repositories, 50+ commits' },
        { name: 'LeetCode', icon: <FaCode />, link: 'https://leetcode.com/u/sachin_kashi/', details: '300+ Problems, 1700+ rating' },
        { name: 'GeeksforGeeks', icon: <FaCode />, link: 'https://www.geeksforgeeks.org/user/sachinkashi21/', details: '150+ Problems, 3 star' },
        { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/sachinkashi21/', details: '350+ connections' },
        { name: 'Facebook', icon: <FaFacebook />, link: 'https://www.facebook.com/profile.php?id=100089340547757', details:  '-'},
        { name: 'Twitter', icon: <FaTwitter />, link: 'https://x.com/Sachin_kashi_21', details: '-' },
        { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/kashi_sachin_a/', details: '-'},
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
    )
}

const Dashboard = () => {
    

    return (<>
        <MyTimeline/>    
        <MyProfiles/>
    </>
    );
};

export default Dashboard;
