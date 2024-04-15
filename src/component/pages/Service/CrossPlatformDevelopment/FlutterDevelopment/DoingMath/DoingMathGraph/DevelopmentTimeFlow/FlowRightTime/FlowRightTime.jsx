import React from 'react';

function FlowRightTime({ detail }) {
  return (
    <div className='flow-rightside'>
      <div className='persantage'>
        <h1 className='header_font fw-7'>50%</h1>
        <div className='less-time'>
          <h2 className='sub_part_header fw-6'>Less</h2>
          <h2 className='sub_part_header fw-4'>time</h2>
        </div>
      </div>
      <p className='content_para fw-4'>{detail}</p>
    </div>
  );
}

export default FlowRightTime;
