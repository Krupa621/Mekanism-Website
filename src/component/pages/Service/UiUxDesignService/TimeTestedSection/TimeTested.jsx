import React from 'react';
import './TimeTested.scss';
import TechName from './TechName/TechName';
function TimeTested({ uiuxtimetested }) {
  return (
    <div className='timetasted-wrapper'>
      <div className='timetasted-text-wrapper'>
        <h3 className='sub_header_font fw-6'>Our time-tested UI/UX approach</h3>
        <p className='content_para fw-4'>
          User experience and user interface are inseparable and form an overall
          impression of your product
        </p>
      </div>
      <div className='techname-wrapper'>
        {uiuxtimetested.map((data, i) => (
          <TechName
            key={i}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeTested;
