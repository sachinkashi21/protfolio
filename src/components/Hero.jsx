import React, { useEffect, useState } from 'react';
import photo from '../assets/Sachin3.jpeg';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate=useNavigate();
    const [text, setText] = useState('');
    const typewritingText = "Annd I am a Full Stack Web Developer";
    const speed = 100; // typing speed in milliseconds

    useEffect(() => {
        setText("");
        let index = 0;
        const typeEffect = () => {
            if (index < typewritingText.length-1) {
                setText((prev) => prev + typewritingText[index]);
                index++;
            } else {
                clearInterval(interval); // Stop the interval once text is fully typed
            }
        };
        const interval = setInterval(typeEffect, speed);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 lg:px-0 lg:py-0 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi, I am Sachin</h1>
                    <p id="typeWrite" className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {text}
                    </p>
                    <div onClick={() => navigate("/aboutme")} className="inline-flex items-center justify-center px-5 py-3 mr-3 my-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        About Me
                        &nbsp;
                        <FaArrowRight />
                    </div>
                    <div onClick={()=> window.open(import.meta.env.VITE_RESUME_LINK, "_blank")} className="inline-flex items-center justify-center px-5 py-3 mx-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Resume
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={photo} alt="mockup"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
