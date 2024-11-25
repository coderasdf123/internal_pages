import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Bannerr = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Unacademy Utsav 2024",
      subtitle: "Join Nimbus Early Achiever's Batch for JEE Main and Advanced 2027",
      startDate: "Starts on November 18",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-blue-50/80 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h1>
          <h2 className="text-xl mb-4">{slides[currentSlide].subtitle}</h2>
          <p className="mb-6">{slides[currentSlide].startDate}</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            Enroll Now
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-gray-200 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bannerr;