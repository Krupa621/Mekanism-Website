import React from 'react';
import './FrontEnd.scss';
import FrontEndContent from './ContentWrapper/FrontEndContentInfo';
import FrontEndSoln from './SolnDelivered/FrontEndSoln';
import FrontEndCoreWork from './CoreWorks/FrontEndCoreWork';
import QuestionSection from '../../../../ReUsableComponents/QuestionSection/QuestionSection';
import { frontFqa } from '../../../../../common/Questions/FQA';
import { FrontEndDevTitleDetails } from '../../../../../common/TitleBar';
import CrossPlatformServices from '../../CrossPlatformDevelopment/CrossPlatform/CrossPlatformServices/CrossPlatformServices';
import { frontendServices } from '../../../../../common/CrossPlatformservices';
import TitleBar from '../../../../ReUsableComponents/TitleBar/TitleBar';
import { frontendproject } from '../../../../../common/buildproject';
import BookConsultaionSection from '../../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import HireAsFrontend from './HireAsFrontend/HireAsFrontend';

const FrontEnd = () => {
  return (
    <>
      <TitleBar
        heroSection={FrontEndDevTitleDetails}
        extraClassName='frontend-header'
        isFromArrow={true}
        isToArrow={true}
        isImage={false}
      />
      <div className='frontend-container'>
        <FrontEndContent />
        <CrossPlatformServices
          title='Front End Development Service You Can Get'
          detail='We offer custom front end development services that help your software stand out, improve, modernize, and serve your business goals better'
          CrossplatformServices={frontendServices}
        />
        <FrontEndSoln />
        {/* <BuildLooking /> */}
        {frontendproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}
        <FrontEndCoreWork />
        {/* <FrontEndServiceSelect /> */}
        <HireAsFrontend />
        <QuestionSection
          title='Questions you may have'
          info='Here you can get answers to common questions about frontend development services, their peculiarities, and advantages'
          fqa={frontFqa}
        />
      </div>
    </>
  );
};

export default FrontEnd;
