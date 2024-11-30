import React, { useEffect, useState } from 'react';

const StickyCardComponent = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoClassesShowcaseBottom = document.querySelector('.VideoClassesShowcase').getBoundingClientRect().bottom;
      const educationPlatformTop = document.querySelector('.EducationPlatform').getBoundingClientRect().top;

      setIsSticky(videoClassesShowcaseBottom <= 0 && educationPlatformTop > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white z-10 shadow-md transition-all duration-300 ${
        isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border-4 border-[#2962FF] rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">CRASH PRO PLUS</h2>
              <div className="flex items-center justify-between mb-4">
                <span className="line-through text-gray-500">₹25,999</span>
                <span className="text-3xl font-bold">₹19,999</span>
              </div>
              <p className="text-gray-700 mb-4">for 6 months</p>
              <p className="text-gray-700 mb-4">
                ₹3,334/month. <a href="#" className="text-blue-500">
                  See EMI options
                </a>
              </p>
              <button className="bg-[#2962FF] hover:bg-[#0D47A1] text-white font-bold py-2 px-4 rounded">
                Buy Full Course
              </button>
              <div className="mt-4">
                <p className="font-medium">Everything in CRASH PRO+</p>
                <ul className="list-disc pl-6">
                  <li>Personal academic mentor for personalised guidance</li>
                  <li>Personal teacher</li>
                  <li>Mentorship</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-4 border-[#2962FF] rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">CRASH PRO</h2>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold">₹9,999</span>
              </div>
              <p className="text-gray-700 mb-4">for 6 months</p>
              <p className="text-gray-700 mb-4">₹1,667/month</p>
              <button className="bg-[#2962FF] hover:bg-[#0D47A1] text-white font-bold py-2 px-4 rounded">
                Buy Full Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCardComponent;