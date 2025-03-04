import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <>
      <Nav />
      <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
        <div className="container mx-auto px-6">
          {/* Header */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have questions or want to collaborate? Reach out to us on YouTube, Instagram, or via the contact form below! 🎨✨
          </p>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
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
              href="https://www.instagram.com/aarav_arts29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-[50vw] md:w-auto gap-2 px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
            >
              <FaInstagram className="text-2xl" />
              Follow on Instagram
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-left" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-left" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-left" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;