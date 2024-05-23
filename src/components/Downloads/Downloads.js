import React from 'react';
import { motion } from "framer-motion";
import DownloadLink from './DownloadLink';
import Resume from "../../downloads/adamsws_soft_resume_2024.pdf";
import Transcripts from "../../downloads/adamsws_transcripts_2024.pdf";
import HTML5cert from "../../downloads/html5cert.pdf";
import WebDevcert from "../../downloads/webdevcert.pdf";

export default function Downloads() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-2xl shadow-2xl p-8 space-y-6"
            style={{
                width: "90vw",
                height: "auto",
                minHeight: "70vh",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <h2 className="font-extrabold text-teal-300 text-center text-4xl md:text-6xl hover:scale-105">
                Downloads
            </h2>
            <hr className="w-full border-t-2 border-teal-300 mb-4" />
            <div className="flex flex-col space-y-4 w-full items-center justify-center">
                <DownloadLink
                    href={Resume}
                    icon="pdf"
                    title="Resume"
                    description="Download my resume in PDF format."
                />
                <DownloadLink
                    href={Transcripts}
                    icon="alt"
                    title="Transcript"
                    description="Download my academic transcript."
                />
                <DownloadLink
                    href={HTML5cert}
                    icon="cert"
                    title="HTML5 Certification"
                    description="Learn HTML5 Programming From Scratch"
                />
                <DownloadLink
                    href={WebDevcert}
                    icon="cert"
                    title="Web Development Certification"
                    description="The Complete 2024 Web Development Bootcamp"
                />
            </div>
        </motion.div>
    );
}
