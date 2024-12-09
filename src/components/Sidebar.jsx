import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaHouse, FaUserGraduate, FaDatabase } from "react-icons/fa6";
import { FaCode, FaSignInAlt, FaUser } from "react-icons/fa"

const Sidebar = ({ isDrawerOpen, closeDrawer }) => {
   const navigate = useNavigate();
   return (
      <aside onClick={closeDrawer} id="logo-sidebar" className={`fixed top-0 left-0 z-40 h-screen pt-20 transition-transform ${isDrawerOpen
            ? 'w-64 sm:translate-x-0'
            : 'w-0 sm:translate-x-0 sm:w-64'
         } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}>
         {isDrawerOpen ?
            <div className="h-full px-3 pb-4 pt-4 overflow-y-auto bg-white dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <div onClick={() => navigate("/")} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaHouse className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                     </div>
                  </li>
                  <li>
                     <div onClick={() => navigate("/dashboard")} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaUserGraduate className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <span className="flex-1 ms-3 whitespace-nowrap">About Me</span>
                     </div>
                  </li>
                  <li>
                     <div onClick={() => navigate("/project")} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaDatabase className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                     </div>
                  </li>
                  <li>
                     <div onClick={() => navigate("/skill")} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaCode className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Skills</span>
                     </div>
                  </li>
                  <li>
                     <div onClick={() => navigate("/certificate")} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaUserGraduate className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Certifications</span>
                     </div>
                  </li>
                  <li>
                     <div onClick={() => navigate("/login")} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaUser className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Login</span>
                     </div>
                  </li>
                  <li>
                     <div onClick={() => navigate("/signup")} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaSignInAlt className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Signup</span>
                     </div>
                  </li>
                  
               </ul>
            </div>
            : <></>
         }
      </aside>
   )
}

export default Sidebar