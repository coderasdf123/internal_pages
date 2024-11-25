import React, { useState } from 'react';
import { ChevronDown, Search, Phone } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['IIT-JEE', 'NEET', 'UPSC', 'GATE'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-blue-600">NNIIT</div>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-1 px-3 py-2 rounded hover:bg-gray-100"
            >
              <span>IIT JEE</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 py-2 w-48">
                {options.map((option) => (
                  <button
                    key={option}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses, test series and educators"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-600">
            <Phone className="h-5 w-5" />
            <span>Talk to our experts</span>
          </button>
          <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
            M
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
