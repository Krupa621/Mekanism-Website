import React from 'react';
import './CostSavingDev.scss';
import TitleBar from '../../../ReUsableComponents/TitleBar/TitleBar';
import { costsavingTitleDetails } from '../../../../common/TitleBar';
import ServicesHeroSection from '../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import { costdatas } from '../../../../common/ServicesHeroSection/ServicesHeroSection';
import ReliableDevopsService from './ReliableDevopsService/ReliableDevopsService';
import { reliabledevopsdata } from '../../../../common/reliabledevops';
import BookConsultaionSection from '../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import { costsavingbuildproject } from '../../../../common/buildproject';
import FeatureDev from '../Mobile Development/MobileDevelopment/FeatureDev/FeatureDev';
import { CaseStudyContent } from '../../../../common/CaseStudiesData';
import BlogSection from '../../../ReUsableComponents/BlogSection/BlogSection';
import { costdata } from '../../../../common/blogPage/blogs';
import QuestionSection from '../../../ReUsableComponents/QuestionSection/QuestionSection';
import { costsavingFqa } from '../../../../common/Questions/FQA';
import DevOpsValues from './DevOpsValues/DevOpsValues';
import { devopsvalues } from '../../../../common/devOps';
import DevOpsTechStack from './DevOpsTechStack/DevOpsTechStack';
import {
  cloudstacklogo,
  stacklogosourcecode,
  stacklogocicd,
  stacklogowebserver,
  stacklogocontainer,
  stacklogoapplication,
  stacklogomonitoring,
  stacklogocode,
} from '../../../../common/devOpsTechStack/TechstackLogo';
function CostSavingDev() {
  return (
    <div>
      <TitleBar
        heroSection={costsavingTitleDetails}
        extraClassName='cost-saving-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      <div className='costsaving-container'>
        {costdatas.map((crossservicedata, i) => (
          <ServicesHeroSection
            key={i}
            {...crossservicedata}
          />
        ))}
        <ReliableDevopsService
          devcontant={reliabledevopsdata}
          title='Reliable DevOps services'
          detail='We’ll help you reduce time to market without sacrificing reliability, security, and compliance. Streamline your processes, improve efficiency, and develop new ideas faster with our assistance.'
        />
        <DevOpsValues values={devopsvalues} />
        {costsavingbuildproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}
        <FeatureDev
          componentInfo={CaseStudyContent}
          isFrom={true}
          showList={false}
          listStyle='none'
        />
        <DevOpsTechStack
          title='Reliable DevOps services'
          detail='We’ll help you reduce time to market without sacrificing reliability, security, and compliance. Streamline your processes, improve efficiency, and develop new ideas faster with our assistance.'
          cloudstacklogo={cloudstacklogo}
          stacklogosourcecode={stacklogosourcecode}
          stacklogocicd={stacklogocicd}
          stacklogowebserver={stacklogowebserver}
          stacklogocontainer={stacklogocontainer}
          stacklogoapplication={stacklogoapplication}
          stacklogomonitoring={stacklogomonitoring}
          stacklogocode={stacklogocode}
        />
        <BlogSection
          data={costdata}
          header='DevOps insights'
          title='DevOps insights'
          isButton={false}
        />
        <QuestionSection
          title='Questions you may have'
          info='We`ve put together popular questions related to DevOps Services so you can find quick answers to common issues'
          fqa={costsavingFqa}
        />
      </div>
    </div>
  );
}

export default CostSavingDev;
