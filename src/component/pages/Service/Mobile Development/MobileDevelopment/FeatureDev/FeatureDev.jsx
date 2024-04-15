import React from 'react';
import CaseStudiesDetails from '../../../../../ReUsableComponents/CaseStudies/CaseStudiesDetails';
// import { CaseStudyContent } from '../../../../../../common/CaseStudiesData';
import './FeatureDev.scss';

const FeatureDev = ({
  componentInfo,
  isFrom,
  showList,
  listStyle,
  title,
  detail,
}) => {
  return (
    <>
      <div className='FeatureContainer'>
        <div className='feature-text-wrapper'>
          <h2 className='sub_header_font'>{title}</h2>
          <p className='content_para'>{detail}</p>
        </div>
        <CaseStudiesDetails
          componentInfo={componentInfo}
          isFrom={isFrom}
          showList={showList}
          listStyle={listStyle}
        />
      </div>
    </>
  );
};

export default FeatureDev;
