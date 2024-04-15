import React from 'react';
import arrowIcon from '../../../../assets/images/arrow.svg';
import './LatestInsight.scss';
import LatestListCarousal from './LatestListCarousal';

const LatestInsight = () => {
  return (
    <>
      <div className='LateSightContainer'>
        <div className='LateSightWrapper'>
          <h2 className='sub_header_font'>Latest insights</h2>
          <div>
            <p className='content_para'>Read More</p>
            <img
              src={arrowIcon}
              alt='ArrowIcon'
            />
          </div>
        </div>
        <div className='LateSightDetails'>
          <LatestListCarousal />
        </div>
      </div>
    </>
  );
};

export default LatestInsight;
