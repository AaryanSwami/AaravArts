import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Swal from "sweetalert2";

const shorts = [
  {
    id: "1",
    title: "Short 1",
    videoUrl: "https://www.youtube.com/watch?v=HAbD5JTjyJk",
    thumbnail: "https://img.youtube.com/vi/HAbD5JTjyJk/hqdefault.jpg",
  },
  {
    id: "2",
    title: "Short 2",
    videoUrl: "https://www.youtube.com/watch?v=qbqIkK89pR8",
    thumbnail: "https://img.youtube.com/vi/qbqIkK89pR8/hqdefault.jpg",
  },
  {
    id: "3",
    title: "Short 3",
    videoUrl: "https://www.youtube.com/watch?v=aIZtW-naM5g",
    thumbnail: "https://img.youtube.com/vi/aIZtW-naM5g/hqdefault.jpg",
  },
  {
    id: "4",
    title: "Short 4",
    videoUrl: "https://www.youtube.com/watch?v=-ecvfu7Hqlw",
    thumbnail: "https://img.youtube.com/vi/-ecvfu7Hqlw/hqdefault.jpg",
  },
  {
    id: "5",
    title: "Short 5",
    videoUrl: "https://www.youtube.com/watch?v=kdp9KjGoWjw",
    thumbnail: "https://img.youtube.com/vi/kdp9KjGoWjw/hqdefault.jpg",
  },
];

export default function ShortsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === shorts.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === shorts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? shorts.length - 1 : prev - 1));
  };

  const handleClick = (url) => {
    Swal.fire({
      title: "Open Link?",
      text: "Do you want to open this video?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, open it!"
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(url, "_blank");
      }
    });
  };

  return (
    <div className="relative flex items-center justify-center h-auto bg-black">
      <div className="relative w-[100%] h-[500px] overflow-hidden">
        {shorts.map((short, index) => (
          <div
            key={short.id}
            className={`absolute inset-0 transition-all duration-700 transform ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img 
              src={short.thumbnail} 
              alt={short.title} 
              className="w-full h-full rounded-lg shadow-lg cursor-pointer" 
              onClick={() => handleClick(short.videoUrl)}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        className="absolute left-5 text-white bg-gray-800 p-2 rounded-full"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        className="absolute right-5 text-white bg-gray-800 p-2 rounded-full"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}