import React from 'react';
import { Phone, Mail, Download, Smartphone, Book, Users, Clock, Play } from 'lucide-react';

const EducationPlatform = () => {
  return (
    <div className="w-full">
      {/* Promotional Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold mb-8">
              Online preparation like never before
            </h1>
            
            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-lg">Interactive live classes</span>
              </div>
              <div className="flex items-center space-x-4">
                <Book className="w-6 h-6 text-blue-600" />
                <span className="text-lg">Mock tests and practice questions</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="text-lg">High-quality notes</span>
              </div>
              <div className="flex items-center space-x-4">
                <Play className="w-6 h-6 text-blue-600" />
                <span className="text-lg">Doubt solving</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>App Store</span>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Google Play</span>
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative h-[600px]">
            {/* First Phone */}
            <div className="absolute right-0 top-0 w-64 h-[500px] bg-white rounded-3xl shadow-xl p-4">
              <div className="w-full h-full bg-gray-100 rounded-2xl p-4">
                <h3 className="text-lg font-semibold mb-4">Dashboard</h3>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Today's Schedule</p>
                    <p className="font-medium">Physics Live Class - 4:00 PM</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Progress</p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                      <div className="w-3/4 bg-blue-600 h-2 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Phone */}
            <div className="absolute left-0 top-20 w-64 h-[500px] bg-white rounded-3xl shadow-xl p-4">
              <div className="w-full h-full bg-gray-100 rounded-2xl p-4">
                <h3 className="text-lg font-semibold mb-4">Profile</h3>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Watch Minutes</p>
                    <p className="font-medium">1,234 minutes</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Courses</p>
                    <p className="font-medium">5 Active Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Branding */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">NNIIT</h2>
              <p className="text-gray-400 mb-6">
                Democratizing education and making it accessible to all
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm">
                  App Store
                </button>
                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm">
                  Google Play
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>User Guidelines</li>
                <li>Refund Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Popular Goals</h3>
              <ul className="space-y-2 text-gray-400">
                <li>IIT JEE</li>
                <li>UPSC</li>
                <li>NEET UG</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <Phone className="w-5 h-5" />
                <span>+91 8585858585</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5" />
                <span>support@eduplatform.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducationPlatform;