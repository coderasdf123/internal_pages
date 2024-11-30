
// pages/GATEPage/GATEPage.jsx
import React from 'react';
//import NavigationTabs from "../../components/NavigationTabs/NavigationTabs";
import Bannerr from "../../components/Bannerr/Bannerr";
import EducationBanners3 from "../../components/EducationBanners/EducationBanners3";
import EducationFeatures from "../../components/EducationFeatures/EducationFeatures";
import VideoClassesShowcase from "../../components/VideoClassesShowcase/VideoClassesShowcase";
import InteractiveEducationalPlatform from "../../components/InteractiveEducationalPlatform/InteractiveEducationalPlatform";
import EducationPlatform from "../../components/EducationPlatform/EducationPlatform";
import JEEPromoSection from "../../components/JEEPromoSection/JEEPromoSection";
import ReferralBanner from "../../components/ReferralBanner/ReferralBanner";

const GatePage = () => {
  return (
    <div className="gate-page">
      {/*<NavigationTabs />*/}
      <Bannerr />
      <EducationBanners3 />
      <EducationFeatures />
      <VideoClassesShowcase />
      <InteractiveEducationalPlatform />
      <ReferralBanner />
      <JEEPromoSection />
      <EducationPlatform />
    </div>
  );
};

export default GatePage;