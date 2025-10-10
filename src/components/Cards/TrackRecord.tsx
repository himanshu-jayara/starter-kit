"use client";
import { motion } from "framer-motion";
import illustration from "../../assets/illustration.png"; // Replace with your own image

export default function TrackRecordSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-36 transition-colors duration-500">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <img
          src={illustration}
          alt="Charts and Data Illustration"
          className="w-[90%] md:w-[80%]"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left mt-10 md:mt-0 space-y-5"
      >
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
          Our Legacy of Excellence
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-snug">
          Empowering businesses with{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            digital innovation
          </span>{" "}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
          For over two decades, we’ve helped brands transform ideas into
          scalable, sustainable digital solutions. From startups to global
          enterprises, our mission has always been to craft technology that
          inspires trust, drives growth, and creates impact.
        </p>

        {/* Stats Section */}
        <div className="flex justify-center md:justify-start space-x-6 text-gray-700 dark:text-gray-300 font-semibold">
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              100+
            </p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Clients
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              250+
            </p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Projects
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              10+
            </p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Awards
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-indigo-700 dark:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 dark:hover:bg-purple-600 transition-all duration-300 shadow-md">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
