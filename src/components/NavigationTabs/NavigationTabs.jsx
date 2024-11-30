/*import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const NavigationTabs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  // Function to scroll to the specified section
  const handleTabClick = (tab) => {
    if (tab === 'dropdown') {
      setDropdownOpen((prevState) => !prevState);
    } else {
      setActiveTab(tab);
      setDropdownOpen(false);
      const section = document.getElementById(tab);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Hook to set the active tab based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const onScroll = () => {
      let currentSection = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      if (currentSection) {
        setActiveTab(currentSection);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* Navigation Bar *//*}
      <nav className="fixed top-[56px] left-0 w-full z-10 bg-white/70 shadow-lg backdrop-blur-lg">
        <div className="flex justify-start items-center space-x-3 py-2 max-w-7xl mx-auto pl-[2.15cm] relative">
          {/* Dropdown Menu *///}
          //{/*<div className="relative">
//             <button
//               className="flex items-center text-gray-700 hover:text-black hover:font-semibold transition-colors duration-200"
//               onClick={() => handleTabClick('dropdown')}
//             >
//               IIT-JEE
//               <IoMdArrowDropdown className="ml-1" />
//             </button>
//             {/* Dropdown options */}
//             {dropdownOpen && (
//               <div className="absolute top-full mt-2 bg-white shadow-md rounded-lg w-40 z-20">
//                 {['NEET', 'UPSC', 'GATE'].map((option, index) => (
//                   <button
//                     key={index}
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
//                     onClick={() => {
//                       handleTabClick(option.toLowerCase().replace(' ', '-'));
//                     }}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Navigation Tabs */}
//           {['Get started', 'Features', 'Batch', 'Educators', 'Success stories', 'About exam'].map((tab, index) => (
//             <button
//               key={index}
//               onClick={() => handleTabClick(tab.toLowerCase().replace(' ', '-'))}
//               className={`text-gray-700 hover:text-black hover:font-semibold transition-colors duration-200 ${
//                 activeTab === tab.toLowerCase().replace(' ', '-') ? 'border-b-2 border-blue-500' : ''
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavigationTabs;
