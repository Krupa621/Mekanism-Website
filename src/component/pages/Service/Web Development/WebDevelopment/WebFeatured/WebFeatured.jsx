import React from 'react';
import CaseStudiesDetails from '../../../../../ReUsableComponents/CaseStudies/CaseStudiesDetails';
import { CaseStudyContent } from '../../../../../../common/CaseStudiesData';

const WebFeatured = () => {
  return (
    <div className='container mt-140 mx-auto'>
      <h2
        style={{ maxWidth: '550px' }}
        className='fw-6 sub_header_font sub_head_color'
      >
        Featured Web Development Projects
      </h2>
      <CaseStudiesDetails
        componentInfo={CaseStudyContent}
        isFrom={true}
        showList={false}
      />
    </div>
  );
};

export default WebFeatured;
