import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import MenuIcons from './MenuIcons';

export default function NavMenu({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setIsOpen(false);
    }
  };

  return (
    <div>
      <motion.div
        className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-gray-800 hover:bg-gray-700 hover:scale-105 text-white rounded-full shadow-2xl cursor-pointer z-50"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        <MenuIcon className="w-8 h-8" />
      </motion.div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
          <motion.div
            className="fixed bottom-20 right-4 bg-gray-800 text-white shadow-lg rounded-lg p-4 w-48 z-50 overflow-y-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ul>
              <MenuItem tab="about" label="About" activeTab={activeTab} handleMenuItemClick={handleMenuItemClick} />
              <MenuItem tab="education" label="Education" activeTab={activeTab} handleMenuItemClick={handleMenuItemClick} />
              <MenuItem tab="techstack" label="Tech Stack" activeTab={activeTab} handleMenuItemClick={handleMenuItemClick} />
              <MenuItem tab="projects" label="Projects" activeTab={activeTab} handleMenuItemClick={handleMenuItemClick} />
              <MenuItem tab="downloads" label="Downloads" activeTab={activeTab} handleMenuItemClick={handleMenuItemClick} />
            </ul>
            <hr className="my-2 border-teal-300" />
            <MenuIcons />
          </motion.div>
        </>
      )}
    </div>
  );
}