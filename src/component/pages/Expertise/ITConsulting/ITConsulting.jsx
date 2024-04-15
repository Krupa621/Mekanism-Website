import React from 'react';
import './ITConsulting.scss';
import TitleBar from '../../../ReUsableComponents/TitleBar/TitleBar';
import { ITDetails } from '../../../../common/TitleBar';
import PageContent from '../CRMDevService/PageContent/PageContent';
import { itcontentdata } from '../../../../common/PageContent';
import Strengths from '../../Service/DedicatedDevelopment/Strengths/Strengths';
import { itinfos } from '../../../../common/Strengths';
import TechChallenge from '../../Service/Component/TechChallenges/TechChallenge';
import { itTechChallenge } from '../../../../common/ServicePageTechChallenge';
import {
  ServicePageIndustryConstant,
  ServicePageIndustryCustomer,
} from '../../../../common/CoreIndustry';
import CoreIndustryService from '../../Service/Component/CoreIndustry/CoreIndustry';
import BookConsultaionSection from '../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import { itproject } from '../../../../common/buildproject';
import HireAsIt from './HireAsIt/HireAsIt';
import QuestionSection from '../../../ReUsableComponents/QuestionSection/QuestionSection';
import { itFqa } from '../../../../common/Questions/FQA';
import WeOffer from '../../Service/DedicatedDevelopment/WeOfferSection/WeOffer';
import { itweOffer } from '../../../../common/weOffer';
import { AdvanceCRMAppContent } from '../../../../common/AdvanceTech';
import AdvancedAppContent from './AdvancedAppContent/AdvancedAppContent';
function ITConsulting() {
  return (
    <div>
      <TitleBar
        heroSection={ITDetails}
        extraClassName='IT-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      <div className='it-consulting-container'>
        {itcontentdata.map((data, i) => (
          <PageContent
            key={i}
            {...data}
          />
        ))}
        <Strengths
          info={itinfos}
          header='IT consulting services benefits'
        />
        <TechChallenge ServicePageTechChallenge={itTechChallenge} />
        {/* <AdvancedIoSAppContent
          componentInfo={AdvanceCRMAppContent}
          title='Our CRM software development services'
          detail='As a custom CRM development company, we provide a wide range of development services to fulfill all CRM-related business needs.'
          listStyle='none'
          islist='false'
          istext='true'
        /> */}
        <AdvancedAppContent appcontent={AdvanceCRMAppContent} />
        <CoreIndustryService
          componentInfoConstant={ServicePageIndustryConstant}
          componentInfoCustomer={ServicePageIndustryCustomer}
        />
        <WeOffer
          info={itweOffer}
          header='Custom software development services'
          detail='Our developers come up with a personalized solution to each challenge that complies with customer requirements for a new CRM.'
        />
        {itproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}
        <HireAsIt />
        <QuestionSection
          title='Questions you may have'
          info='If you still have CRM-related questions, we’re glad to explain the most common CRM development services topics.'
          fqa={itFqa}
        />
      </div>
    </div>
  );
}

export default ITConsulting;
