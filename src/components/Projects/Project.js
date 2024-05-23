import React from 'react';
import { FaHtml5, FaPython, FaJs, FaLinux, FaNodeJs, FaJava } from "react-icons/fa";
import { SiJupyter, SiFsharp, SiCsharp, SiCplusplus } from "react-icons/si";

const languageIcons = {
    "HTML": <FaHtml5 className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "Python": <FaPython className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "JavaScript": <FaJs className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "Linux": <FaLinux className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "Node.js": <FaNodeJs className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "Java": <FaJava className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "Jupyter Notebook": <SiJupyter className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "F#": <SiFsharp className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "C#": <SiCsharp className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />,
    "C++": <SiCplusplus className="text-teal-300 h-12 w-12 md:h-16 md:w-16" />
};

export default function Project({ name, svn_url, language, created_at, updated_at, description, index }) {
    return (
        <a href={svn_url} target="_blank" className="w-full" title={`Go to ${name}`}>
            <div className="relative flex flex-col items-center bg-gray-800 hover:bg-gray-700 p-4 md:p-6 rounded-lg shadow-lg flex-1 hover:scale-105" 
                 style={{ height: "24rem" }}>
                {index !== undefined && (
                    <div className="absolute top-2 right-2 bg-teal-300 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                    </div>
                )}
                <div className="flex flex-col items-center mb-4 text-center">
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="font-semibold text-lg md:text-2xl ml-2">{name}</div>
                    </div>
                    {languageIcons[language] || <div className="text-teal-300">{language}</div>}
                    <p className="text-white text-xs md:text-base mt-2">Created On: <span className="text-teal-300">{new Date(created_at).toLocaleDateString()}</span></p>
                    <p className="text-white text-xs md:text-base mt-2">Updated On: <span className="text-teal-300">{new Date(updated_at).toLocaleDateString()}</span></p>
                </div>
                <hr className="w-full border-t-2 border-teal-300 mb-4" />
                <p className="text-gray-300 text-xs md:text-base text-center overflow-hidden">{description ? description : "No description."}</p>
            </div>
        </a>
    );
}
