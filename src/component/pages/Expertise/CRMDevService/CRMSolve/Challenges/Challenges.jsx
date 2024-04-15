import React from 'react';
import './Challenges.scss';
function Challenges({ title, detail, isline }) {
  return (
    <>
      <div className='challenges-wrapper'>
        <h3 className='sub_part_header fw-6'>{title}</h3>
        <p className='content_para'>{detail}</p>
      </div>
      {isline && <div className='line'></div>}
    </>
  );
}

export default Challenges;
