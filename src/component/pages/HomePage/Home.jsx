import React from 'react';
import CaseStudiesContainer from './CaseStudies/CaseStudiesContainer';
// import TechStack from './TechStack/TechStack';
import FeaturePartner from './FeaturePartner/FeaturePartner';
import AboutUs from './AboutUs/AboutUs';
import DevSection from './DevSection/DevSection';
import CaseIndustry from './CaseIndustry/CaseIndustry';
import { HomeTitleDetails } from '../../../common/TitleBar';
import './Home.scss';
import TitleBar from '../../ReUsableComponents/TitleBar/TitleBar';
import BlogSection from '../../ReUsableComponents/BlogSection/BlogSection';
import { homedata } from '../../../common/blogPage/blogs';

const Home = () => {
  return (
    <div className='HomePage'>
      <TitleBar
        heroSection={HomeTitleDetails}
        extraClassName='home-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={true}
      />
      <div className='home-container'>
        <DevSection />
        <CaseStudiesContainer />
        <CaseIndustry />
        {/* <TechStack /> */}
        <FeaturePartner />
        <BlogSection
          data={homedata}
          header='Latest insights'
          title='Latest insights'
          isButton={true}
        />
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
