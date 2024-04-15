import React from 'react';
import './Recognition.scss';
import RecognitionLogo from './RecognitionLogo/RecognitionLogo';
function Recognition({ recognitionlogo }) {
  return (
    <div className='recognition-wrapper'>
      <div className='recognition-text-wrapper'>
        <h2 className='sub_header_font fw-6'>Our design recognition</h2>
        <p className='content_para fw-4'>
          Leading rating & review platforms rank company among top software
          development companies due to our tech assistance.
        </p>
      </div>
      <div className='recognitionlogo-container'>
        {recognitionlogo.map((data, i) => (
          <RecognitionLogo
            key={i}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}

export default Recognition;
