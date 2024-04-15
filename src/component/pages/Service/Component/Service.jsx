/* eslint-disable react/jsx-key */
import React from 'react';
import CustomerSoftwareSolution from './CustomerSolution/CustomerSoftwareSolution';
import TechChallenge from './TechChallenges/TechChallenge';
import BusinessHelp from './BusinessHelp/BusinessHelp';
import DeploymentFlow from './DeploymentFlow/DeploymentFlow';
import CoreIndustryService from './CoreIndustry/CoreIndustry';
import QuestionSection from '../../../ReUsableComponents/QuestionSection/QuestionSection';
import { serviceFqa } from '../../../../common/Questions/FQA';
import { servicebuildproject } from '../../../../common/buildproject';
import { ServiceTitleDetails } from '../../../../common/TitleBar';
import TitleBar from './../../../ReUsableComponents/TitleBar/TitleBar';
import BookConsultaionSection from '../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import { servicesdatas } from '../../../../common/ServicesHeroSection/ServicesHeroSection';
import ServicesHeroSection from '../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import './TitleBar/ServiceTitleBar.scss';
import FeaturePartner from './../../../pages/HomePage/FeaturePartner/FeaturePartner';
import {
  ServicePageIndustryConstant,
  ServicePageIndustryCustomer,
} from '../../../../common/CoreIndustry';
import { ServicePageTechChallenge } from './../../../../common/ServicePageTechChallenge';

function Service() {
  return (
    <>
      <TitleBar
        heroSection={ServiceTitleDetails}
        extraClassName='service-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      <div className='service-container'>
        {servicesdatas.map((data) => (
          <ServicesHeroSection {...data} />
        ))}
        <FeaturePartner />
        <CustomerSoftwareSolution />
        <TechChallenge ServicePageTechChallenge={ServicePageTechChallenge} />
        <DeploymentFlow />
        <CoreIndustryService
          componentInfoConstant={ServicePageIndustryConstant}
          componentInfoCustomer={ServicePageIndustryCustomer}
        />
        {servicebuildproject.map((data) => (
          <BookConsultaionSection {...data} />
        ))}
        <BusinessHelp />
        <QuestionSection
          fqa={serviceFqa}
          title='Questions you may have'
          info='Learn more about our React Native development company services, products, and workflow'
        />
      </div>
    </>
  );
}

export default Service;
