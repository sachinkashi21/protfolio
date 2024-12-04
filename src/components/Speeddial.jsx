import React, { useState } from 'react';
import { FaFile } from 'react-icons/fa';

const Speeddial = () => {
  let items = [
    {
      name: "Resume",
      icon: <FaFile className="w-5 h-5" />
    },
    {
      name: "Resume",
      icon: <FaFile className="w-5 h-5" />
    },
    {
      name: "Resume",
      icon: <FaFile className="w-5 h-5" />
    }
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);  // Track hovered item index

  return (
    <div className="fixed end-6 bottom-6 group">
      {isOpen ? (
        <div className="flex flex-col items-center mb-4 space-y-2">
          {items.map((ele, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}  // Set hovered item index
              onMouseLeave={() => setHoveredIndex(null)}   // Reset hovered item index
            >
              <button
                type="button"
                className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              >
                {ele.icon}
              </button>

              {/* Display name only for the hovered element */}
              {hoveredIndex === index && (
                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-100 transition-opacity" style={{zIndex:11}}>
                  {ele.name}
                </span>
              )}
            </div>
          ))}
        </div>
      ) : null}

      <button
        type="button"
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-plus w-5 h-5 text-lg transition-transform group-hover:rotate-45"></i>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default Speeddial;
