import React from 'react';
import CaseStudiesDetails from '../../../../../ReUsableComponents/CaseStudies/CaseStudiesDetails';
import { CaseStudyContent } from '../../../../../../common/CaseStudiesData';
import './CaseStudyAndroid.scss';

const CaseStudyAndroid = () => {
  return (
    <div className='CaseStudieContainer'>
      <h2 className='sub_header_font'>
        Case Studies of Successfully Delivered Android Projects
      </h2>
      <CaseStudiesDetails
        componentInfo={CaseStudyContent}
        isFrom={true}
        showList={false}
      />
    </div>
  );
};

export default CaseStudyAndroid;
