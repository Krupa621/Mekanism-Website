import React from 'react';
import './CrossPlatform.scss';
import CrossPlatformServices from './CrossPlatformServices/CrossPlatformServices';
import FullCycleCrossPlatform from './FullCycleCrossPlatform/FullCycleCrossPlatform';
import AdvantageOfCrossPlatform from './AdvantageOfCrossPlatform/AdvantageOfCrossPlatform';
import CrossPlatformSolution from './CrossPlatformSolution/CrossPlatformSolution';
import BookConsultaionSection from '../../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import HireAsCrossPlatform from './HireAsCrossPlatformDevelopment/HireAsCrossPlatform';
import BlogSection from '../../../../ReUsableComponents/BlogSection/BlogSection';
import ServicesHeroSection from '../../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import { crossservicedatas } from '../../../../../common/ServicesHeroSection/ServicesHeroSection';
import QuestionSection from '../../../../ReUsableComponents/QuestionSection/QuestionSection';
import { fqa } from '../../../../../common/Questions/FQA';
import { crossdata } from '../../../../../common/blogPage/blogs';
import { crossTitleDetails } from '../../../../../common/TitleBar';
import TitleBar from './../../../../ReUsableComponents/TitleBar/TitleBar';
import { crossbuildproject } from '../../../../../common/buildproject';
import { CrossplatformServices } from '../../../../../common/CrossPlatformservices';

function CrossPlatform() {
  return (
    <>
      <TitleBar
        heroSection={crossTitleDetails}
        extraClassName='cross-header'
        isFromArrow={true}
        isToArrow={true}
        isImage={false}
      />

      <div className='mt-80 crossplatform-container'>
        {crossservicedatas.map((crossservicedata, i) => (
          <ServicesHeroSection
            key={i}
            {...crossservicedata}
          />
        ))}
        <CrossPlatformServices
          title='Cross-Platform Services We Offer'
          detail='Cross-platform app development services that allow startups and established businesses to get high- performance mobile products faster and easier'
          CrossplatformServices={CrossplatformServices}
        />
        <FullCycleCrossPlatform />
        <AdvantageOfCrossPlatform />
        <CrossPlatformSolution />
        {crossbuildproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}
        <HireAsCrossPlatform />
        <BlogSection
          data={crossdata}
          title='Latest insights'
          isButton={true}
        />
        <QuestionSection
          title='Questions you may have'
          info='Singling out common points and possible difficulties which can be encountered in cross-platform mobile application development services'
          fqa={fqa}
        />
      </div>
    </>
  );
}

export default CrossPlatform;
