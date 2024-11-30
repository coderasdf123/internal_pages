// pages/UPSCPage/UPSCPage.jsx
import React from 'react';
//import NavigationTabs from "../../components/NavigationTabs/NavigationTabs";
import Bannerr from "../../components/Bannerr/Bannerr";
import EducationBanners2 from "../../components/EducationBanners/EducationBanners2";    
import EducationFeatures from "../../components/EducationFeatures/EducationFeatures";
import InteractiveEducationalPlatform from "../../components/InteractiveEducationalPlatform/InteractiveEducationalPlatform";
import EducationPlatform from "../../components/EducationPlatform/EducationPlatform";
import JEEPromoSection from "../../components/JEEPromoSection/JEEPromoSection";
import ReferralBanner from "../../components/ReferralBanner/ReferralBanner";
import VideoClassesShowcase2 from '../../components/VideoClassesShowcase/VideoClassesShowcase2';


const UpscPage = () => {
  return (
    <div className="upsc-page">
      {/*<NavigationTabs />*/}
      <Bannerr />
      <EducationBanners2 />
      <EducationFeatures />
      <VideoClassesShowcase2 />
      <InteractiveEducationalPlatform />
      <ReferralBanner />
      <JEEPromoSection />
      <EducationPlatform />
    </div>
  );
};

export default UpscPage;