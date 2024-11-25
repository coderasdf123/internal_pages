import React from 'react';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
const CollectionHeader = () => (
  <div className="mb-8">
    <div className="flex items-center gap-2 text-gray-600 mb-4">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
      <span className="uppercase text-sm font-medium">Collection</span>
    </div>
    <h1 className="text-2xl font-semibold text-gray-900 mb-3">Study Materials</h1>
   
    <button className="text-blue-600 flex items-center gap-1 hover:text-blue-700">
      View the collection
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);

const AnnouncementCard = ({ image, category, title, postedBy, bgColor }) => (
  <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
    <div className={`relative h-48 ${bgColor}`}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <div className="text-blue-600 text-sm font-medium mb-2">{category}</div>
      <h3 className="text-lg font-medium text-gray-900 mb-4 line-clamp-2">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Posted by</span>
          <span className="font-medium">{postedBy}</span>
        </div>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
);

const GoogleForIndia2024 = () => {
  const announcements = [
    {
      image: img1,
      category: "NCERT Solutions",
      title: "Detailed Chapter-wise Solutions, Formulas, and Explanations.",
      postedBy: "NNIIT",
      bgColor: "bg-yellow-100"
    },
    {
      image: img2,
      category: "Previous Year Questions",
      title: "Previous Year Question Papers with solutions and analysis.",
      postedBy: "NNIIT",
      bgColor: "bg-green-100"
    },
    {
      image: img3,
      category: "Important Questions Chapter-wise",
      title: "Driving large-scale impact for businesses and individuals through Gem...",
      postedBy: "NNIIT",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <CollectionHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((announcement, index) => (
          <AnnouncementCard key={index} {...announcement} />
        ))}
      </div>
    </div>
  );
};

export default GoogleForIndia2024;