import React from 'react';
import WebSiteApp from './WebSiteAPP/webSiteApp';
import './WebDevelop.scss';
import WebFeatured from './WebFeatured/WebFeatured';
import WebTechApp from './WebTechApps/WebTechApp';
import WebAdvanceTechApp from './WebAdvanceTechApp/WebAdvanceTechApp';
import QuestionSection from '../../../../ReUsableComponents/QuestionSection/QuestionSection';
import { webFqa } from '../../../../../common/Questions/FQA';
import { webdevsdatas } from '../../../../../common/ServicesHeroSection/ServicesHeroSection';
import ServicesHeroSection from '../../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import BlogSection from '../../../../ReUsableComponents/BlogSection/BlogSection';
import { webdata } from '../../../../../common/blogPage/blogs';
import { WebDevTitleDetails } from '../../../../../common/TitleBar';
import TitleBar from '../../../../ReUsableComponents/TitleBar/TitleBar';
import BookConsultaionSection from '../../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import { webbuildproject } from '../../../../../common/buildproject';
import WebSupport from './WebSupport/WebSupport';

const WebDevelop = () => {
  return (
    <>
      <TitleBar
        heroSection={WebDevTitleDetails}
        extraClassName='mobile-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      {webdevsdatas.map((data, i) => (
        <ServicesHeroSection
          key={i}
          {...data}
        />
      ))}
      <WebSupport />
      <WebSiteApp />

      {webbuildproject.map((data, i) => (
        <BookConsultaionSection
          key={i}
          {...data}
        />
      ))}
      <WebFeatured />
      <WebTechApp
        header='Technologies for advanced web apps'
        detail='We create responsive web applications and sites leveraging the most robust technologies in the industry to help you boost your business.'
      />
      <WebAdvanceTechApp />
      <BlogSection
        data={webdata}
        header='Web development insights'
        isButton={true}
      />
      <QuestionSection
        title='Questions you may have'
        info='Learn more about our web development workflow.'
        fqa={webFqa}
      />
    </>
  );
};

export default WebDevelop;
