import React from 'react';
import './BookConsultaionSection.scss';
function BookConsultaionSection({ detail, question, buttonname, revert }) {
  return (
    <>
      <div className='bookconsultaion-wrapper'>
        <div
          className='bookconsultaion-text-wrapper'
          style={{ flexDirection: revert }}
        >
          <p className='content_para'>{detail}</p>
          <div className='bookconsultation-rightpart'>
            <h1 className='sub_header_font'>{question}</h1>
            <button className='mt-30'>{buttonname}</button>
          </div>
        </div>
      </div>
      {/* tabletview */}
      <div className='bookconsultaion-wrapper-tabletview'>
        <div className='bookconsultaion-text-wrapper'>
          <h1 className='sub_header_font'>{question}</h1>
          <p className='content_para'>{detail}</p>
          <button className='mt-30'>{buttonname}</button>
        </div>
      </div>
    </>
  );
}

export default BookConsultaionSection;
