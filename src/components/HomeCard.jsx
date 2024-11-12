import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCard = ({ title, text, redirectUrl }) => {
  const navigate=useNavigate();
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      <div onClick={()=>navigate(redirectUrl)}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </div>
      <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{text}</p>
      <div
        onClick={()=>navigate(redirectUrl)} 
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
      >
        Check Out
        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </div>
    </div>
  );
}

export default HomeCard;
