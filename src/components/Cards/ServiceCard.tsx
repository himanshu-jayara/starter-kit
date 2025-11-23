"use client";

import Menupage from "../../pages/MenuPage";
import { SparklesCore } from "../ui/sparkles";
import { useEffect, useState } from "react";

// Placeholder useTheme hook
export const useTheme = () => {
  const [theme, setTheme] = useState("light"); // Default to light

  useEffect(() => {
    // This effect runs client-side after mount
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    // Optional: Add a MutationObserver to watch for class changes on <html>
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const newTheme = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true, // Only detect attribute changes
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return { theme, isMounted: true }; // isMounted is for next-themes compatibility
};

// Main Services Grid
const ServicesGrid = () => {
  const { theme, isMounted } = useTheme();


  const particleColor = theme === "dark" ? "#FFFFFF" : "#0A0A0A"; // White for dark mode, dark gray/black for light mode


  const containerBgClass = theme === "dark" ? "bg-black" : "bg-white";

  return (
    <section className="py-6 font-sans transition-colors duration-500">
      <div className="">
        {/* Header */}
        <div
          className={` w-full py-4 ${containerBgClass} flex flex-col items-center justify-center overflow-hidden rounded-md `}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Our Professional{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Services
            </span>
          </h2>
          <div className="w-[80vw] h-30 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            {isMounted && (
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-[full] h-full"
                // Passed the theme-responsive color here
                particleColor={particleColor}
              />
            )}

       
          </div>
        </div>
          <Menupage />

        {/* Services Grid */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServicesGrid;
