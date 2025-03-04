import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Listen for changes in dark mode (when toggled in Nav)
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <section
        className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            About <span className="text-blue-500">AaravArts</span>
          </h2>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <span className="text-2xl">🙏 Jay Shree Krishna 💙🌸</span>
            <br />
            Welcome to <strong>AaravArts</strong> – a creative space for{" "}
            <strong>custom arts & digital creativity</strong>! 🎨✨
          </p>

          <div className="my-8">
            <img
              src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/role-of-arts-scaled-1.jpg"
              alt="Aarav Arts"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className={`text-left space-y-4 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
            <p className="text-lg">🎭 <strong>Our Mission</strong> – Bringing artistic visions to reality with passion & creativity.</p>
            <p className="text-lg">🖌 <strong>Our Expertise</strong> – Custom portraits, digital art, concept sketches & more.</p>
            <p className="text-lg">📩 <strong>Let's Collaborate!</strong> – Open for commissions & creative projects.</p>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/aarav_arts29"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg shadow-md transition text-white"
              style={{
                backgroundColor: darkMode ? "#2563eb" : "#3b82f6",
              }}
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.youtube.com/@AaravvArts"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg shadow-md transition text-white"
              style={{
                backgroundColor: darkMode ? "#b91c1c" : "#ef4444",
              }}
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
