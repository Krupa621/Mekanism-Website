import React from 'react';
import './ProcessOfDesign.scss';

function ProcessOfDesign({ img, name, details, index }) {
  console.log('===>', index);
  return (
    <>
      <div
        className='processofdesign-wrapper'
        key={index}
        style={{
          flexDirection: index % 2 === 1 ? 'row-reverse' : 'none',
        }}
      >
        <img
          src={img}
          alt={`Step ${index + 1}`}
        />
        <div className='processofdesign-text-wrapper'>
          <h3 className='sub_header_font fw-6'>0{index + 1}</h3>
          <h2 className='sub_part_header fw-6'>{name}</h2>
          {details.map((detail, detailIndex) => (
            <p
              key={detailIndex}
              className='content_para'
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProcessOfDesign;
