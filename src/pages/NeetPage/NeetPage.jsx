// pages/NeetPage/NeetPage.jsx
import React from 'react';
//import NavigationTabs from "../../components/NavigationTabs/NavigationTabs";
import Bannerr from "../../components/Bannerr/Bannerr";
import EducationBanners1 from '../../components/EducationBanners/EducationBanners1';
import EducationFeatures from "../../components/EducationFeatures/EducationFeatures";
import InteractiveEducationalPlatform from "../../components/InteractiveEducationalPlatform/InteractiveEducationalPlatform";
import EducationPlatform from "../../components/EducationPlatform/EducationPlatform";
import JEEPromoSection from "../../components/JEEPromoSection/JEEPromoSection";
import ReferralBanner from "../../components/ReferralBanner/ReferralBanner";
import VideoClassesShowcase1 from '../../components/VideoClassesShowcase/VideoClassesShowcase1';

const NeetPage = () => {
  return (
    <div className="neet-page">
      {/*<NavigationTabs currentPage="Neet" />*/}
      <Bannerr />
       <EducationBanners1 />
      <EducationFeatures />
      <VideoClassesShowcase1 />
      <InteractiveEducationalPlatform />
      <ReferralBanner />
      <JEEPromoSection />
      <EducationPlatform />
    </div>
  );
};

export default NeetPage;