import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHandshake, SiGmail } from "react-icons/si";

export default function MenuIcons() {
  return (
    <div className="flex justify-between px-4">
      <a href="https://github.com/AdamSWS" target="_blank" className="cursor-pointer hover:text-teal-300">
        <FaGithub className="w-6 h-6 hover:scale-105" />
      </a>
      <a href="https://www.linkedin.com/in/adam-s-491036232/" target="_blank" className="cursor-pointer hover:text-teal-300">
        <FaLinkedin className="w-6 h-6 hover:scale-105" />
      </a>
      <a href="https://app.joinhandshake.com/stu/users/26566632" target="_blank" className="cursor-pointer hover:text-teal-300">
        <SiHandshake className="w-6 h-6 hover:scale-105" />
      </a>
      <a href="mailto:a.swshaar@gmail.com" className="cursor-pointer hover:text-teal-300">
        <SiGmail className="w-6 h-6 hover:scale-105" />
      </a>
    </div>
  );
}