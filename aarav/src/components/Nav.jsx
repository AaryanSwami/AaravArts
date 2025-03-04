import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Aarav<span className="text-blue-500">Arts</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/all-shorts" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">All Shorts</Link>
          <Link to="/about-page" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
          <Link to="/contact-page" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-700 dark:text-gray-300 hover:text-blue-500 focus:outline-none">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md py-4 px-6 space-y-4">
          <Link to="/all-shorts" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">All Shorts</Link>
          <Link to="/about-page" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
          <Link to="/contact-page" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
