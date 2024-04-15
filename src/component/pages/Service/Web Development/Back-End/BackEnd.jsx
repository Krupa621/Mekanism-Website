import React from 'react';
import BackEndCOntentInfo from './ContentWrapper/BackEndCOntentInfo';
import BackEndBuildLooking from './BuildLooking/BackEndBuildLooking';
import BackEndCoreWork from './CoreWorks/BackEndCoreWork';
import BackEndServiceSelect from './ServiceSelect/BackEndServiceSelect';
import BackEndAccordian from './QueBox/BackEndAccordian';
import { BackEndDevTitleDetails } from '../../../../../common/TitleBar';
import './BackEnd.scss';
import TitleBar from '../../../../ReUsableComponents/TitleBar/TitleBar';
import FeatureDev from '../../Mobile Development/MobileDevelopment/FeatureDev/FeatureDev';
import { FrontEndCaseStudyData } from '../../../../../common/CaseStudiesData';
import CrossPlatformServices from '../../CrossPlatformDevelopment/CrossPlatform/CrossPlatformServices/CrossPlatformServices';
import { backendServices } from '../../../../../common/CrossPlatformservices';

const BackEnd = () => {
  return (
    <>
      <TitleBar
        heroSection={BackEndDevTitleDetails}
        extraClassName='backend-header'
        isFromArrow={true}
        isToArrow={true}
        isImage={false}
      />
      <BackEndCOntentInfo />
      <CrossPlatformServices
        title='Back End Development Service You Can Get'
        detail='We offer custom back end development services that help your software become performant, secure, resilient and serve your business goals better'
        CrossplatformServices={backendServices}
      />
      {/* <BackEndService /> */}
      {/* <BackEndSoln /> */}
      <FeatureDev
        componentInfo={FrontEndCaseStudyData}
        isFrom={false}
        showList={true}
        listStyle='disc'
      />
      <BackEndBuildLooking />
      <BackEndCoreWork />
      <BackEndServiceSelect />
      <BackEndAccordian />
    </>
  );
};

export default BackEnd;
