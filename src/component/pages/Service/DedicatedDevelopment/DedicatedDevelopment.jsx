import React from 'react';
import './DedicatedDevelopment.scss';
import TitleBar from '../../../ReUsableComponents/TitleBar/TitleBar';
import { dedicatedTitleDetails } from '../../../../common/TitleBar';
import InfoContainer from './InfoContainer/InfoContainer';
import GoodChoiceTo from './GoodChoiceTo/GoodChoiceTo';
import { dedicatedgoodchoice } from '../../../../common/goodChoice';
import Strengths from './Strengths/Strengths';
import { infos } from '../../../../common/Strengths';
import BookConsultaionSection from '../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import {
  dedicatedbuildproject,
  dedicatedrevertbuildproject,
} from '../../../../common/buildproject';
import HireAsDedicated from './HireAsDedicated/HireAsDedicated';
import WeOffer from './WeOfferSection/WeOffer';
import { dedicatedweOffer } from '../../../../common/weOffer';
import MainPivotSection from './MainPivotSection/MainPivotSection';
import { mainpivotdedicateddev } from '../../../../common/Mainpivot';
import QuestionSection from '../../../ReUsableComponents/QuestionSection/QuestionSection';
import { dedicatedFqa } from '../../../../common/Questions/FQA';
import TechStack from './../../HomePage/TechStack/TechStack';
import HowItsWork from './HowItsWorkSection/HowItsWork';
function DedicatedDevelopment() {
  return (
    <div>
      <TitleBar
        heroSection={dedicatedTitleDetails}
        extraClassName='react-native-header'
        isFromArrow={false}
        isToArrow={true}
        isImage={false}
      />
      <div className='dedicated-container'>
        <InfoContainer />

        <GoodChoiceTo
          heading='Dedicated development team is a good choice to'
          icon={dedicatedgoodchoice}
        />
        <Strengths
          info={infos}
          header='Strengths of a dedicated development team model'
        />
        <HowItsWork />
        {dedicatedbuildproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}
        <HireAsDedicated />
        <WeOffer
          info={dedicatedweOffer}
          header='What we offer'
        />
        <TechStack />
        {dedicatedrevertbuildproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
            revert='row-reverse'
          />
        ))}
        <MainPivotSection info={mainpivotdedicateddev} />
        <QuestionSection
          title='Questions you may have'
          info='Here you can get answers to common questions about dedicated development team services, their peculiarities, and advantages'
          fqa={dedicatedFqa}
        />
      </div>
    </div>
  );
}

export default DedicatedDevelopment;
