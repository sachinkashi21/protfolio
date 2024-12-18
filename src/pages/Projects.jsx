import React, { useState } from 'react';

const projects = [
  {
    title: "Chat Application",
    description: "A real-time chat application with user authentication and private rooms.",
    technologies: ["React", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/sachinkashi21/ChatApp", 
    liveUrl: "https://chatapp-demo.com",
    features: ["Real-time messaging", "Private chat rooms", "User authentication"],
    date: "March 2023",
  },
  {
    title: "Airbnb Clone",
    description: "A clone of Airbnb's platform with booking functionalities and dynamic listings.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/sachinkashi21/airbnbClone", 
    liveUrl: "https://airbnb-clone-demo.com", 
    features: ["Dynamic listings", "Booking functionality", "Responsive design"],
    date: "June 2023",
  },
  {
    title: "Event Mangament Tool",
    description: "A clone of Airbnb's platform with booking functionalities and dynamic listings.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/sachinkashi21/airbnbClone", 
    features: ["Dynamic listings", "Booking functionality", "Responsive design"],
    date: "June 2023",
  },
  {
    title: "Calamity indicator",
    description: "A classic snake game with modern styling and responsive controls.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "", 
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "February 2023",
  },
  {
    title: "Academic Tracker",
    description: "A classic snake game with modern styling and responsive controls.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "", 
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "February 2023",
  },
  {
    title: "Inventory Management System",
    description: "A classic snake game with modern styling and responsive controls.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "", 
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "February 2023",
  },
  {
    title: "Snake game",
    description: "A classic snake game with modern styling and responsive controls.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/sachinkashi21/snake_game", 
    liveUrl: "https://sachinkashi21.github.io/snake_game/",
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "February 2023",
  },
  {
    title: "Sudoku",
    description: "A classic snake game with modern styling and responsive controls.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "", 
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "February 2023",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A classic snake game with modern styling and responsive controls.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "", 
    liveUrl: "",
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "February 2023",
  },
  {
    title: "Todo List",
    description: "A classic snake game with modern styling and responsive controls.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "", 
    liveUrl: "",
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "February 2023",
  },
  {
    title: "Spotify Clone",
    description: "A classic snake game with modern styling and responsive controls.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "", 
    liveUrl: "",
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "February 2023",
  },
];


const ProjectCard = ({ project }) => {
  return (
    <div className="m-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto mb-12 p-6 sm:p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
      { project.imageUrl && <img
        className="w-full h-48 sm:h-72 object-cover rounded-t-lg"
        src={project.imageUrl}
        alt={`${project.title} screenshot`}
      /> }

      <div className="p-4 sm:p-6 space-y-4">

        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
        

        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Technologies Used:</p>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <li
                key={idx}
                className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-3 py-1 transition-all hover:bg-blue-100 dark:hover:bg-blue-600"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>


        {project.features && (
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-5">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}


        {project.date && (
          <p className="text-gray-600 dark:text-gray-400 text-sm italic">
            {project.date}
          </p>
        )}


        <div className="mt-6 flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow sm:flex-grow-0 px-4 py-2 rounded-md bg-gray-900 text-white dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600"
            >
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow sm:flex-grow-0 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};



const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);

  const handleProjectSelection = (index) => {
    setSelectedProjectIndex(index);
  };

  const displayedProjects = selectedProjectIndex === -1 ? projects : [projects[selectedProjectIndex]];

  return (
    <div className="min-h-screen dark:bg-gray-900 py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">My Projects</h2>

      <div className="flex justify-center gap-6 mb-8">
      <div
        className="flex gap-4 overflow-x-auto whitespace-nowrap px-2 py-2"
        style={{ scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}
      >

        <button
          onClick={() => handleProjectSelection(-1)}
          className={`px-4 py-2 rounded-lg text-white font-medium ${selectedProjectIndex === -1 ? 'bg-blue-700' : 'bg-gray-500'} hover:bg-blue-800`}
        >
          All
        </button>
        {
          selectedProjectIndex==-1?
          <>
          {projects.map((project, index) => (
            <button
            key={index}
            onClick={() => handleProjectSelection(index)}
            className={`px-4 py-2 rounded-lg text-white font-medium ${selectedProjectIndex === index ? 'bg-blue-700' : 'bg-gray-500'} hover:bg-blue-800`}
            >
            {project.title}
            </button>
          ))} 
          </>
          :
          <button
            // onClick={() => handleProjectSelection(index)}
            className={`px-4 py-2 rounded-lg text-white font-medium bg-blue-700 hover:bg-blue-800`}
          >
            {projects[selectedProjectIndex].title}
          </button>
        }
      </div>
      </div>

      <div>
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
