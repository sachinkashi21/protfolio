import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgNotFound from '../assets/pageNotFound.png';

const NotFound = () => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <img src={imgNotFound} alt="Page Not Found" className="mx-auto mb-6 w-1/2 md:w-1/3" />
        <button 
          onClick={() => navigate('/')} // Navigate to home page on click
          className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 transition duration-200 ease-in-out"
        >
          Back to Homepage
        </button>
      </div>
    </section>
  );
}

export default NotFound;
