import React from 'react';
import CaseStudiesDetails from '../../../../../ReUsableComponents/CaseStudies/CaseStudiesDetails';
import { CaseStudyContent } from '../../../../../../common/CaseStudiesData';
import './CaseStudyIoS.scss';

const CaseStudyIoS = () => {
  return (
    <div className='CaseContainer'>
      <h2 className='sub_header_font'>
        Case Studies of Successfully Delivered iOS Projects
      </h2>
      <CaseStudiesDetails
        componentInfo={CaseStudyContent}
        isFrom={true}
        showList={false}
      />
    </div>
  );
};

export default CaseStudyIoS;
