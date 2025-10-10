import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Individual FAQ Item Component - UPDATED
const FAQItem = ({ question, answer, isOpen, toggleOpen }: any) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <motion.button
        className="flex justify-between items-center w-full text-lg font-semibold text-gray-900 dark:text-gray-100 focus:outline-none py-2"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-left">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-indigo-600 dark:text-indigo-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600 dark:text-gray-300 pb-2 pr-4 text-left">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is lunch provided free of cost?",
      answer:
        "Yes, complimentary lunch is provided for all guests staying at our hotels. Please check with the front desk for timings and menu options.",
    },
    {
      question: "Do you have 2 Bedroom suites?",
      answer:
        "Absolutely! We offer various suite options, including spacious 2-bedroom suites perfect for families or groups. Availability may vary by location.",
    },
    {
      question: "Are Wi-Fi costs included in the price?",
      answer:
        "High-speed Wi-Fi access is included free of charge in all our rooms and public areas for the duration of your stay.",
    },
    {
      question: "Where can I reach you for support?",
      answer:
        "Our customer support team is available 24/7. You can reach us via phone at (123) 456-7890, email at support@ourhotels.com, or through the contact form on our website.",
    },
    {
      question: "Do you offer airport shuttle services?",
      answer:
        "Some of our locations provide complimentary airport shuttle services. Please check the specific hotel's amenities page or contact them directly for details.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white my-36 dark:bg-gray-900 py-16 md:py-24 font-sans transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-[88vw]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left Side: Illustration and Text */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-lg lg:max-w-none mb-10 lg:mb-0"
            >
              {/* This is a placeholder for your illustration */}
              {/* You might replace this with an actual SVG or image component */}
              <div className="w-full flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[400px] aspect-w-16 aspect-h-9 sm:aspect-h-7 lg:aspect-h-1 flex items-end">
                  {/* Laptop base */}
                  <div className="absolute bottom-0 w-full h-[60%] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"></div>
                  {/* Screen part */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[70%] bg-white dark:bg-gray-700 rounded-t-lg shadow-md flex items-center justify-center pt-8">
                    {/* Simplified person illustration */}
                    <div className="w-28 h-28 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-indigo-700 dark:bg-indigo-600 border-4 border-white dark:border-gray-900"></div>
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-8 w-16 bg-gray-800 dark:bg-gray-200 rounded-full"></div>{" "}
                    {/* Hair */}
                    {/* Speech bubble */}
                    <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-600 p-3 rounded-lg shadow-lg after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0 after:border-t-[10px] after:border-t-white dark:after:border-t-gray-600 after:border-r-[10px] after:border-r-transparent after:-translate-x-full after:translate-y-full">
                      <div className="h-2 w-16 bg-gray-300 dark:bg-gray-500 rounded mb-1"></div>
                      <div className="h-2 w-12 bg-gray-300 dark:bg-gray-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider mb-2 mt-8 lg:mt-0"
            >
              FAQs
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-4"
            >
              Do you have{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Questions?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0"
            >
              Here are some frequently asked questions about our hotels from our
              loving customers. Should you have any other questions, feel free
              to reach out via the contact form below.
            </motion.p>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggleOpen={() => toggleFAQ(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
