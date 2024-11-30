import React from 'react';
//import NavigationTabs from "../../components/NavigationTabs/NavigationTabs";
import Bannerr from "../../components/Bannerr/Bannerr";
//import Slider from "../../components/Slider/Slider";
import EducationFeatures from "../../components/EducationFeatures/EducationFeatures";
import VideoClassesShowcase from "../../components/VideoClassesShowcase/VideoClassesShowcase";
import InteractiveEducationalPlatform from "../../components/InteractiveEducationalPlatform/InteractiveEducationalPlatform";
import JEEPromoSection from "../../components/JEEPromoSection/JEEPromoSection";
import ReferralBanner from "../../components/ReferralBanner/ReferralBanner";
import StickyCardComponent from '../../components/CourseCards/StickyCardComponent';
import ScholarshipBanner from '../../components/ScholarshipBanner/ScholarshipBanner.JSX';
import JEEExamLandingPage from '../../components/JEEExamLandingPage/JEEExamLandingPage';
import DelayedFormPopup from '../../components/DelayedFormPopup/DelayedFormPopup';
import FreeDemoComponent from '../../components/FreeDemoComponent/FreeDemoComponent';
import Footer from '../../components/Footer/Footer';

const IITJEEPage = () => {
  return (
    <div className="iit-jee-page">
      {/*<NavigationTabs />*/}
      {/* Page content */}
      <section id="get-started" className="my-20">
        <Bannerr />
        {/*<Slider/>*/}
        <DelayedFormPopup/>
      </section>
      <section id="features" className="my-20">
      <FreeDemoComponent />
      </section>
      <section id="batch" className="my-20">
        <JEEPromoSection />
      </section>
      <section id="educators" className="my-20">
      <ScholarshipBanner/>
        <EducationFeatures/>
        <VideoClassesShowcase/>
        <InteractiveEducationalPlatform />
      </section>
      <section id="success-stories" className="my-20">
        <ReferralBanner />
      </section>
      <section id="about-exam" className="my-20">
        <JEEExamLandingPage />
      </section>
      <StickyCardComponent />
      <Footer />
    </div>
  );
};

export default IITJEEPage;
