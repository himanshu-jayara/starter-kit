"use client";

import { motion } from "framer-motion";
import videoSrc from "../../assets/home.webp";
import { useNavigate } from "react-router-dom";

const phone=import.meta.env.VITE_OWNER_PHONE
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      className="
        flex flex-col md:flex-row items-center justify-between 
        transition-colors duration-300 
        space-y-10 md:space-y-0 md:gap-32 lg:gap-44 xl:gap-56
        min-h-[80vh]
      "
    >
      {/* Left Content */}
      <div className="flex flex-col py-36 space-y-6 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
          We are a{" "}
          <span className="block">
            Design{" "}
            <span className="text-indigo-600 dark:text-indigo-400">and</span>
          </span>
          <span className="block text-indigo-600 dark:text-indigo-400">
            Branding Agency
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-md">
          At least, not exclusively. Reduced recruiting costs, more efficient
          and effective communication, and, most importantly.
        </p>
        <div className="flex justify-center flex-row gap-4">
          <button
            onClick={() => navigate("/services")}
            className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Our Services
          </button>

          <a
            href={`https://wa.me/${phone}`} // replace with your WhatsApp number including country code
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 text-white font-medium px-6 py-3 rounded-lg transition inline-block text-center"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* Right Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          md:w-1/2 flex items-center justify-center 
          bg-indigo-50 dark:bg-gray-800 
          rounded-tl-[100px] md:rounded-tl-[150px] 
          overflow-hidden h-full py-20 md:py-0
        "
      >
      
        <img src={videoSrc} />
      </motion.div>
    </section>
  );
}
