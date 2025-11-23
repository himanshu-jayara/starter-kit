import PWABadge from "../PWABadge.tsx";
import TrackRecordSection from "../components/Cards/TrackRecord.tsx";
import Testimonials from "../components/Cards/Testimonials.tsx";
import ServicesGrid from "../components/Cards/ServiceCard.tsx";
import FAQSection from "../components/Cards/FaqCard.tsx";
import ContactSection from "../components/Cards/ContactLink.tsx";
import { useState, useEffect } from "react";
import { OrbitalVortex } from "../components/ui/vortex.tsx";
import { TextGenerateEffectDemo } from "../components/Cards/Homecard.tsx";
import HeroSection from "../components/Cards/HeroSection.tsx";

function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Hook to detect the dark mode class on the root element
  useEffect(() => {
    const htmlElement = document.documentElement;
    const checkMode = () => {
        setIsDarkMode(htmlElement.classList.contains("dark"));
    };
    
    // Initial check
    checkMode();

    // Observer to listen for theme changes
    const observer = new MutationObserver(checkMode);
    observer.observe(htmlElement, { 
        attributes: true, 
        attributeFilter: ["class"] 
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Main container is full width and handles base light/dark bg
    <div className="flex flex-col items-center justify-center text-center w-full dark:bg-black bg-white">
      
      {/* Container for Vortex and its content - Full width/min-height coverage */}
      <div className="w-full overflow-hidden"> 
        <OrbitalVortex
          isDarkMode={isDarkMode}
          // The min-h-[50vh] ensures the vortex has space to display, adjust this value as needed
          className="flex items-center flex-col justify-center w-full min-h-[80vh] mt-24" 
        >
          <TextGenerateEffectDemo />
          <HeroSection />
        </OrbitalVortex>
      </div>
      
      {/* Rest of the content */}
      <div className="w-full overflow-hidden">
        <div className="px-4 md:px-16">
          <TrackRecordSection />
          <ServicesGrid />
        </div>
        
        <Testimonials />
        
        <div className="px-4 md:px-16">
          <FAQSection />
          <ContactSection />
          <div className="p-4 flex justify-center">
            {/* optional additional centered content */}
          </div>
        </div>
        <PWABadge />
      </div>
    </div>
  );
}

export default HomePage;