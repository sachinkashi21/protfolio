import React from 'react';
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';

const About = () => {
  return (
    <section className="px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg mb-6">
          I am a passionate web developer with a strong focus on the MERN stack. With experience in full-stack development, I
          enjoy creating interactive, user-friendly applications. My skill set includes not only technical expertise but also a
          drive to continuously learn and adapt in the fast-paced world of web development.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto">
          <h3 className="text-xl font-semibold mb-2">My Interests</h3>
          <p>Web Development, Data Structures, and UI/UX Design.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full sm:w-auto">
          <h3 className="text-xl font-semibold mb-2">Current Focus</h3>
          <p>Building dynamic and efficient web applications with React and Node.js.</p>
        </div>
      </div>
    </section>
  );
};

const Home = () => {

  return (
    <>
      <Hero />
      <div style={{ minHeight: "100vh" }} className="py-8">
        <div className="grid grid-cols-1 bg-gray-100 dark:bg-gray-900 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HomeCard 
            text="Explore projects including a ChatApp, Airbnb clone, snake game, and more that showcase diverse functionalities and design." 
            title="Projects" 
            redirectUrl="/project" 
          />
          <HomeCard 
            text="Discover my skills in web development, data structures, algorithms, and various programming languages." 
            title="Skills" 
            redirectUrl="/skill" 
          />
          <HomeCard 
            text="Browse through certifications in development, DSA, and essential soft skills." 
            title="Achievements & Certificates" 
            redirectUrl="/certificate" 
          />
          <HomeCard 
            text="Access your personal dashboard for a curated overview and quick links to key resources." 
            title="Dashboard" 
            redirectUrl="/dashboard" 
          />
        </div>
        <hr class="border-0 h-px bg-gray-300 dark:bg-gray-900 my-4 mx-auto w-3/4" />
        <About/>
        <hr class="border-0 h-px bg-gray-100 dark:bg-gray-900 my-4 mx-auto w-3/4" />
      </div>
    </>
  );
}

export default Home;
