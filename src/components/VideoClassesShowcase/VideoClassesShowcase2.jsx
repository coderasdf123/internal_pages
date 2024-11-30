import React, { useState } from 'react';
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';
import upscs1 from '../../assets/upsc1.jpg';
import upscs2 from '../../assets/upsc2.jpg';
import upscs3 from '../../assets/upsc3.jpg';
import upscs4 from '../../assets/upsc4.jpg';

const VideoClassCard = ({ teacher, className, views, language, thumbnail }) => {
  return (
    <div className="flex flex-col space-y-3 w-72 flex-shrink-0">
      {/* Video Thumbnail */}
      <div className="relative group">
        <img
          src={thumbnail}
          alt={`${teacher}'s class`}
          className="rounded-lg object-cover w-full aspect-video"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-lg">
          <div className="bg-white p-3 rounded-full">
            <Play className="w-6 h-6 text-gray-800" />
          </div>
        </div>
        {/* Language Label */}
        <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
          {language}
        </div>
      </div>

      {/* Video Info */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-900">{teacher}</h3>
        <p className="text-sm text-gray-600">{className}</p>
        <p className="text-xs text-gray-500">{views} views</p>
      </div>
    </div>
  );
};

const VideoClassesShowcase2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      teacher: "Dr. Raj Kumar",
      className: "Organic Chemistry Masterclass",
      views: "2.4K",
      language: "Hinglish",
      thumbnail: upscs1,
    },
    {
      teacher: "Prof. Meera Singh",
      className: "Physics Problem Solving",
      views: "1.8K",
      language: "Hindi",
      thumbnail: upscs2,
    },
    {
      teacher: "Dr. Amit Shah",
      className: "Advanced Calculus",
      views: "3.2K",
      language: "English",
      thumbnail: upscs3,
    },
    {
      teacher: "Prof. Priya Verma",
      className: "IIT JEE Strategy Session",
      views: "4.1K",
      language: "Hinglish",
      thumbnail: upscs4,
    },
    // Additional videos to demonstrate circular navigation
    {
      teacher: "Dr. Anita Gupta",
      className: "Quantum Physics Basics",
      views: "2.1K",
      language: "English",
      thumbnail: upscs1,
    },
    {
      teacher: "Prof. Vikram Singh",
      className: "Organic Synthesis",
      views: "2.7K",
      language: "Hindi",
      thumbnail: upscs2,
    },
    {
      teacher: "Dr. Rahul Mehta",
      className: "Calculus Advanced Techniques",
      views: "3.5K",
      language: "Hinglish",
      thumbnail: upscs3,
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 4) % videos.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 4 + videos.length) % videos.length
    );
  };

  // Get the videos to display (4 at a time)
  const displayedVideos = videos.slice(currentIndex, currentIndex + 4).concat(
    videos.slice(0, Math.max(0, (currentIndex + 4) - videos.length))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Most engaging UPSC classes of all time
        </h2>
        <button className="px-4 py-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
          See All
        </button>
      </div>

      {/* Video Cards Section */}
      <div className="relative flex items-center">
        {/* Previous Button */}
        <button 
          onClick={handlePrevious}
          className="absolute -left-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Video Carousel */}
        <div className="flex space-x-6 mb-8 overflow-hidden w-full">
          <div className="flex space-x-6 transition-transform duration-500 ease-in-out">
            {displayedVideos.map((video, index) => (
              <VideoClassCard key={index} {...video} />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={handleNext}
          className="absolute -right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default VideoClassesShowcase2;