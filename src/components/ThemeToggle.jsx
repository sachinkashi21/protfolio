import React, { useState, useEffect }  from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
      const savedTheme = localStorage.getItem('darkMode') === 'true';
      setDarkMode(savedTheme);
      if (savedTheme) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
  }, []);

   const toggleDarkMode = () => {
      let newDarkMode=!darkMode;
      setDarkMode(!darkMode);
      if (!darkMode) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', newDarkMode);
   };

  return (
    <button
    onClick={toggleDarkMode}
    className="p-2 m-4 rounded bg-gray-300 dark:bg-gray-600 focus:outline-none"
 >
    {darkMode ? (
       <SunIcon className="w-6 h-6 text-yellow-500" />
    ) : (
       <MoonIcon className="w-6 h-6 text-white-200" />
    )}
 </button>
  )
}

export default ThemeToggle