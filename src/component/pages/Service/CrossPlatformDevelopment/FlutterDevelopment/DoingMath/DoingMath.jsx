import React from 'react';
import './DoingMath.scss';
import DoingMathGraph from './DoingMathGraph/DoingMathGraph';
function DoingMath({ detail }) {
  return (
    <>
      <div className='doing-math-wrapper'>
        <div className='doing-math-text-wrapper'>
          <h2 className='sub_header_font fw-6'>Doing the math</h2>
          <p className='content_para fw-4'>{detail}</p>
        </div>
      </div>{' '}
      <div className='graph-math-container'>
        <DoingMathGraph />
      </div>
    </>
  );
}

export default DoingMath;
