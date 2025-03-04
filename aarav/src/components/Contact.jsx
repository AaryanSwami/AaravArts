import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Contact <span className="text-blue-500">Us</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Have questions or want to collaborate? Reach out to us on YouTube or Instagram! 🎨✨
        </p>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@AaravvArts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-[50vw] md:w-auto gap-2 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
          >
            <FaYoutube className="text-2xl" />
            Subscribe on YouTube
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/aarav_arts29?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-[50vw] md:w-auto gap-2 px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            <FaInstagram className="text-2xl" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
