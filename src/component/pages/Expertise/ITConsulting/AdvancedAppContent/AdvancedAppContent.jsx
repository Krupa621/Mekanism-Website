import React from 'react';
import './AdvancedAppContent.scss';
function AdvancedAppContent({ appcontent }) {
  return (
    <div className='Advanced-app-content-wrapper'>
      <div className='advanced-content-text-wrapper'>
        <h2 className='sub_header_font fw-6'>
          IT consulting services we provide
        </h2>
        <p className='content_para '>
          As a leading IT consulting company with years of experience, we
          deliver a wide range of modernization decisions for your business
        </p>
      </div>
      <div className='app-contents-wrapper'>
        {appcontent.map((item, index) => (
          <div
            className='app-content-wrapper'
            key={index}
          >
            <div className='dot'></div>
            <div className='content-text'>
              <h2 className='sub_part_header fw-6'>{item.title}</h2>
              <p className='content_para'>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvancedAppContent;
