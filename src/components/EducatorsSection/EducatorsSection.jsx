import React from 'react';
import { Trophy, Users, Clock, Eye, ChevronRight, Gift, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
    <Icon className="w-5 h-5 text-emerald-600" />
    <span className="text-sm text-gray-700">{text}</span>
  </div>
);

const EducatorCard = ({ name, expertise, watchMinutes, followers, hasLegendBadge, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative">
      <img
        src="/api/placeholder/400/300"
        alt={name}
        className="w-full h-48 object-cover"
      />
      {hasLegendBadge && (
        <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          LEGEND
        </div>
      )}
    </div>
    
    <div className="p-4 space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{expertise}</p>
      </div>
      
      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{watchMinutes}M watch mins</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{followers}K followers</span>
        </div>
      </div>
      
      <button className="w-full px-4 py-2 text-emerald-600 font-medium border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
        View Profile
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const ReferralBanner = () => (
  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 md:p-8 my-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Refer friends to win Amazon vouchers and Plus Subscription
        </h2>
        <p className="text-gray-600">
          For every successful referral win up to ₹2,500. Also, get 1 month plus subscription once.
        </p>
        <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
          <Gift className="w-5 h-5" />
          Refer a friend
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="hidden md:block">
        <img
          src="/api/placeholder/200/200"
          alt="Amazon Gift Card"
          className="w-48 h-48 object-contain"
        />
      </div>
    </div>
  </div>
);

const EducatorsSection = () => {
  const features = [
    { icon: Trophy, text: "Proven history of delivering results" },
    { icon: Users, text: "Mentored past rankers" },
    { icon: Eye, text: "Unique style of teaching" },
  ];

  const educators = [
    {
      name: "Piyush Maheshwari",
      expertise: "Inorganic Chemistry Expert | 15+ years experience",
      watchMinutes: 196,
      followers: 90,
      hasLegendBadge: true,
    },
    {
      name: "Brijesh Jindal",
      expertise: "Physical Chemistry | Top Rankers Mentor",
      watchMinutes: 231,
      followers: 87,
      hasLegendBadge: true,
    },
    {
      name: "Mohammad Kashif Alam",
      expertise: "JEE Star Faculty | 6000+ Top Performers",
      watchMinutes: 207,
      followers: 85,
      hasLegendBadge: false,
    },
    {
      name: "Vineet Loomba",
      expertise: "Mathematics Expert | Achieved AIR 33 & 34",
      watchMinutes: 266,
      followers: 157,
      hasLegendBadge: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Educators Section */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            India's top educators to learn from
          </h2>
          <div className="flex flex-wrap gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educators.map((educator, index) => (
            <EducatorCard key={index} {...educator} />
          ))}
        </div>
      </div>

      {/* Referral Banner */}
      <ReferralBanner />
    </div>
  );
};

export default EducatorsSection;