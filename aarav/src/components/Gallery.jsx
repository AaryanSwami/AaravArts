import React from "react";
import { Link } from "react-router-dom";

const iframeLinks = [
  "https://www.youtube.com/embed/xSsm0jvE97U",
  "https://www.youtube.com/embed/ibQ9vJrw-z4",
  "https://www.youtube.com/embed/XXtJdH59ECg",
];

const Gallery = () => {
  return (
    <section id='gallery' className="bg-gray-100 dark:bg-gray-800 py-16 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white m3-6">Welcome to <a href="#" className="text-4xl font-bold text-gray-900 dark:text-white">
          Aarav<span className="text-blue-500">Arts</span>
        </a></h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Explore breathtaking artworks and immerse yourself in the world of creativity.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iframeLinks.map((link, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
              <iframe src={link} title={`Artwork Video ${index + 1}`} allowFullScreen className="w-full h-56 rounded-lg"></iframe>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">Want to see more amazing shorts? 🎨✨</p>
          <a href="http://www.youtube.com/@AaravvArts" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-400 transition">My YouTube Channel</a>
        </div>
        <div className="text-center mt-4">
        <Link to="/all-shorts">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">View More</button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default Gallery;