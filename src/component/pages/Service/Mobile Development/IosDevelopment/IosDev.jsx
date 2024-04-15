/* eslint-disable react/jsx-key */
import React from 'react';
import IoSBuild from './IoSBuild/IoSBuild';
import IoSAppBuild from './IoSAppBuild/IoSAppBuild';
import AppCost from './AppCost/AppCost';
import CaseStudyIoS from './CaseStudyIoS/CaseStudyIoS';
import TechStackIoSDev from './TechStackIoSDev/TechStackIoSDev';
import AdvancedIoSAppContent from './AdvancedIoSAppContent/AdvancedIoSAppContent';
import ServicesHeroSection from '../../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import { iosdatas } from '../../../../../common/ServicesHeroSection/ServicesHeroSection';
import BlogSection from '../../../../ReUsableComponents/BlogSection/BlogSection';
import { iosdata } from '../../../../../common/blogPage/blogs';
import './IoSDev.scss';
import { IoSDevTitleDetails } from '../../../../../common/TitleBar';
import TitleBar from './../../../../ReUsableComponents/TitleBar/TitleBar';
import IoSQueBox from './IoSQueBox/IoSQueBox';
import { AdvanceIoSAppContent } from '../../../../../common/AdvanceTech';

const IosDev = () => {
  return (
    <>
      <TitleBar
        heroSection={IoSDevTitleDetails}
        extraClassName='ios-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      {iosdatas.map((data) => (
        <ServicesHeroSection {...data} />
      ))}
      <IoSBuild />
      <IoSAppBuild />
      <AppCost />
      <AdvancedIoSAppContent
        componentInfo={AdvanceIoSAppContent}
        title='Technologies for advanced iOS apps'
        detail='Without limiting your functional requirements, we use tools and services that ensure the best user experience in your final product.'
      />
      <CaseStudyIoS />
      <TechStackIoSDev />
      <BlogSection
        data={iosdata}
        header='iOS app development insights'
        isButton={true}
      />
      {
        /* <QuestionSection
        title='Questions you may have'
        info='Learn more about our iOS app development workflow.'
        fqa={iosFqa}
      /> */
        <IoSQueBox />
      }
    </>
  );
};

export default IosDev;
