import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiLeetcode, SiHtml5, SiCss3, SiExpress, SiPython } from 'react-icons/si';

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact />, description: "Component-based UI development" },
    { name: "JavaScript", icon: <SiJavascript />, description: "Core language of web applications" },
    { name: "HTML", icon: <SiHtml5 />, description: "Markup language for structuring content" },
    { name: "CSS", icon: <SiCss3 />, description: "Styling for a responsive and visually appealing UI" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime for server-side programming" },
    { name: "Express", icon: <SiExpress />, description: "Web framework for Node.js" },
    { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database for flexible storage" },
    { name: "MySQL", icon: <FaDatabase />, description: "Relational database for structured data" },
  ],
  DSA: [
    { name: "LeetCode", icon: <SiLeetcode />, description: "Platform for honing problem-solving skills" },
    { name: "Python", icon: <SiPython />, description: "Python programming for data structures" },
    { name: "Git", icon: <FaGitAlt />, description: "Version control for collaborative development" },
  ]
};

const Skills = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">Skills</h2>

      <div className="space-y-12">
        {Object.keys(skills).map((section) => (
          <div key={section} className='m-4'>
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">{section}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {skills[section].map((skill, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl text-center"
                >
                  <div className="text-5xl text-blue-500 dark:text-blue-400 mb-4">{skill.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
