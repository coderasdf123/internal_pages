import React from "react";/*
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Inspire from "./components/Inspire/Inspire";
import AutoSlideCards from "./components/AutoSlideCards/AutoSlideCards";
import TodaySchedule from "./components/TodaySchedule/TodaySchedule";
import StudyMaterials from "./components/StudyMaterials/StudyMaterials";

// Pages for Routes
import NcertSolutions from "./components/Pages/NcertSolutions";
import Pyqs from "./components/Pages/Pyqs";
import SamplePapers from "./components/Pages/SamplePapers";
import ImportantQuestions from "./components/Pages/ImportantQuestions";
import EducationFeatures from "./components/EducationFeatures/EducationFeatures";
import GoogleForIndia2024 from "./components/GoogleForIndia2024/GoogleForIndia2024";
import LiveClasses from "./components/Pages/LiveClasses"; // New
import TopEducators from "./components/Pages/TopEducators"; // New

    <Router>
      
        <Routes>
          {/* Default/Home Route *//*}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Banner />
                <Subscribe />
                <Banner2 />
                <TodaySchedule />
                <Inspire />
                <AutoSlideCards />
                
                <GoogleForIndia2024 />
                <Footer />
              </>
            }
          />

          {/* Dynamic Pages *//*}
          <Route path="/ncert-solutions" element={<NcertSolutions />} />
          <Route path="/pyqs" element={<Pyqs />} />
          <Route path="/sample-papers" element={<SamplePapers />} />
          <Route path="/important-questions" element={<ImportantQuestions />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/top-educators" element={<TopEducators />} />
        </Routes>
      </main>
    </Router>
  );
};*/
import Navbar from "./components/Navbar/Navbar";
import NavigationTabs from "./components/NavigationTabs/NavigationTabs";
import Bannerr from "./components/Bannerr/Bannerr";
import EducationBanners from "./components/EducationBanners/EducationBanners";
import EducationFeatures from "./components/EducationFeatures/EducationFeatures";
import VideoClassesShowcase from "./components/VideoClassesShowcase/VideoClassesShowcase";
import InteractiveEducationalPlatform from "./components/InteractiveEducationalPlatform/InteractiveEducationalPlatform";

import EducationPlatform from "./components/EducationPlatform/EducationPlatform";
import JEEPromoSection from "./components/JEEPromoSection/JEEPromoSection";
import ImpactInfographic from "./components/ImpactInfographic/ImpactInfographic";
import ReferralBanner from "./components/ReferralBanner/ReferralBanner";
//import EducatorsSection from "./components/EducatorsSection/EducatorsSection.JSX";



const App = () => {
  return (
    <>
    <main className="overflow-x-hidden bg-white text-dark"></main>
    <Navbar />
    <NavigationTabs />
    <Bannerr />
    <EducationBanners />
    <EducationFeatures />
    <VideoClassesShowcase />
    <ReferralBanner />
    <InteractiveEducationalPlatform />
    <JEEPromoSection />
    <EducationPlatform />
    <ImpactInfographic />
    </>
  );
};

export default App;
