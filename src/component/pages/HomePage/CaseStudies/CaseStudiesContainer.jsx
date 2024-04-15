import React from 'react';
import CaseStudiesDetails from '../../../ReUsableComponents/CaseStudies/CaseStudiesDetails';
import { CaseStudyContent } from '../../../../common/CaseStudiesData';
import './CaseStudiesContainer.scss';

const CaseStudiesContainer = () => {
  return (
    <div className='CaseStudies_container'>
      <h2 className='sub_header_font'>Case Studies</h2>
      <CaseStudiesDetails
        componentInfo={CaseStudyContent}
        isFrom={true}
        showList={false}
      />
    </div>
  );
};

export default CaseStudiesContainer;
