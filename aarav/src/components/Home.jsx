import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ShortsSlider from "./ShortsSlider";


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this value to adjust loading time
  }, []);

  return (
    <>
    <Nav />
      {loading ? (
        // Loader UI
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        // Actual Site Content
        <>
        <ShortsSlider/>
          <Gallery />
          <About />
          <Contact />
          
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;
