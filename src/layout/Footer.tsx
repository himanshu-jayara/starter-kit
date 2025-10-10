"use client";

import { useNavigate } from "react-router-dom";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
const phone = import.meta.env.VITE_OWNER_PHONE;

const Footer = ({ companyName = "Vertex Nexus" }) => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="w-full relative overflow-hidden backdrop-blur-xl py-10 px-4 md:px-10 bg-black text-white dark:bg-black dark:text-white">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-48 w-48 rounded-full blur-3xl animate-blob-1 bg-indigo-500/20"></div>
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full blur-3xl animate-blob-2 bg-indigo-600/20"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row justify-between space-y-12 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 max-w-sm">
          {/* Logo */}
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300">
              {companyName}
            </div>
          </motion.button>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-6">
            {companyName} delivers cutting-edge software solutions to help you
            build and scale Web3 applications effortlessly. No Hassle. No
            complexity. Just seamless development.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-row xs:flex-col space-x-24">
          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold text-indigo-400">Contact Us</h2>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-indigo-300 transition-colors">
              <IconMail size={20} />
              <a href="mailto:team@skaya.org" className="hover:underline">
                team@skaya.org
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-indigo-300 transition-colors">
              <IconPhone size={20} />
              <a href={`tel:+91${phone}`} className="hover:underline">
                +91 {phone}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold text-indigo-400">Follow Us</h2>
            <div className="flex space-x-4">
              {[
                { Icon: IconBrandGithub, href: "https://github.com/skaya-org" },
                {
                  Icon: IconBrandLinkedin,
                  href: "https://linkedin.com/company/skaya-org",
                },
                {
                  Icon: IconBrandInstagram,
                  href: "https://instagram.com/skaya_org_",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:-translate-y-1 text-gray-400 hover:text-indigo-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-sm relative z-10">
        <p>
          © {year} {companyName}. All rights reserved.
        </p>
        <div className="mt-1">
          Built with ❤️ by{" "}
          <a
            href="https://skaya.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-indigo-300 relative z-10 pointer-events-auto"
          >
            SKAYA
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
