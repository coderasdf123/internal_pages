import React from 'react';
import { 
  BookOpen, 
  Video, 
  Users, 
  Star, 
  Clock, 
  ChevronRight,
  BookCheck,
  FileText,
  Globe
} from 'lucide-react';

const JEEPromoSection = () => {
  // Sample avatar images using placeholder API
  const avatars = [1, 2, 3, 4];
  
  return (
    <div className="w-full bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">
            Crack IIT JEE with our full-syllabus batches
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex items-center justify-center space-x-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-lg">Best for full syllabus preparation</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Video className="w-8 h-8 text-blue-600" />
              <span className="text-lg">Live & recorded online classes</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="w-8 h-8 text-blue-600" />
              <span className="text-lg">Curated by best educators</span>
            </div>
          </div>
        </div>

        {/* Learner Activity Section */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {avatars.map((id) => (
                <div key={id} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={`/api/placeholder/40/40`}
                    alt="Learner avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-medium">1.7K learners explored a batch today</span>
            </div>
          </div>
        </div>

        {/* Recommended Batch Card */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Recommended batch for you</h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Batch Header */}
            <div className="relative h-48 bg-gray-100">
              <img 
                src="/api/placeholder/800/300"
                alt="Batch educators"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Hinglish
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  Full syllabus
                </span>
              </div>
            </div>

            {/* Batch Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                Aarambh Batch for JEE Main and Advanced 2026
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <BookCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span>Full IIT JEE syllabus completion</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span>Topic-wise full syllabus notes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span>Live doubt solving sessions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Video className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span>Recorded video lectures</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-6">
                <div>
                  <p className="text-gray-600">Lead Educator</p>
                  <p className="font-semibold text-lg">Vineet Loomba</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Clock className="inline-block w-4 h-4 text-orange-500 mr-1" />
                    <span className="text-orange-500">Starts in 30 days</span>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                    <span>View batch details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JEEPromoSection;