import React from 'react';
import { 
  Video, 
  Globe, 
  Users, 
  MessageCircle,
  Clock,
  Youtube,
  Check
} from 'lucide-react';

// More detailed world map SVG
const WorldMap = () => (
  <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
    <path
      d="M150,100 
         M217,79c0,0,6.7-4.4,11.8-4.4c5.1,0,10.2,1.5,15.3,1.5s12.4-5.1,17.5-5.1s8.7,2.2,13.8,2.2
         c5.1,0,10.2-2.2,15.3-2.2s11.6,3.6,16.7,3.6s7.3-3.6,12.4-3.6s13.1,2.2,18.2,2.2s8-2.2,13.1-2.2s12.4,4.4,17.5,4.4
         s9.5-4.4,14.6-4.4s10.2,2.2,15.3,2.2s11.6-2.2,16.7-2.2s8.7,3.6,13.8,3.6s10.2-3.6,15.3-3.6s11.6,2.2,16.7,2.2
         s8.7-2.2,13.8-2.2s10.2,4.4,15.3,4.4s11.6-4.4,16.7-4.4s8.7,1.5,13.8,1.5s12.4-5.1,17.5-5.1s8.7,2.2,13.8,2.2
         s10.2-2.2,15.3-2.2s11.6,3.6,16.7,3.6s7.3-3.6,12.4-3.6s13.1,2.2,18.2,2.2s8-2.2,13.1-2.2s12.4,4.4,17.5,4.4
         s9.5-4.4,14.6-4.4"
      fill="none"
      stroke="#CBD5E1"
      strokeWidth="2"
    />
    {/* North America */}
    <path
      d="M200,120 C250,110 300,130 350,120 C400,110 450,130 500,120"
      fill="#E2E8F0"
      stroke="#CBD5E1"
      strokeWidth="1"
    />
    {/* South America */}
    <path
      d="M280,280 C320,270 360,290 400,280 C440,270 480,290 520,280"
      fill="#E2E8F0"
      stroke="#CBD5E1"
      strokeWidth="1"
    />
    {/* Europe */}
    <path
      d="M480,140 C520,130 560,150 600,140 C640,130 680,150 720,140"
      fill="#E2E8F0"
      stroke="#CBD5E1"
      strokeWidth="1"
    />
    {/* Africa */}
    <path
      d="M480,240 C520,230 560,250 600,240 C640,230 680,250 720,240"
      fill="#E2E8F0"
      stroke="#CBD5E1"
      strokeWidth="1"
    />
    {/* Asia */}
    <path
      d="M700,160 C740,150 780,170 820,160 C860,150 900,170 940,160"
      fill="#E2E8F0"
      stroke="#CBD5E1"
      strokeWidth="1"
    />
    {/* Australia */}
    <path
      d="M800,320 C820,310 840,330 860,320 C880,310 900,330 920,320"
      fill="#E2E8F0"
      stroke="#CBD5E1"
      strokeWidth="1"
    />
    {/* Add dots for major cities/education hubs */}
    <circle cx="300" cy="150" r="3" fill="#CBD5E1" />
    <circle cx="500" cy="150" r="3" fill="#CBD5E1" />
    <circle cx="700" cy="180" r="3" fill="#CBD5E1" />
    <circle cx="600" cy="200" r="3" fill="#CBD5E1" />
    <circle cx="800" cy="250" r="3" fill="#CBD5E1" />
  </svg>
);

const ImpactInfographic = () => {
  const metrics = [
    {
      icon: Clock,
      value: "2.1+ crore",
      label: "hours of LIVE learning",
      color: "text-purple-600"
    },
    {
      icon: Youtube,
      value: "10+ lakh",
      label: "monthly YouTube views",
      color: "text-red-600"
    },
    {
      icon: MessageCircle,
      value: "25+ lakh",
      label: "doubts resolved on the app",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      value: "57+",
      label: "countries where students take LIVE classes",
      color: "text-green-600"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "Short animated videos",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "Daily LIVE classes",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: MessageCircle,
      title: "Unlimited doubt solving",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Impact. At <span className="text-orange-500">scale</span>
          </h1>
          <p className="text-xl text-gray-600">
            Making education affordable and accessible across the globe
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="font-bold text-3xl mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Map Section with Background */}
        <div className="relative mb-16 bg-white">
          {/* Background Map */}
          <div className="absolute inset-0 z-0">
            <WorldMap />
          </div>
          
          {/* Floating Avatars */}
          <div className="relative h-[400px] flex items-center justify-center z-10">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`absolute w-12 h-12 rounded-full bg-white shadow-lg overflow-hidden
                  ${index % 2 === 0 ? 'animate-bounce' : 'animate-pulse'}`}
                style={{
                  left: `${20 + index * 15}%`,
                  top: `${30 + (index % 3) * 20}%`,
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: '3s'
                }}
              >
                <img
                  src={`/api/placeholder/48/48`}
                  alt="Student avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className={`p-4 rounded-full ${feature.color} mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-center">{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* Brand Mark */}
        <div className="flex justify-center mt-16">
          <div className="bg-orange-500 rounded-full p-4">
            <Check className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactInfographic;