import React from 'react';

export default function TechDisplay({ logo, title, desc, experience }) {
    return (
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg flex-1 h-80">
            <div className="flex flex-col items-center mb-4">
                <div className="flex items-center">
                    {logo}
                    <div className="font-semibold text-3xl ml-2">{title}</div>
                </div>
                <p className="text-teal-300 text-lg mt-2">{experience}</p>
            </div>
            <hr className="w-full border-t-2 border-teal-300 mb-4" />
            <p className="text-gray-300 text-lg text-center">{desc}</p>
        </div>
    );
}
