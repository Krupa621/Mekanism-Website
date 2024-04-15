import React from 'react';
import './CrossPlatfromServices.scss';
function CrossPlatformServices({ title, detail, CrossplatformServices }) {
  return (
    <div className='CrossPlatformServices-wrapperr  mx-auto'>
      <div className='services-text-wrapper mb-60'>
        <h2 className='sub_header_font'>{title}</h2>
        <p className=''>{detail}</p>
      </div>
      <div className='DevSection_wrapper'>
        {CrossplatformServices?.map((item, index) => (
          <div
            key={index}
            className='devSection_content p-30 col-md-12 crossservice-wrapper'
          >
            <div className='d-flex align-items-center justify-content-between mb-20'>
              <h2 className='sub_part_header fw-6 sub_head_color m-0'>
                {item.title}
              </h2>
            </div>
            <p className='m-0  content_para fw-4 sub_head_color'>{item.info}</p>
            <button className='pages-name mt-20'>
              Get Consultation
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrossPlatformServices;
