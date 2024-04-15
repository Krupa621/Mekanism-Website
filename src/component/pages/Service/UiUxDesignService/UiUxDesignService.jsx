import React from 'react';
import './UiUxDesignService.scss';
import TitleBar from '../../../ReUsableComponents/TitleBar/TitleBar';
import { uiuxTitleDetails } from '../../../../common/TitleBar';
import ServicesHeroSection from '../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import { uiuxdatas } from '../../../../common/ServicesHeroSection/ServicesHeroSection';
import DesignForMobileWeb from './DesignForMobileWeb/DesignForMobileWeb';
import { designcard } from '../../../../common/DegineMobileCard';
import Recognition from './Recognition/Recognition';
import { recognitionlogo } from '../../../../common/Recognitonlogo';
import BookConsultaionSection from '../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import { uiuxbuildproject } from '../../../../common/buildproject';
import BlogSection from '../../../ReUsableComponents/BlogSection/BlogSection';
import { uiuxdata } from '../../../../common/blogPage/blogs';
import QuestionSection from '../../../ReUsableComponents/QuestionSection/QuestionSection';
import { uiuxFqa } from '../../../../common/Questions/FQA';
import FeatureDev from '../Mobile Development/MobileDevelopment/FeatureDev/FeatureDev';
import { CaseStudyContent } from '../../../../common/CaseStudiesData';
import TimeTested from './TimeTestedSection/TimeTested';
import { uiuxtimetested } from '../../../../common/TimeTested';
import UiUxDesignProcess from './UiUxDesignProcess/UiUxDesignProcess';
import DesignTools from './DesignTools/DesignTools';

function UiUxDesignService() {
  return (
    <div>
      <TitleBar
        heroSection={uiuxTitleDetails}
        extraClassName='uiux-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      <div className='uiux-container'>
        {uiuxdatas.map((data, i) => (
          <ServicesHeroSection
            key={i}
            {...data}
          />
        ))}
        <DesignForMobileWeb designcard={designcard} />
        <Recognition recognitionlogo={recognitionlogo} />
        <TimeTested uiuxtimetested={uiuxtimetested} />
        <FeatureDev
          componentInfo={CaseStudyContent}
          isFrom={true}
          showList={false}
          listStyle='none'
          title='Best Projects Within Our UI/UX Design Services'
        />
        <UiUxDesignProcess />
        {uiuxbuildproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}
        <DesignTools />
        <BlogSection
          data={uiuxdata}
          header='UI/UX design insights'
          title='UI/UX design insights'
          isButton={false}
        />
        <QuestionSection
          title='Questions you may have'
          info='We`ve put together popular questions related to UI/UX design workflow so you can find quick answers to common issues'
          fqa={uiuxFqa}
        />
      </div>
    </div>
  );
}

export default UiUxDesignService;
