import React from "react";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 py-6 transition-all">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Logo / Site Name */}
          <h2 className="text-xl font-bold">My Shorts Site</h2>

          {/* Navigation Links */}
          <nav className="my-4 md:my-0">
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/all-shorts" className="hover:text-blue-500">Shorts</a></li>
              <li><a href="/about-page" className="hover:text-blue-500">About</a></li>
              <li><a href="/contact-page" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/@AaravvArts" target="_blank" rel="noopener noreferrer" className="text-red-500 text-2xl hover:opacity-75">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/aarav_arts29?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:opacity-75">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:opacity-75">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          © {new Date().getFullYear()} My Shorts Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
