import React from 'react';
import { BackEndCoreContent } from '../../../../../../common/constant';
import './BackEndCoreWorkContent.scss';

const BackEndCoreWorkContent = () => {
  return (
    <div className='BackEndCoreWorkContainer'>
      {BackEndCoreContent?.map((items, index, value) => (
        <>
          <div
            key={index}
            className='BackEndCoreWorkWrapper col-lg-7 mt-40 col-md-6 col-12 coreWidthContent'
          >
            <div className='BackEndCoreWorkDetails d-flex gap-2 '>
              <div className='coreImages'>{items.coreImage}</div>
              <h2 className='m-0 fw-6 sub_part_header content_color'>
                {items.heading}
              </h2>
            </div>
            <p className='m-0 fw-4 content_para content_color mt-3'>
              {items.info}
            </p>
          </div>
          <div
            key={value}
            className='col-lg-5 mt-4 col-md-6 col-12'
          >
            <h3 className='m-0 fw-4 sub_part_header content_color'>
              {items.ListOne}
            </h3>
            <h3 className='m-0 fw-4 sub_part_header content_color'>
              {items.ListTwo}
            </h3>
            <h3 className='m-0 fw-4 sub_part_header content_color'>
              {items.ListThree}
            </h3>
          </div>
          <div className='line mt-5'></div>
        </>
      ))}
    </div>
  );
};

export default BackEndCoreWorkContent;
