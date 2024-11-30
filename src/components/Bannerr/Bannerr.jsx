import React, { useState } from "react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Bannerr = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [slide1, slide2, slide3];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="relative w-full max-w-[90%] mx-auto my-70 px-10">
        <div className="relative w-full h-[300px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Remove extra comma
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-[100%] h-full flex-shrink-0 ${
                  index === currentIndex ? "scale-105 z-10" : "opacity-70 scale-90"
                } transition-all duration-300`}
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`} // Correct the alt syntax
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
            <button
              className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={handlePrevious}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={handleNext}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannerr;
