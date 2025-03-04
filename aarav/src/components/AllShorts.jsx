import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";


const shortsData = [
  {
    id: "1",
    title: "Short 1",
    videoUrl: "https://www.youtube.com/embed/HAbD5JTjyJk",
    thumbnail: "https://img.youtube.com/vi/HAbD5JTjyJk/hqdefault.jpg",
  },
  {
    id: "2",
    title: "Short 2",
    videoUrl: "https://www.youtube.com/embed/qbqIkK89pR8",
    thumbnail: "https://img.youtube.com/vi/qbqIkK89pR8/hqdefault.jpg",
  },
  {
    id: "3",
    title: "Short 3",
    videoUrl: "https://www.youtube.com/embed/aIZtW-naM5g",
    thumbnail: "https://img.youtube.com/vi/aIZtW-naM5g/hqdefault.jpg",
  },
  {
    id: "4",
    title: "Short 4",
    videoUrl: "https://www.youtube.com/embed/-ecvfu7Hqlw",
    thumbnail: "https://img.youtube.com/vi/-ecvfu7Hqlw/hqdefault.jpg",
  },
  {
    id: "5",
    title: "Short 5",
    videoUrl: "https://www.youtube.com/embed/kdp9KjGoWjw",
    thumbnail: "https://img.youtube.com/vi/kdp9KjGoWjw/hqdefault.jpg",
  },
  {
    id: "6",
    title: "Short 6",
    videoUrl: "https://www.youtube.com/embed/kUk9WCEql9A",
    thumbnail: "https://img.youtube.com/vi/kUk9WCEql9A/hqdefault.jpg",
  },
  {
    id: "7",
    title: "Short 7",
    videoUrl: "https://www.youtube.com/embed/O2AAq1sGnDw",
    thumbnail: "https://img.youtube.com/vi/O2AAq1sGnDw/hqdefault.jpg",
  },
];

const AllShorts = () => {
  return (<>
  <Nav/>

    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🔥 Latest Shorts</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shortsData.map((short) => (
          <div key={short.id} className="relative group">
            <iframe
              src={short.videoUrl}
              title={short.title}
              className="w-full h-64 rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AllShorts;
