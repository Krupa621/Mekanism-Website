import React from 'react';
import './ReactNativeApp.scss';
import { reactnativeTitleDetails } from '../../../../../common/TitleBar';
import ReducedCostSection from '../../../../ReUsableComponents/ReducedCostSection/ReducedCostSection';
import { reactnativecost } from '../../../../../common/reducecost';
import ProjectBuiltSection from '../FlutterDevelopment/ProjectBuiltSection/ProjectBuiltSection';
import { reactnativeprojectbuilt } from '../../../../../common/projectbuilt';
import DoingMath from './../FlutterDevelopment/DoingMath/DoingMath';
import BlogSection from '../../../../ReUsableComponents/BlogSection/BlogSection';
import { reactdata } from '../../../../../common/blogPage/blogs';
import QuestionSection from '../../../../ReUsableComponents/QuestionSection/QuestionSection';
import { reactFqa } from '../../../../../common/Questions/FQA';
import { reactnativebuildproject } from '../../../../../common/buildproject';
import TitleBar from '../../../../ReUsableComponents/TitleBar/TitleBar';
import BookConsultaionSection from '../../../../ReUsableComponents/BookConsultaionSection/BookConsultaionSection';
import ReliableDevopsService from '../../CostSavingDev/ReliableDevopsService/ReliableDevopsService';
import { fluttersdata } from '../../../../../common/reliabledevops';
function ReactNativeApp() {
  return (
    <div>
      <TitleBar
        heroSection={reactnativeTitleDetails}
        extraClassName='react-native-header'
        isFromArrow={true}
        isToArrow={true}
        isImage={false}
      />

      <div className='reactnative-container'>
        <ReducedCostSection
          title='One Framework, Two Mobile Applications'
          detail='React Native allows developers to build cross- platform mobile apps, using the common codebase. Faster and with lower cost.'
          cost={reactnativecost}
          isimage={false}
        />
        {reactnativeprojectbuilt.map((data, i) => (
          <ProjectBuiltSection
            key={i}
            {...data}
          />
        ))}
        <ReliableDevopsService
          title='Hasten your product launch with Flutter'
          detail='Using Flutter, we’ll help you reduce time to market releasing apps and their updates faster and bringing a native-like performance to end-users'
          devcontant={fluttersdata}
          listStyle='disc'
        />
        <DoingMath detail='Discover how React Native application development services can help you save on app creation' />

        {reactnativebuildproject.map((data, i) => (
          <BookConsultaionSection
            key={i}
            {...data}
          />
        ))}

        <BlogSection
          data={reactdata}
          header='Flutter app development insights'
          title='Latest insights'
          isButton={true}
        />
        <QuestionSection
          title='Questions you may have'
          info='Learn more about our React Native development company services, products, and workflow'
          fqa={reactFqa}
        />
      </div>
    </div>
  );
}

export default ReactNativeApp;
