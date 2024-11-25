import React from 'react';

const ReferralBanner = () => {
  return (
    <div className="relative w-full min-w-full bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="relative w-full px-4 py-6 md:py-8 mx-auto overflow-hidden">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl space-y-4 z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Refer friends to win Amazon vouchers and Plus Subscription
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              For every successful referral win up to ₹2,500. Also, get 1 month plus subscription once.
            </p>
            <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Refer a friend
            </button>
          </div>

          {/* Gift Card Illustration */}
          <div className="relative hidden md:block flex-shrink-0 ml-8">
            <svg
              className="w-72 h-72"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Card */}
              <rect
                x="20"
                y="40"
                width="160"
                height="120"
                rx="10"
                fill="white"
                filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
              />
              
              {/* Ribbon */}
              <path
                d="M90 40 L110 40 L100 60 Z"
                fill="#4F46E5"
              />
              
              {/* Rupee Symbol */}
              <text
                x="100"
                y="110"
                fontSize="40"
                fontWeight="bold"
                fill="#4F46E5"
                textAnchor="middle"
              >
                ₹
              </text>
              
              {/* Plus Icon */}
              <g transform="translate(140, 60)">
                <circle cx="0" cy="0" r="15" fill="#4F46E5" />
                <path
                  d="M-8 0 H8 M0 -8 V8"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>
              
              {/* Decorative Stars */}
              {[...Array(5)].map((_, i) => (
                <g key={i} transform={`translate(${30 + i * 35}, ${30 + (i % 2) * 20})`}>
                  <path
                    d="M0 -5 L1.5 -1.5 L5 -1.5 L2.5 1.5 L3.5 5 L0 2.5 L-3.5 5 L-2.5 1.5 L-5 -1.5 L-1.5 -1.5 Z"
                    fill="#FFD700"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                </g>
              ))}
              
              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <circle
                  key={`sparkle-${i}`}
                  cx={40 + i * 20}
                  cy={140 - (i % 2) * 20}
                  r="2"
                  fill="#FFD700"
                  className="animate-ping"
                  style={{ animationDelay: `${i * 300}ms` }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-32 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      </div>
    </div>
  );
};

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

export default ReferralBanner;