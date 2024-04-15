import React from 'react';
import TitleBar from '../../../ReUsableComponents/TitleBar/TitleBar';
import { CRMDetails } from '../../../../common/TitleBar';
import './CRMDevService.scss';
import PageContent from './PageContent/PageContent';
import { crmcontentdata } from '../../../../common/PageContent';
import CRMSolve from './CRMSolve/CRMSolve';
import { challengesCrmData } from '../../../../common/Challenges';
import BookConsultaionSection from '../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import { Crmproject, Crmproject2 } from '../../../../common/buildproject';
import CoreIndustryService from '../../Service/Component/CoreIndustry/CoreIndustry';
import {
  ServicePageIndustryConstant,
  ServicePageIndustryCustomer,
} from '../../../../common/CoreIndustry';
// import FeatureDev from '../../Service/Mobile Development/MobileDevelopment/FeatureDev/FeatureDev';
import {
  // CaseStudyContent,
  // FrontEndCaseStudyData,
  featurecrm,
} from '../../../../common/CaseStudiesData';
import AdvancedIoSAppContent from '../../Service/Mobile Development/IosDevelopment/AdvancedIoSAppContent/AdvancedIoSAppContent';
import { AdvanceCRMAppContent } from '../../../../common/AdvanceTech';
import HireAsCRM from './HireAsCRM/HireAsCRM';
import QuestionSection from '../../../ReUsableComponents/QuestionSection/QuestionSection';
import { CrmFqa } from '../../../../common/Questions/FQA';
import CRMDevelopmentLifeCycle from './CRMDevelopmentLifeCycle/CRMDevelopmentLifeCycle';
import FeatureDevCRM from './FeatureDevCRM/FeatureDevCRM';
function Expertise() {
  return (
    <>
      <TitleBar
        heroSection={CRMDetails}
        extraClassName='CRM-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      <div className='CRM-container'>
        {crmcontentdata.map((data, i) => (
          <PageContent
            key={i}
            {...data}
          />
        ))}
        <CRMSolve challengesCrmData={challengesCrmData} />
        {Crmproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}
        <CoreIndustryService
          componentInfoConstant={ServicePageIndustryConstant}
          componentInfoCustomer={ServicePageIndustryCustomer}
        />
        {/* <FeatureDev
          componentInfo={FrontEndCaseStudyData}
          isFrom={true}
          showList={false}
          listStyle='none'
          title='CRM solutions we’ve delivered'
          detail='We individually approach each solution for the Node.js backend and bring it to life, optimizing the client’s time, budget, and efforts'
        /> */}
        <FeatureDevCRM contents={featurecrm} />
        <AdvancedIoSAppContent
          componentInfo={AdvanceCRMAppContent}
          title='Our CRM software development services'
          detail='As a custom CRM development company, we provide a wide range of development services to fulfill all CRM-related business needs.'
          listStyle='none'
          islist='false'
          istext='true'
        />
        {Crmproject2.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}
        <CRMDevelopmentLifeCycle />
        <HireAsCRM />
        <QuestionSection
          title='Questions you may have'
          info='If you still have CRM-related questions, we’re glad to explain the most common CRM development services topics.'
          fqa={CrmFqa}
        />
      </div>
    </>
  );
}

export default Expertise;
