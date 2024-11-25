import React from 'react';

const NavigationTabs = () => {
  const tabs = [
    'Get started',
    'Educators',
    'Batch',
    'Store',
    'Subscription plan',
    'Success stories',
    'About exam'
  ];

  return (
    <div className="mt-16 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="py-4 px-1 border-b-2 border-transparent hover:border-blue-500 whitespace-nowrap"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
