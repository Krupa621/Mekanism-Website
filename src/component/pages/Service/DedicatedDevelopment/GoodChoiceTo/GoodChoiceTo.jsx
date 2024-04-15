import React from 'react';
import './GoodChoiceTo.scss';
function GoodChoiceTo({ heading, icon }) {
  return (
    <div className='goodchoice-container'>
      <h2 className='sub_header_font fw-6'>{heading}</h2>
      <div className='goodChoice-Info-wrapper'>
        <>
          {icon.map((item, index) => (
            <React.Fragment key={index}>
              <div className='goodchoice-info'>
                <img src={item.icon} />
                <h3 className='content_para fw-6'>{item.name}</h3>
              </div>
            </React.Fragment>
          ))}
        </>
      </div>
    </div>
  );
}

export default GoodChoiceTo;
