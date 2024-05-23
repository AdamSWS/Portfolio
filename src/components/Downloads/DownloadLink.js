import React from 'react';
import { FaFilePdf, FaFileAlt, FaCertificate } from "react-icons/fa";

const iconMap = {
    pdf: FaFilePdf,
    alt: FaFileAlt,
    cert: FaCertificate
};

export default function DownloadLink({ href, icon, title, description }) {
    const IconComponent = iconMap[icon];

    return (
        <a
            href={href}
            download
            className="flex items-center justify-between p-4 w-full md:w-3/4 bg-gray-800 hover:bg-gray-700 hover:scale-105 rounded-lg border-2 border-gray-700 hover:border-teal-300 text-white"
        >
            <div className="flex items-center">
                <IconComponent className="text-teal-300 mr-2 w-8 h-8 md:w-10 md:h-10" />
                <div className="ml-4">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </a>
    );
}
