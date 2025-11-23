"use client";

import React, { useState } from "react";

const phone = import.meta.env.VITE_OWNER_PHONE; // should be like '919876543210'

interface ContactFormState {
  name: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: "",
    subject: "",
    message: "",
  });

  const resetForm = () => {
    setContactForm({ name: "", subject: "", message: "" });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.message) {
      let messageBody = `New inquiry:\n\nName: ${contactForm.name}`;
      if (contactForm.subject) messageBody += `\nSubject: ${contactForm.subject}`;
      messageBody += `\nMessage: ${contactForm.message}`;

      const encodedMessage = encodeURIComponent(messageBody);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
      resetForm();
    }
  };

  const whatsappLink = `https://wa.me/${phone}`;

  return (
    <section
      id="contact"
      className="py-8 md:py-12 px-4 md:px-8 text-center mx-auto max-w-3xl rounded-2xl "
    >
      <h2 className="text-[clamp(1.5rem,6vw,2.8rem)] font-black mb-6 text-indigo-600 dark:text-indigo-400">
        Contact Us 📞
      </h2>

      <p className="text-[clamp(0.85rem,3.5vw,1.1rem)] mb-6 leading-relaxed px-2 text-gray-800 dark:text-gray-200">
        Reach out to us directly on WhatsApp or fill out the form below. We'll get back to you soon!
      </p>

      <form
        onSubmit={submitForm}
        className="flex w-full flex-col gap-5 text-left p-6 rounded-xl  border border-gray-300/30 dark:border-gray-700/50 "
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold mb-1 text-indigo-600 dark:text-indigo-400">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={contactForm.name}
            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
            required
            placeholder="Enter your full name"
            className="rounded-lg p-2 border border-gray-300/30 dark:border-gray-700/50 bg-white/10 dark:bg-black/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>


        {/* Subject */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="font-semibold mb-1 text-indigo-600 dark:text-indigo-400">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={contactForm.subject}
            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
            placeholder="Brief subject"
            className="rounded-lg p-2 border border-gray-300/30 dark:border-gray-700/50 bg-white/10 dark:bg-black/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold mb-1 text-indigo-600 dark:text-indigo-400">
            Your Message
          </label>
          <textarea
            id="message"
            value={contactForm.message}
            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
            rows={5}
            required
            placeholder="Tell us about your project..."
            className="rounded-lg p-2 border border-gray-300/30 dark:border-gray-700/50 bg-white/10 dark:bg-black/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
          <button
            type="submit"
            className="font-bold px-6 py-3 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-all shadow-lg hover:translate-y-[-2px]"
          >
            Send Message
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all shadow-lg hover:translate-y-[-2px]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
