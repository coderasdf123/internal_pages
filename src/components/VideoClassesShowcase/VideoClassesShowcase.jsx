import React from 'react';
import { Play, ChevronRight, Beaker, Atom, Calculator, GraduationCap } from 'lucide-react';

const VideoClassCard = ({ teacher, className, views, language }) => {
  return (
    <div className="flex flex-col space-y-3 w-72">
      {/* Video Thumbnail */}
      <div className="relative group">
        <img
          src="/api/placeholder/320/180"
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

const SubjectTag = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </div>
  );
};

const VideoClassesShowcase = () => {
  const videos = [
    {
      teacher: "Dr. Raj Kumar",
      className: "Organic Chemistry Masterclass",
      views: "2.4K",
      language: "Hinglish"
    },
    {
      teacher: "Prof. Meera Singh",
      className: "Physics Problem Solving",
      views: "1.8K",
      language: "Hindi"
    },
    {
      teacher: "Dr. Amit Shah",
      className: "Advanced Calculus",
      views: "3.2K",
      language: "English"
    },
    {
      teacher: "Prof. Priya Verma",
      className: "IIT JEE Strategy Session",
      views: "4.1K",
      language: "Hinglish"
    }
  ];

  const subjects = [
    { icon: Beaker, label: "Chemistry" },
    { icon: Atom, label: "Physics" },
    { icon: Calculator, label: "Mathematics" },
    { icon: GraduationCap, label: "Strategy and College Overview" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Most engaging IIT JEE classes of all time
        </h2>
        <button className="px-4 py-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
          See All
        </button>
      </div>

      {/* Video Cards Section */}
      <div className="relative">
        <div className="flex space-x-6 mb-8">
          {videos.map((video, index) => (
            <VideoClassCard key={index} {...video} />
          ))}
        </div>

        {/* Navigation Arrow */}
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Subject Tags */}
      <div className="flex flex-wrap gap-3 mt-8">
        {subjects.map((subject, index) => (
          <SubjectTag key={index} {...subject} />
        ))}
      </div>
    </div>
  );
};

export default VideoClassesShowcase;