import React from 'react';
import './LatestListCarousal.scss';
import { LatestInsightWrapper } from '../../../../common/LatestInsight';

const LatestList = () => {
  return (
    <>
      {LatestInsightWrapper?.map((item, index) => (
        <div
          key={index}
          className='InsightsContainer'
        >
          <div className='InsightWrapper '>
            <div className='InsightBox'>
              <div className='InsightContent'>
                <p className='content_para'>{item.blogName}</p>
                <img
                  src={item.icon}
                  alt='ArrowIcon'
                />
                <p className='content_para'>{item.guideName}</p>
              </div>
              <h3 className='sub_part_header'>{item.title}</h3>
              <p className='content_para'>{item.Date}</p>
            </div>
            <div className='InsightImg'>
              <img
                src={item.imgSrc}
                alt='Insight_image'
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LatestList;
