import React from 'react';
import { Percent } from 'lucide-react';

const EducationBanners = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mb-6">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === 0 ? 'bg-gray-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="text-center space-y-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Crack IIT JEE with NNIIT
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-gray-600">
          Over{' '}
          <span className="text-emerald-500 font-medium">10 crore</span>{' '}
          learners trust us for online and offline coaching
        </p>

        {/* CTA Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Try learning for free
          </button>
          
          <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            View subscription plans
          </button>
        </div>

        {/* Subscription Offers Link */}
        <div className="flex justify-center items-center gap-2 text-orange-500 hover:text-orange-600 cursor-pointer">
          <Percent size={20} />
          <span className="font-medium">View subscription offers</span>
        </div>
      </div>
    </div>
  );
};

export default EducationBanners;