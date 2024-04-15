import React from 'react';
// import FrontEndStudies from './FrontEndStudies';
import CaseStudiesDetails from '../../../../../ReUsableComponents/CaseStudies/CaseStudiesDetails';
import { FrontEndCaseStudyData } from '../../../../../../common/CaseStudiesData';

const FrontEndSoln = () => {
  return (
    <>
      <div className='row d-flex align-items-center justify-content-between mb-5 container mx-auto'>
        <h2 className='col-lg-6 col-md-6 col-12 sub_header_font fw-6 sub_head_color m-0'>
          Solutions Delivered by Our Front end Team
        </h2>
        <p className='col-lg-4 col-md-6 col-12 sub_head_color m-0 fw-5 content_para '>
          We individually approach each frontend development solution and bring
          it to life, optimizing the client’s time, budget, and efforts
        </p>
        <CaseStudiesDetails
          componentInfo={FrontEndCaseStudyData}
          isFrom={false}
          showList={true}
        />
      </div>
    </>
  );
};

export default FrontEndSoln;
