import React from 'react';
import './WeOffer.scss';

function WeOffer({ info, header, detail }) {
  return (
    <div className='weoffer-wrapper'>
      <div className='weboffer-text-wrapper'>
        <h1 className='sub_header_font fw-6'>{header}</h1>
        <p className='content_para'>{detail}</p>
      </div>
      {info.map((item, index) => (
        <React.Fragment key={index}>
          <div className='weoffer-info'>
            <div className='title-info'>
              <h3 className='sub_part_header fw-6'>{item.title}</h3>
              <p className='content_para fw-4'>{item.info}</p>
            </div>
            <div className='tech-name'>
              {item.technames.map((techname) => (
                <h4
                  key={techname}
                  className='content_para fw-6'
                >
                  {techname}
                </h4>
              ))}
            </div>
          </div>
          {item.isLine && <div className='line'></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default WeOffer;
