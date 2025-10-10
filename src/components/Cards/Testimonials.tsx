"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testimonial from "../../assets/testimonial.png"; // Replace with your own image

// Sample testimonials
const testimonials = [
  {
    name: 'Charlotte Hale',
    title: 'CEO, Tesla Inc.',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    avatarUrl: 'https://placehold.co/150x150/50009c/ffffff?text=CH',
  },
  {
    name: 'Marcus Chen',
    title: 'Head of Product, Nebula Corp',
    quote: 'Working with this team transformed our quarterly performance. Their strategic insights and rapid execution were key to achieving a 40% growth in a single quarter. Absolutely recommend their expertise to anyone serious about scaling.',
    avatarUrl: 'https://placehold.co/150x150/007bff/ffffff?text=MC',
  },
  {
    name: 'Sarah Rodriguez',
    title: 'Founder, EcoBloom',
    quote: 'The customer service and attention to detail were exceptional. They genuinely care about the success of their clients, and it shows in the quality of their work. We feel much more confident in our market position now.',
    avatarUrl: 'https://placehold.co/150x150/ff4500/ffffff?text=SR',
  },
  {
    name: 'David Kim',
    title: 'Marketing Director, GlobalLink',
    quote: 'We saw immediate returns after implementing their recommended marketing strategy. It was efficient, highly targeted, and delivered results far beyond our expectations. A fantastic experience all around.',
    avatarUrl: 'https://placehold.co/150x150/3cb371/ffffff?text=DK',
  },
  {
    name: 'Elena Volkov',
    title: 'VP of Operations, Astra Systems',
    quote: 'Reliability and responsiveness are paramount for our operations, and this team consistently exceeded those standards. They are a crucial extension of our internal team, especially for critical projects.',
    avatarUrl: 'https://placehold.co/150x150/8a2be2/ffffff?text=EV',
  },
];

// Navigation button
const NavButton = ({ direction, onClick }: any) => (
  <button
    onClick={onClick}
    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-700 shadow-md flex items-center justify-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    aria-label={direction === 'prev' ? "Previous testimonial" : "Next testimonial"}
  >
    {direction === 'prev' ? (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    )}
  </button>
);

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];
  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);

  // Common animation variants for left-to-right fade
  const fadeLeftVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <section className="py-36 px-8 sm:px-6 lg:px-8 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Left Side Image */}
        <div className="lg:w-1/2 relative shadow-2xl rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={testimonial}
              alt="Two people laughing while working on laptops"
              className="w-full h-auto max-h-[500px] object-cover"
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
      
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 pr-0 lg:pr-12 xl:pr-24 mb-10 lg:mb-0 text-gray-900 dark:text-gray-100 flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Our Clients <span className="text-indigo-600 dark:text-indigo-400">Love Us.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 mb-4">
            Here is what some of our amazing customers are saying about our marketing professionals. Their insights and dedication helped drive measurable success for our clients.
          </p>


          <div className=" flex justify-between px-4 mx-[30%] md:mx-[34%] my-8 flex space-x-3 p-2  rounded-full shadow-xl bg-gray-100 dark:bg-gray-900">
            <NavButton direction="prev" onClick={prevTestimonial} />
            <NavButton direction="next" onClick={nextTestimonial} />
          </div>
          {/* Quote */}
          <div className="relative min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                className="text-2xl italic leading-snug relative z-10 transition-opacity duration-500"
                variants={fadeLeftVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
              >
                {currentTestimonial.quote}
              </motion.p>
            </AnimatePresence>
            <span className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-6xl text-indigo-300 dark:text-indigo-500 font-extrabold opacity-70">
              &ldquo;
            </span>
            <span className="absolute bottom-0 right-0 translate-x-4 translate-y-4 text-6xl text-indigo-300 dark:text-indigo-500 font-extrabold opacity-70 transform rotate-180">
              &ldquo;
            </span>
        
          </div>
          {/* Author & Navigation */}
          {/* <div className="mt-8 flex items-center justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className='flex items-center'
                variants={fadeLeftVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
              >
                <img
                  className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-indigo-600"
                  src={currentTestimonial.avatarUrl}
                  alt={`Avatar of ${currentTestimonial.name}`}
                />
                <div>
                  <p className="font-bold text-lg">{currentTestimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{currentTestimonial.title}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex space-x-2">
              <NavButton direction="prev" onClick={prevTestimonial} />
              <NavButton direction="next" onClick={nextTestimonial} />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
