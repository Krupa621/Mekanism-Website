import React from 'react';
import './Flutter.scss';
import ServicesHeroSection from '../../../../ReUsableComponents/ServiceHeroSection/ServicesHeroSection';
import { flutterdatas } from '../../../../../common/ServicesHeroSection/ServicesHeroSection';
import ReducedCostSection from './../../../../ReUsableComponents/ReducedCostSection/ReducedCostSection';
import ProjectBuiltSection from './ProjectBuiltSection/ProjectBuiltSection';

import FlutterContactUsSection from './FlutterContactUsSection/FlutterContactUsSection';
import BlogSection from '../../../../ReUsableComponents/BlogSection/BlogSection';
import { flutterdata } from '../../../../../common/blogPage/blogs';
import QuestionSection from '../../../../ReUsableComponents/QuestionSection/QuestionSection';
import { flutterFqa } from '../../../../../common/Questions/FQA';
import ExperienceWithFlutter from './ExperienceWithFlutter/ExperienceWithFlutter';
import DoingMath from './DoingMath/DoingMath';
import { flutterTitleDetails } from '../../../../../common/TitleBar';
import { fluttercost } from '../../../../../common/reducecost';
import { flutterprojectbuilt } from '../../../../../common/projectbuilt';
import TitleBar from './../../../../ReUsableComponents/TitleBar/TitleBar';
import ReliableDevopsService from '../../CostSavingDev/ReliableDevopsService/ReliableDevopsService';
import { fluttersdata } from '../../../../../common/reliabledevops';
function Flutter() {
  return (
    <div>
      <TitleBar
        heroSection={flutterTitleDetails}
        extraClassName='flutter-header'
        isFromArrow={true}
        isToArrow={true}
        isImage={false}
      />

      <div className='flutter-container'>
        {flutterdatas.map((data, i) => (
          <ServicesHeroSection
            key={i}
            {...data}
          />
        ))}
        <ReducedCostSection
          title='Reduced costs, two mobile applications'
          detail='Flutter is Google’s SDK that lets developers build cross-platform apps with a single codebase.'
          cost={fluttercost}
          isImg={true}
        />
        {flutterprojectbuilt.map((data, i) => (
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
        <DoingMath detail='Discover how Flutter app development services can help you save on app creation for your industry.' />
        <FlutterContactUsSection />
        <ExperienceWithFlutter />
        <BlogSection
          data={flutterdata}
          header='Flutter app development insights'
          title='Latest insights'
          isButton={true}
        />
        <QuestionSection
          title='Questions you may have'
          info='Learn more about our Flutter app development workflow.'
          fqa={flutterFqa}
        />
      </div>
    </div>
  );
}

export default Flutter;
