import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown, IoMdMenu } from 'react-icons/io';
import { motion } from 'framer-motion';
import { IoCallOutline } from 'react-icons/io5';
import Logo from '../../assets/nniit_logo.png';

const NavbarMenu = [
  {
    id: 3,
    title: "Why Only NNIIT",
    link: "#",
  },
  {
    id: 4,
    title: "Study Material",
    link: "#",
  },
  {
    id: 5,
    title: "More",
    link: "#",
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (menuId) => {
    setOpenDropdown(openDropdown === menuId ? null : menuId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <div className="relative">
        <nav
          className={`fixed top-0 w-full z-20 transition-all duration-300 ${
            isScrolled ? 'bg-white/70 shadow-lg backdrop-blur-md' : 'bg-transparent'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="container flex justify-between items-center"
          >
            {/* Logo section */}
            <div className="flex items-center">
              <img src={Logo} alt="NNIIT Logo" className="h-10 w-15 mr-1" />
            </div>

            {/* Menu section */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-3 text-sm py-1">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id} className="relative">
                    <div
                      onClick={() => menu.subMenu && toggleDropdown(menu.id)}
                      className="py-1 px-2 hover:text-secondary relative group flex items-center cursor-pointer"
                    >
                      {menu.title}
                      {menu.subMenu && <IoMdArrowDropdown className="ml-1" />}
                    </div>
                    {menu.subMenu && openDropdown === menu.id && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                        {menu.subMenu.map((subItem, index) => (
                          <a
                            key={index}
                            href={subItem.path}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
                <button
                  type="submit"
                  className="primary-btn flex items-center gap-2 group justify-center"
                  onClick={() =>
                    window.open('https://calendar.app.google/ACitve3sDuj7vWWt5', '_blank')
                  }
                >
                  Book a Free Demo
                  <IoCallOutline className="text-xl animate-[phone-ring_1s_infinite]" />
                </button>
                <button
                  type="button"
                  className="primary-btn flex items-center gap-3 group px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full group-hover:bg-orange-500 transition duration-300">
                    <IoCallOutline className="text-gray-800 text-xl group-hover:text-white transition duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Talk to our experts</p>
                    <p className="text-lg font-semibold text-gray-800">+91 9876543210</p>
                  </div>
                </button>
                <button
                  className="primary-btn px-3 py-1 text-md"
                  onClick={() =>
                    window.open('https://nniit.com/signup', '_blank')
                  }
                >
                  Sign In
                </button>
              </ul>
            </div>

            {/* Mobile Hamburger menu section */}
            <div className="lg:hidden">
              <IoMdMenu className="text-4xl" />
            </div>
          </motion.div>
        </nav>
      </div>

      {/* NavigationTabs Component */}
      <NavigationTabs />
    </>
  );
};

const NavigationTabs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

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
      {/* Navigation Bar */}
      <nav className="fixed top-[56px] left-0 w-full z-20 bg-white/70 shadow-lg backdrop-blur-lg">
        <div className="flex justify-start items-center space-x-3 py-2 max-w-7xl mx-auto pl-[2.15cm] relative">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-black hover:font-semibold transition-colors duration-200"
              onClick={() => handleTabClick('dropdown')}
            >
              IIT-JEE
              <IoMdArrowDropdown className="ml-1" />
            </button>
            {/* Dropdown options */}
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-md rounded-lg w-40 z-20">
                {['NEET', 'UPSC', 'GATE'].map((option, index) => (
                  <button
                    key={index}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      handleTabClick(option.toLowerCase().replace(' ', '-'));
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Tabs */}
          {['Get started', 'Features', 'Batch', 'Educators', 'Success stories', 'About exam'].map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(tab.toLowerCase().replace(' ', '-'))}
              className={`text-gray-700 hover:text-black hover:font-semibold transition-colors duration-200 ${
                activeTab === tab.toLowerCase().replace(' ', '-') ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
