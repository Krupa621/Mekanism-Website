import React from 'react';
import '../FrontEnd.scss';
import { FrontENdDevSectionContent } from '../../../../../../common/constant';
import { Arrow } from '../../../../../../icons/icons';

const FrontEndServicesContent = () => {
  return (
    <div className='DevSection_container container mx-auto mt-80'>
      <div className='DevSection_wrapper row gap-4 mb-30 justify-content-center'>
        {FrontENdDevSectionContent?.map((item, index) => (
          <div
            key={index}
            className='FrontEnddevSection_content p-30 col-md-12 col-lg-5'
          >
            <div className='d-flex align-items-center justify-content-between mb-20'>
              <h2 className='sub_part_header fw-6 sub_head_color m-0'>
                {item.title}
              </h2>
            </div>
            <p className='m-0  content_para fw-4 sub_head_color'>{item.info}</p>
            <div className='d-flex justify-content-between align-items-center explore_btn FrontEnd_explore_button mt-4'>
              <p className='m-0 content_para fw-4'>{item.buttonName} </p>
              <Arrow />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontEndServicesContent;
