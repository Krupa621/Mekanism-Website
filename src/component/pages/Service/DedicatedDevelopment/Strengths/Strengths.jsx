import React from 'react';
import './Strenghts.scss';
function Strengths({ info, header }) {
  return (
    <div className='strenghts-wrapper'>
      <h2 className='sub_header_font fw-6'>{header}</h2>
      <div className='strenghts-info'>
        {info.map((item, index) => (
          <React.Fragment key={index}>
            <div className='goodchoice-info'>
              <h3 className='sub_part_header fw-6'>{item.title}</h3>
              <h4 className='content_para '>{item.info}</h4>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Strengths;
