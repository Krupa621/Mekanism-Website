import React from 'react';
import './MainPivotSection.scss';
function MainPivotSection({ info }) {
  return (
    <div className='mainpivotsection-wrapper'>
      <div className='mainpivotsection-hedaing'>
        <h2 className='sub_header_font fw-6'>
          Main pivots in work with a dedicated team
        </h2>
        <p className='content_para'>
          For productive cooperation and fast dedicated development team
          assembling, we need your full involvement in the process.
        </p>
      </div>
      <div className='mainpivotsection-info'>
        {info.map((item, index) => (
          <div
            className='mainpivotsection-info-text'
            key={index}
          >
            <h3 className='sub_part_header fw-6'>{item.title}</h3>
            <p className='content_para'>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPivotSection;
