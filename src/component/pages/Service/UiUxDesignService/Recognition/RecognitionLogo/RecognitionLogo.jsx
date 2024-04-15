import React from 'react';
import './RecognitionLogo.scss';

function RecognitionLogo({ logo, logoname, detail }) {
  return (
    <div className='recognitionlogo-wrapper'>
      <img src={logo} />
      <div className='logo-detail'>
        <h4 className='sub_part_header fw-6'>{logoname}</h4>
        <p className='content_para fw-4'>{detail}</p>
      </div>
    </div>
  );
}

export default RecognitionLogo;
