import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause, FaSort, FaCog } from "react-icons/fa";
import { SpinningCircles } from 'react-loading-icons';
import Project from './Project';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";

async function getProjects(setProjects) {
    try {
        const response = await fetch("https://api.github.com/users/AdamSWS/repos");
        const data = await response.json();
        setProjects(data);
    } catch (e) {
        console.log(e);
    }
}

export default function Projects() {
    const [currentTab, setCurrentTab] = useState(0);
    const [projects, setProjects] = useState([]);
    const [autoScroll, setAutoScroll] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        getProjects(setProjects);
    }, []);

    useEffect(() => {
        let intervalID;
        if (autoScroll) {
            intervalID = setInterval(() => {
                setCurrentTab(prevTab => (prevTab === projects.length - 1 ? 0 : prevTab + 1));
            }, 3000);
        }

        return () => clearInterval(intervalID);
    }, [projects.length, autoScroll]);

    const handlePrevClick = () => {
        setCurrentTab(prevTab => (prevTab === 0 ? projects.length - 1 : prevTab - 1));
    };

    const handleNextClick = () => {
        setCurrentTab(prevTab => (prevTab === projects.length - 1 ? 0 : prevTab + 1));
    };

    const handleToggleAutoScroll = () => {
        setAutoScroll(!autoScroll);
    };

    const handleSortByDate = () => {
        const sortedProjects = [...projects].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setProjects(sortedProjects);
        setCurrentTab(0);
    };

    const getProjectIndex = (offset) => {
        if (projects.length === 0) return 0;
        return (currentTab + offset + projects.length) % projects.length;
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-2xl shadow-2xl p-6 md:p-10 space-y-6 md:space-y-8 relative"
            style={{
                width: isLargeScreen ? "80vw" : "90vw",
                height: isLargeScreen ? "80vh" : "auto",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <h2 className="font-extrabold text-teal-300 text-center text-4xl md:text-6xl mb-2 md:mb-4 hover:scale-105">
                Projects
            </h2>
            <motion.div
                className="absolute top-0 right-6 flex items-center justify-center w-16 h-16 bg-gray-800 hover:bg-gray-700 hover:scale-105 text-white rounded-full shadow-2xl cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
                whileTap={{ scale: 0.9 }}
            >
                <FaCog className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
            {showDropdown && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setShowDropdown(false)}
                    ></div>
                    <motion.div
                        className="absolute top-20 right-6 bg-gray-800 text-white shadow-lg rounded-lg p-4 w-48 z-50 overflow-y-auto"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <button
                            onClick={handleToggleAutoScroll}
                            className={`w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600 ${autoScroll ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={autoScroll}
                        >
                            <FaPlay className="mr-2" />
                            Start Auto-Scroll
                        </button>
                        <button
                            onClick={handleToggleAutoScroll}
                            className={`w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600 ${!autoScroll ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={!autoScroll}
                        >
                            <FaPause className="mr-2" />
                            Stop Auto-Scroll
                        </button>
                        <button
                            onClick={handleSortByDate}
                            className={`w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600 ${autoScroll ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={autoScroll}
                        >
                            <FaSort className="mr-2" />
                            Sort by Date
                        </button>
                    </motion.div>
                </>
            )}
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
            <hr className="w-full border-t-2 border-teal-300 mb-4 md:mb-6" />
            <div className="flex items-center justify-center w-full space-x-8">
                {projects.length > 0 ? (
                    isLargeScreen ? (
                        <>
                            <Project {...projects[getProjectIndex(-1)]} index={getProjectIndex(-1)} />
                            <Project {...projects[getProjectIndex(0)]} index={getProjectIndex(0)} />
                            <Project {...projects[getProjectIndex(1)]} index={getProjectIndex(1)} />
                        </>
                    ) : (
                        <Project {...projects[getProjectIndex(0)]} index={getProjectIndex(0)} />
                    )
                ) : (
                    <SpinningCircles className="text-teal-300" />
                )}
            </div>
        </motion.div>
    );
}
