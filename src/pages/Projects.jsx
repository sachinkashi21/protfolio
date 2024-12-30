import React, { useState } from 'react';

const projects = [
  {
    title: "Quick-Ping",
    description: "A real-time chat application enabling instant messaging, private chat rooms, and secure user authentication.",
    technologies: ["Express.js", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/sachinkashi21/QuickPing", 
    liveUrl: "https://quickping.onrender.com",
    features: ["Real-time messaging", "Private chat rooms", "User authentication"],
    date: "December 2024",
  },
  {
    title: "Wanderlust",
    description: "A platform inspired by Airbnb for listing and booking accommodations with responsive design.",
    technologies: ["MERN", "Bootstrap", "Mapbox", "Passport"],
    githubUrl: "https://github.com/sachinkashi21/airbnbClone", 
    liveUrl: "https://airbnb-clone-demo.com", 
    features: ["Dynamic listings", "Map functionality", "Responsive design"],
    date: "November 2023",
  },
  {
    title: "Event Management Tool",
    description: "An application to create and manage college events, track event calendars, and handle registrations.",
    technologies: ["EJS", "Express.js", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/sachinkashi21/bnbuild", 
    features: ["Event creation", "Calendar management", "Registration tracking"],
    date: "December 2023",
  },
  {
    title: "Saviour",
    description: "A calamity indicator to log previous incidents, provide precautionary measures, and issue notifications.",
    technologies: ["MERN", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/anonim1729/codefury7", 
    liveUrl: "https://codefury7-1.onrender.com/",
    features: ["Precautionary measures", "Incident logging", "User notifications"],
    date: "August 2024",
  },
  {
    title: "Academic Tracker",
    description: "An application to track student progress, including attendance, test scores, and expenses.",
    technologies: ["EJS", "Express.js", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/sachinkashi21/Academic-Tracker", 
    features: ["Attendance tracking", "Test score management", "Expense tracking"],
    date: "June 2024",
  },
  {
    title: "Inventory Management System",
    description: "A tool for farmers to manage inventories, track resources, and monitor stock levels effectively.",
    technologies: ["EJS", "Express.js", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/anonim1729/BNB",
    features: ["Inventory tracking", "Resource management", "Stock level monitoring"],
    date: "February 2024",
  },
  {
    title: "Snake Game",
    description: "A classic snake game with modern styling and responsive controls, built for fun and learning.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/sachinkashi21/snake_game", 
    liveUrl: "https://sachinkashi21.github.io/snake_game/",
    features: ["Responsive controls", "Score tracking", "Classic game mechanics"],
    date: "April 2023",
  },
  {
    title: "Sudoku",
    description: "A web-based Sudoku game allowing users to play and solve puzzles with a clean interface.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/sachinkashi21/sudoku", 
    features: ["Puzzle solving", "Responsive design", "computer generated puzzles"],
    date: "December 2023",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A simple Tic-Tac-Toe game with interactive gameplay and responsive design.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/sachinkashi21/TicTacToe", 
    liveUrl: "https://sachinkashi21.github.io/TicTacToe/",
    features: ["Interactive gameplay", "Responsive design", "Player score tracking"],
    date: "November 2023",
  },
  {
    title: "Todo List",
    description: "A to-do list application to manage tasks with options for adding, editing, and deleting entries.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/sachinkashi21/TodoList", 
    liveUrl: "https://sachinkashi21.github.io/TodoList/",
    features: ["Task management", "Edit/delete functionality", "Locally storing data"],
    date: "October 2023",
  },
  {
    title: "Spotify Clone",
    description: "A frontend clone of Spotify showcasing a responsive design and styled with vanilla CSS.",
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/sachinkashi21/Spotify_clone", 
    liveUrl: "https://sachinkashi21.github.io/Spotify_clone/",
    features: ["Responsive design", "Music-themed UI", "Simple navigation"],
    date: "October 2023",
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
