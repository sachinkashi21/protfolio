import React from 'react';
import { FaFile } from 'react-icons/fa';


const Speeddial = () => {
    let items = [
        {
            name: "resume",
            icon: <FaFile className="w-5 h-5" />
        },
        {

        }
    ]
    return (
        <div data-dial-init class="fixed end-6 bottom-6 group">
            <div id="speed-dial-menu-default" class="flex flex-col items-center hidden mb-4 space-y-2">
                {/* Resume Button */}
                {items.map((ele) => {
                    return (<>
                        <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                            {/* <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"/>
            </svg> */}
                            {ele.icon}
                            <span class="sr-only">{ele.name}</span>
                        </button>
                        <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {ele.name}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </>
                    )
                })}
                {/* <a
          href="/path-to-your-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-target="tooltip-resume"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:bg-gray-700 dark:text-gray-400 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          📄
          <span className="sr-only">View Resume</span>
        </a>
        
        
        <a
          href="mailto:your-email@example.com"
          data-tooltip-target="tooltip-email"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:bg-gray-700 dark:text-gray-400 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          ✉️
          <span className="sr-only">Email Me</span>
        </a>
        
        
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-target="tooltip-linkedin"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:bg-gray-700 dark:text-gray-400 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          🔗
          <span className="sr-only">LinkedIn Profile</span>
        </a>
        
        
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-target="tooltip-github"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:bg-gray-700 dark:text-gray-400 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          🐙
          <span className="sr-only">GitHub Profile</span>
        </a>
        
       
        <a
          href="https://your-portfolio-site.com"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-target="tooltip-portfolio"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:bg-gray-700 dark:text-gray-400 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          🌐
          <span className="sr-only">Portfolio Website</span>
        </a> */}
            </div>

            <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <svg className="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
                <span className="sr-only">Open actions menu</span>
            </button>
        </div>
    );
};

export default Speeddial;
