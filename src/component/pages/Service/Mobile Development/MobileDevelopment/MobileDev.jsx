/* eslint-disable react/jsx-key */
import React from 'react';
import IoSAndroidDevSection from './IoSAndroidDev/IoSAndroidDevSection';
// import AppCost from './AppCost/AppCost';
import FeatureDev from './FeatureDev/FeatureDev';
import TechStackApp from './TechStackApp/TechStackApp';
import QuestionSection from '../../../../ReUsableComponents/QuestionSection/QuestionSection';
import { fqa } from '../../../../../common/Questions/FQA';
import ServicesHeroSection from '../../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import { mobilesdatas } from '../../../../../common/ServicesHeroSection/ServicesHeroSection';
import BlogSection from '../../../../ReUsableComponents/BlogSection/BlogSection';
import { mobiledata } from '../../../../../common/blogPage/blogs';
import { MobDevTitleDetails } from '../../../../../common/TitleBar';
import './MobileDev.scss';
import TitleBar from '../../../../ReUsableComponents/TitleBar/TitleBar';
import BookConsultaionSection from '../../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import { mobilebuildproject } from '../../../../../common/buildproject';
import { CaseStudyContent } from '../../../../../common/CaseStudiesData';

const MobileDev = () => {
  return (
    <>
      <TitleBar
        heroSection={MobDevTitleDetails}
        extraClassName='mobile-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      <div className='mobile-container'>
        {mobilesdatas.map((data) => (
          <ServicesHeroSection {...data} />
        ))}
        <IoSAndroidDevSection />

        {mobilebuildproject.map((data) => (
          <BookConsultaionSection {...data} />
        ))}
        <FeatureDev
          componentInfo={CaseStudyContent}
          isFrom={true}
          showList={false}
          title='Featured Mobile Development Projects'
        />
        <TechStackApp />
        <BlogSection
          data={mobiledata}
          header='Mobile app development insights'
          isButton={false}
        />
        <QuestionSection
          title='Questions you may have'
          info='Singling out common points and possible difficulties which can be encountered in cross-platform mobile application development services'
          fqa={fqa}
        />
      </div>
    </>
  );
};

export default MobileDev;
