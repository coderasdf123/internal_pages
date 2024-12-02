import React from 'react';
//import NavigationTabs from "../../components/NavigationTabs/NavigationTabs";
import Bannerr from "../../components/Bannerr/Bannerr";
//import Slider from "../../components/Slider/Slider";
import EducationFeatures from "../../components/EducationFeatures/EducationFeatures";
import VideoClassesShowcase from "../../components/VideoClassesShowcase/VideoClassesShowcase";
import InteractiveEducationalPlatform from "../../components/InteractiveEducationalPlatform/InteractiveEducationalPlatform";
import JEEPromoSection from "../../components/JEEPromoSection/JEEPromoSection";
import ReferralBanner from "../../components/ReferralBanner/ReferralBanner";
//import StickyCardComponent from '../../components/CourseCards/StickyCardComponent';
import ScholarshipBanner from '../../components/ScholarshipBanner/ScholarshipBanner.JSX';
import JEEExamLandingPage from '../../components/JEEExamLandingPage/JEEExamLandingPage';
import DelayedFormPopup from '../../components/DelayedFormPopup/DelayedFormPopup';
import FreeDemoComponent from '../../components/FreeDemoComponent/FreeDemoComponent';
import Footer from '../../components/Footer/Footer';

const IITJEEPage = () => {
  return (
    <div className="iit-jee-page">
      <section id="get-started" className="my-4">
        <Bannerr />
        <DelayedFormPopup/>
      </section>
      <section id="features" className="my-0">
      <FreeDemoComponent />
      </section>
      <section id="batch" className="my-0">
        <JEEPromoSection />
      </section>
      <section id="educators" className="my-0">
      <ScholarshipBanner/>
        <EducationFeatures/>
        <VideoClassesShowcase/>
        <InteractiveEducationalPlatform />
      </section>
      <section id="success-stories" className="my-0">
        <ReferralBanner />
      </section>
      <section id="about-exam" className="my-0">
        <JEEExamLandingPage />
      </section>
      {/*<StickyCardComponent />*/}
      <Footer />
    </div>
  );
};

export default IITJEEPage;
