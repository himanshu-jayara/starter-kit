"use client";

import { motion } from "framer-motion";

// Services data
const services = [
  {
    title: "Ads Management",
    description:
      "We create and manage ads that you need, from creation to deployment. Lorem ipsum dolor sit amet consiciou.",
    iconPath: "M9 12h6m-3-3v6m-6 4h12a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Video Marketing",
    description:
      "We design video campaigns that engage audiences effectively, delivering measurable results.",
    iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12",
  },
  {
    title: "Customer Relation",
    description:
      "Maintain strong connections with your clients through our CRM and support strategies.",
    iconPath: "M4 6h16M4 12h16m-7 6h7",
  },
  {
    title: "Product Outreach",
    description:
      "Expand your product reach with targeted campaigns and strategic market positioning.",
    iconPath: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
  },
  {
    title: "PR Campaign",
    description:
      "Build your brand image and visibility with creative PR campaigns and outreach.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Product Expansion",
    description:
      "Scale your product line and enter new markets with our strategic guidance.",
    iconPath:
      "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM9 17a5 5 0 005 0",
  },
];

// Single Service Card
const ServiceCard = ({ service, index }: any) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      layout // <-- preserves layout to avoid displacement
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 15px 25px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 },
      }}
      className="p-6 sm:p-8 border-2 border-dashed border-indigo-400 dark:border-indigo-500 rounded-lg bg-white dark:bg-gray-800 flex flex-col items-center text-center cursor-pointer h-full"
    >
      {/* Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-2 border-indigo-400 dark:border-indigo-500 mb-6">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d={service.iconPath}
          ></path>
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{service.title}</h3>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

// Main Services Grid
const ServicesGrid = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="py-36 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Our Professional <span className="text-indigo-600 dark:text-indigo-400">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
