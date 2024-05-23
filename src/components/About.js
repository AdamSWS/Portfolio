import React from 'react';
import headshot from '../assets/as24headshot.png';
import { motion } from "framer-motion";
import TypewriterText from './TypewriterText';

export default function Hello() {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-2xl shadow-2xl p-6 md:p-16 space-y-8 md:space-y-0 md:space-x-12"
      style={{
        width: "90vw",
        height: "auto",
        minHeight: "70vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className="flex flex-col items-center md:items-start justify-center space-y-4 md:w-1/2">
        <p 
          className="font-extrabold text-teal-300 leading-none text-center md:text-left break-words md:break-normal text-4xl md:text-5xl lg:text-6xl hover:scale-105"
        >
          <TypewriterText
            words={['Welcome to My Portfolio']}
            typeSpeed={70}
            deleteSpeed={50}
          />
        </p>
        <hr className="w-full border-t-2 border-teal-300 mb-4" />
        <p className="text-center md:text-left text-gray-300 text-lg md:text-xl lg:text-2xl">
          <TypewriterText
            words={['I am Adam, a software developer raised on the Southside of Chicago. I have a keen interest in AI and data science. Explore my portfolio to see my work and learn more about my skills and experiences.']}
            typeSpeed={7}
            deleteSpeed={50}
          />        
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 md:w-1/2">
        <img 
          src={headshot} 
          alt="Adam's Headshot" 
          className="rounded-full border-4 border-teal-300 shadow-lg"
          style={{
            width: '40vw',
            height: '40vw',
            maxWidth: '450px',
            maxHeight: '450px'
          }}
        />
      </div>
    </motion.div>
  );
}