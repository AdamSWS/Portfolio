import React, { useState, useEffect } from 'react';
import { FaPython, FaJs, FaLinux, FaNodeJs, FaJava, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import TechDisplay from './TechDisplay';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";

const techStack = [
    { key: 'cpp', title: "C/C++", experience: "(2-3 years)", desc: "Extensive work building console applications with C/C++.", logo: <CgCPlusPlus className="text-teal-300 mr-2 w-10 h-10" /> },
    { key: 'python', title: "Python", experience: "(2 years)", desc: "Experience building scripts using Python libraries, like Pandas, MatPlotLib, and Sklearn.", logo: <FaPython className="text-teal-300 mr-2 w-10 h-10" /> },
    { key: 'javascript', title: "JavaScript", experience: "(1-2 years)", desc: "Experience building websites using HTML, CSS, and JavaScript, along with other frameworks/tools like React and Bootstrap.", logo: <FaJs className="text-teal-300 mr-2 w-10 h-10" /> },
    { key: 'linux', title: "Linux", experience: "(1-2 years)", desc: "Proficient in Linux environment, familiar with shell scripting and Linux server management.", logo: <FaLinux className="text-teal-300 mr-2 w-10 h-10" /> },
    { key: 'nodejs', title: "Node.js", experience: "(6 months)", desc: "Experience in backend development using Node.js and Firebase.", logo: <FaNodeJs className="text-teal-300 mr-2 w-10 h-10" /> },
    { key: 'java', title: "Java", experience: "(1-2 years)", desc: "Knowledgeable in Java development, experienced in building desktop applications and understanding of OOP concepts.", logo: <FaJava className="text-teal-300 mr-2 w-10 h-10" /> }
];

export default function TechStack() {
    const [currentTab, setCurrentTab] = useState(0);
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        const intervalID = setInterval(() => {
            const i = (currentTab === techStack.length - 1) ? 0 : currentTab + 1;
            setCurrentTab(i);
        }, 3000);

        return () => clearInterval(intervalID);
    }, [currentTab]);

    const prevTab = (currentTab === 0) ? techStack.length - 1 : currentTab - 1;
    const nextTab = (currentTab === techStack.length - 1) ? 0 : currentTab + 1;

    const handlePrevClick = () => {
        setCurrentTab(prevTab);
    };

    const handleNextClick = () => {
        setCurrentTab(nextTab);
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-2xl shadow-2xl p-6 md:p-10 space-y-6 md:space-y-8"
            style={{
                width: isLargeScreen ? "80vw" : "90vw",
                height: isLargeScreen ? "80vh" : "auto",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <h2 className="font-extrabold text-teal-300 text-center text-4xl md:text-6xl hover:scale-105">
                Tech Stack
            </h2>
            <div className="flex space-x-4 mb-2 md:mb-4">
                <button 
                    onClick={handlePrevClick} 
                    className="flex items-center justify-center bg-teal-300 text-gray-900 p-2 rounded-full hover:bg-teal-400 transition duration-300 ease-in-out w-10 h-10 md:w-12 md:h-12"
                >
                    <FaArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button 
                    onClick={handleNextClick} 
                    className="flex items-center justify-center bg-teal-300 text-gray-900 p-2 rounded-full hover:bg-teal-400 transition duration-300 ease-in-out w-10 h-10 md:w-12 md:h-12"
                >
                    <FaArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
            </div>
            <hr className="w-full border-t-2 border-teal-300 mb-4" />
            <div className="flex items-center justify-center w-full space-x-8">
                {isLargeScreen ? (
                    <>
                        <TechDisplay {...techStack[prevTab]} />
                        <TechDisplay {...techStack[currentTab]} />
                        <TechDisplay {...techStack[nextTab]} />
                    </>
                ) : (
                    <TechDisplay {...techStack[currentTab]} />
                )}
            </div>
        </motion.div>
    );
}
