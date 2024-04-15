/* eslint-disable react/jsx-key */
import React from 'react';
import AppCost from '../IosDevelopment/AppCost/AppCost';
import AdvanceAndroidApp from './AdvanceAndroidApp/AdvanceAndroidApp';
import CaseStudyAndroid from './CaseStudyAndroid/CaseStudyAndroid';
import TechStakeAndroidDev from './TechStakeAndroidDev/TechStakeAndroidDev';
import AndroidAppBuild from './AndroidBuild/AndroidAppBuild';
import QuestionSection from '../../../../ReUsableComponents/QuestionSection/QuestionSection';
import { androidFqa } from '../../../../../common/Questions/FQA';
import ServicesHeroSection from '../../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import { androiddatas } from '../../../../../common/ServicesHeroSection/ServicesHeroSection';
import { androiddata } from '../../../../../common/blogPage/blogs';
import BlogSection from '../../../../ReUsableComponents/BlogSection/BlogSection';
import './AndroidDev.scss';
import { AndroidDevTitleDetails } from '../../../../../common/TitleBar';
import TitleBar from './../../../../ReUsableComponents/TitleBar/TitleBar';

const AndroidDev = () => {
  return (
    <div>
      <TitleBar
        heroSection={AndroidDevTitleDetails}
        extraClassName='android-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      {androiddatas.map((data) => (
        <ServicesHeroSection {...data} />
      ))}
      <AndroidAppBuild />
      <AppCost />
      <AdvanceAndroidApp />
      <CaseStudyAndroid />
      <TechStakeAndroidDev />
      <BlogSection
        data={androiddata}
        header='Android app development insights'
        isButton={true}
      />
      <QuestionSection
        title='Questions you may have'
        info='Singling out common points and possible difficulties which can be encountered in cross-platform mobile application development services'
        fqa={androidFqa}
      />
    </div>
  );
};

export default AndroidDev;
