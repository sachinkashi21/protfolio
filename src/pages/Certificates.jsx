import React, { useState } from 'react';
import { FaAward, FaArrowLeft } from 'react-icons/fa';
import bnb from "../assets/certificates/bnb.jpg"

const certificates = [
  {
    title: "BNB Hackathon- finalist",
    description: "Secured 2nd place at the state level and was a national finalist in the BIT N BUILD national hackathon conducted by GDSC CRCE, Mumbai",
    date: "February 2024",
    organization: "Google Developers Students Club",
    skills: ["MongoDB","ReactJS","ExpressJs","NodeJS","Gemini API"],
    imageUrl: bnb,
  },
  {
    title: "Full Stack Web Development",
    description: "A comprehensive course covering MERN stack development and deploying application",
    date: "Aug-Dec 2023",
    organization: "Apna College",
    skills: ["MongoDB","React","Express","NodeJS","Java Script","HTML","Vanilla CSS"],
    imageUrl: "https://via.placeholder.com/400x250",
  },
  {
    title: "Google Cloud-Computing foundations and GenAI",
    description: "Hands on lab with google's cloud platform, quick sessions to use GenAI APIs and build projects",
    date: "October 2023",
    organization: "Google Developers Students Club",
    skills: ["Google Cloud","GENAI","APIs"],
    imageUrl: "https://via.placeholder.com/400x250",
  },
  {
    title: "Soft Skill Development",
    description: "Session to tarin individual professionally and personally, to enhance soft skills",
    date: "January 2024",
    organization: "Quantech Origins",
    skills: ["Leadership","TeamWork","Problem Solving"],
    imageUrl: "https://via.placeholder.com/400x250",
  },
 
];

const CertificateCard = ({ certificate, onClick }) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg max-w-4xl mx-auto mb-10 p-6 hover:scale-105 transform transition-all hover:shadow-2xl">
    {/* Title and Icon */}
    <div className="flex items-center mb-4">
      <FaAward className="text-yellow-500 text-4xl mr-4" />
      <h3 onClick={onClick} className="text-3xl font-semibold text-gray-900 dark:text-white">{certificate.title}</h3>
    </div>

    {/* Certificate Details */}
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="w-full md:w-3/4 pr-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {certificate.description}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
          <strong>Issued by:</strong> {certificate.organization}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          <strong>Date:</strong> {certificate.date}
        </p>
      </div>

      {/* Image */}
      <div onClick={onClick} className="flex-shrink-0 mt-4 md:mt-0 md:w-1/4">
        <img
          src={certificate.imageUrl}
          alt={certificate.title}
          style={{height: 250, width: 400}}
          className="w-full rounded-lg border border-gray-200 dark:border-gray-600"
        />
        </div>
    </div>
  </div>
);

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="min-h-screen dark:bg-gray-900 py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">Certificates</h2>

      {/* Render each certificate */}
      {certificates.map((certificate, index) => (
        <CertificateCard
          key={index}
          certificate={certificate}
          onClick={() => setSelectedCertificate(certificate)}
        />
      ))}

      {selectedCertificate && (
        <></>
      )}
    </div>
  );
};

export default Certificates;
