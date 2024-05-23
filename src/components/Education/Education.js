import React, { useState } from 'react';
import mePresentation from '../../assets/me.mov';
import { motion } from "framer-motion";
import TypewriterText from '../TypewriterText';
import VideoDisplay from './VideoDisplay';

export default function Education() {
  const [typeSpeed, setTypeSpeed] = useState(70);
  const [deleteSpeed, setDeleteSpeed] = useState(50);

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-2xl shadow-2xl p-4 md:p-10 space-y-4 md:space-y-0 md:space-x-6 overflow-hidden mt-8 mb-8 md:mt-16 md:mb-16 mx-4 md:mx-16"
      style={{
        width: "90vw",
        height: "auto",
        minHeight: "70vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className="flex flex-col items-center md:items-start justify-center space-y-4 md:space-y-6 w-full md:w-1/3">
        <h1 className="font-extrabold text-teal-300 leading-none transition-transform transform hover:scale-105 text-center md:text-left break-words md:break-normal text-2xl md:text-4xl lg:text-5xl">
          <TypewriterText words={['Education']} typeSpeed={70} deleteSpeed={50} />
        </h1>
        <hr className="w-full border-t-2 border-teal-300 mb-4" />
        <p className="text-gray-300 text-center md:text-left break-words md:break-normal text-sm md:text-base lg:text-lg">
          <TypewriterText 
            words={['I graduated with a degree in Computer Science from the University of Illinois at Chicago (UIC) in May 2024. During my studies, I specialized in software engineering and artificial intelligence.']} 
            typeSpeed={7} 
            deleteSpeed={deleteSpeed} 
          />
        </p>
        <p className="text-gray-300 text-center md:text-left break-words md:break-normal text-sm md:text-base lg:text-lg">
          <TypewriterText 
            words={['My coursework included data structures, algorithms, web development, and machine learning. I participated in various hackathons and coding competitions, enhancing my practical skills and problem-solving abilities.']} 
            typeSpeed={7} 
            deleteSpeed={deleteSpeed} 
          />
        </p>
        <p className="text-gray-300 text-center md:text-left break-words md:break-normal text-sm md:text-base lg:text-lg">
          <TypewriterText 
            words={['Additionally, I was involved in several student organizations, such as the Linux Users Group and ACM, where I collaborated with peers on projects and presentations.']} 
            typeSpeed={7} 
            deleteSpeed={deleteSpeed} 
          />
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 w-full md:w-2/3">
        <VideoDisplay src={mePresentation} />
      </div>
    </motion.div>
  );
}
