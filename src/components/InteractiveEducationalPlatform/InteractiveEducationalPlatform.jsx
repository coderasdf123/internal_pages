import React, { useState } from 'react';
import { Play, Beaker, Atom, Calculator, GraduationCap, Eye } from 'lucide-react';

const SubjectButton = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
        isActive
          ? 'bg-emerald-500 text-white shadow-lg'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
};

const VideoCard = ({ instructor, title, language, views, subjects }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      {/* Thumbnail Container */}
      <div className="relative aspect-square">
        <img
          src="/api/placeholder/300/300"
          alt={`${instructor}'s class thumbnail`}
          className="w-full h-full object-cover"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-white/90 p-3 rounded-full">
            <Play className="w-8 h-8 text-emerald-600" />
          </div>
        </div>
        {/* Subject Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900">{instructor}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{language}</span>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveEducationalPlatform = () => {
  const [activeSubject, setActiveSubject] = useState(null);

  const subjects = [
    { icon: Beaker, label: 'Chemistry', id: 'chemistry' },
    { icon: Atom, label: 'Physics', id: 'physics' },
    { icon: Calculator, label: 'Mathematics', id: 'mathematics' },
    { icon: GraduationCap, label: 'Strategy', id: 'strategy' },
  ];

  const videos = [
    {
      instructor: "Dr. Raj Kumar",
      title: "Organic Chemistry Fundamentals",
      language: "Hinglish",
      views: "2.4K",
      subjects: ["Chemistry", "Strategy"]
    },
    {
      instructor: "Prof. Meera Singh",
      title: "Advanced Physics Problem Solving",
      language: "Hindi",
      views: "1.8K",
      subjects: ["Physics"]
    },
    {
      instructor: "Dr. Amit Shah",
      title: "Calculus Masterclass",
      language: "English",
      views: "3.2K",
      subjects: ["Mathematics"]
    },
    {
      instructor: "Prof. Priya Verma",
      title: "IIT JEE Strategy Session",
      language: "Hinglish",
      views: "4.1K",
      subjects: ["Strategy"]
    },
    {
      instructor: "Dr. Suresh Kumar",
      title: "Physical Chemistry",
      language: "Hindi",
      views: "2.9K",
      subjects: ["Chemistry", "Physics"]
    },
    {
      instructor: "Prof. Ravi Shankar",
      title: "Vector Algebra",
      language: "English",
      views: "3.5K",
      subjects: ["Mathematics", "Physics"]
    }
  ];

  const filteredVideos = activeSubject
    ? videos.filter(video => video.subjects.includes(subjects.find(s => s.id === activeSubject)?.label))
    : videos;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Subject Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {subjects.map((subject) => (
          <SubjectButton
            key={subject.id}
            {...subject}
            isActive={activeSubject === subject.id}
            onClick={() => setActiveSubject(activeSubject === subject.id ? null : subject.id)}
          />
        ))}
      </div>

      {/* Results Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {activeSubject 
            ? `Showing ${filteredVideos.length} ${subjects.find(s => s.id === activeSubject)?.label} classes`
            : 'All Classes'}
        </h2>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>

      {/* Load More Button */}
      {filteredVideos.length > 0 && (
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Load More Classes
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveEducationalPlatform;