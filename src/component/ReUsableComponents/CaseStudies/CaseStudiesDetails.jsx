import React from 'react';
import './CaseStudies.scss';
import CaseStudiesCard from './CaseStudiesCard';
import { Arrow } from '../../../icons/icons';

const CaseStudiesDetails = (props) => {
  const { componentInfo, isFrom, showList, listStyle } = props;
  return (
    <>
      <div className='CaseStudiesContainer'>
        {componentInfo?.map((item, index) => (
          <CaseStudiesCard
            item={item}
            isFrom={isFrom}
            showList={showList}
            key={index}
            listStyle={listStyle}
          />
        ))}
        <div className='caseStudyExploreTitle'>
          <h2 className='sub_header_font'>
            Learn about company`s expertise in Projects Portfolio.
            <span>
              &nbsp;&nbsp;&nbsp; Explore More &nbsp;
              <Arrow />
            </span>
          </h2>
        </div>
        {/* mobile view */}
        <div className='caseStudyExploreTitleMobileView'>
          <h2 className='sub_header_font'>
            Learn about company`s expertise in Projects Portfolio.
          </h2>
          <span className='sub_header_font'>
            Explore More &nbsp;
            <Arrow />
          </span>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesDetails;
