import React from 'react';

const CourseCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="border-4 border-[#2962FF] rounded-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">CRASH PRO PLUS</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="line-through text-gray-500">₹25,999</span>
            <span className="text-3xl font-bold">₹19,999</span>
          </div>
          <p className="text-gray-700 mb-4">for 6 months</p>
          <p className="text-gray-700 mb-4">₹3,334/month. <a href="#" className="text-blue-500">See EMI options</a></p>
          <button className="bg-[#2962FF] hover:bg-[#0D47A1] text-white font-bold py-2 px-4 rounded">Buy Full Course</button>
          <p className="text-green-500 mt-4">Batch start date: 25 Nov 2024</p>
          <FeatureList features={[
            'LIVE classes by master teachers',
            'Class',
          ]} />
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
          <button className="bg-[#2962FF] hover:bg-[#0D47A1] text-white font-bold py-2 px-4 rounded">Buy Full Course</button>
          <p className="text-green-500 mt-4">Batch start date: 25 Nov 2024</p>
          <FeatureList features={[
            'LIVE classes by master teachers',
            'LIVE in-class doubt solving',
            'LIVE in-class quizzes and leaderboard',
            'LIVE discussion of practice questions',
            'LIVE discussion of previous year questions',
            'Class',
          ]} />
          <FeatureList features={[
            'Printed study material delivered to your home (Physical JEE Crash Books)',
            '24*7 Instant 1-on-1 doubt solving via text, voice & video call',
            'Personal academic mentor for personalised guidance',
            'After Class',
          ]} />
        </div>
      </div>

      <div className="border-4 border-[#2962FF] rounded-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">CRASH PRIME</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold">₹4,999</span>
          </div>
          <p className="text-gray-700 mb-4">for 3 months</p>
          <p className="text-gray-700 mb-4">₹1,667/month</p>
          <button className="bg-[#2962FF] hover:bg-[#0D47A1] text-white font-bold py-2 px-4 rounded">Buy Full Course</button>
          <p className="text-green-500 mt-4">Batch start date: 25 Nov 2024</p>
          <FeatureList features={[
            'LIVE classes by master teachers',
            'LIVE in-class doubt solving',
            'LIVE in-class quizzes and leaderboard',
            'LIVE discussion of practice questions',
            'LIVE discussion of previous year questions',
            'Class',
          ]} />
          <FeatureList features={[
            'Printed study material delivered to your home (Physical JEE Crash Books)',
            'x 24*7 Instant 1-on-1 doubt solving via text, voice & video call',
            'x Personal academic mentor for personalised guidance',
            'After Class',
          ]} />
        </div>
      </div>
    </div>
  );
};

const FeatureList = ({ features }) => {
  return (
    <div className="px-6 py-4">
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.startsWith('LIVE') ? (
              <span className="text-red-500 font-bold mr-2">LIVE</span>
            ) : feature.startsWith('x') ? (
              <span className="text-gray-400 font-bold mr-2">x</span>
            ) : (
              <span className="text-green-500 font-bold mr-2">✔</span>
            )}
            {feature.replace('LIVE ', '').replace('x ', '')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCards;