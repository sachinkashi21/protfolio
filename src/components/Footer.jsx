import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* Logo and Name */}
                    <div onClick={() => navigate("/")} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse cursor-pointer">
                        <img src={logo} className="h-8" alt="Sachin Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sachin</span>
                    </div>
                    
                    {/* Tech Stack */}
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <span className="hover:underline me-4 md:me-6">React.js</span>
                        </li>
                        <li>
                            <span className="hover:underline me-4 md:me-6">Tailwind CSS</span>
                        </li>
                        <li>
                            <span className="hover:underline me-4 md:me-6">Axios</span>
                        </li>
                        <li>
                            <span className="hover:underline">Flowbite</span>
                        </li>
                    </ul>
                </div>
                {/* Divider */}
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                {/* Personal Statement */}
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Designed and developed by <strong>Sachin</strong> with help of ChatGPT (prompt engineering). 
                    <br />
                    Always learning, always building.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
