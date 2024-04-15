import React from 'react';
import IoSAccordian from './IoSAccordian';

const IoSQueBox = () => {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-between align-items-center mb-5 queContent'>
        <h2 className='fw-6 sub_header_font sub_head_color '>
          Questions you may have
        </h2>
        <p className='m-0 fw-4 content_para sub_head_color'>
          Learn more about our iOS app development workflow.
        </p>
      </div>
      <IoSAccordian />
    </div>
  );
};

export default IoSQueBox;
