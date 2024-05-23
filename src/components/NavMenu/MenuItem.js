import React from 'react';
import { FaInfoCircle, FaBook } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { IoDownloadSharp } from "react-icons/io5";

const icons = {
  about: FaInfoCircle,
  education: FaBook,
  techstack: RiComputerFill,
  projects: PiProjectorScreenChartFill,
  downloads: IoDownloadSharp,
};

export default function MenuItem({ tab, label, activeTab, handleMenuItemClick }) {
  const Icon = icons[tab];

  return (
    <li
      className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-700 rounded-md hover:scale-105 ${activeTab === tab ? 'bg-gray-900 cursor-not-allowed opacity-50 pointer-events-none' : ''}`}
      onClick={() => handleMenuItemClick(tab)}
    >
      <Icon className="mr-2" /> {label}
    </li>
  );
}