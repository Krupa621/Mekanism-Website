import React from 'react';
import BackEndAccordian from './BackEndAccordian';

const BackEndQueBox = () => {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-between align-items-center mb-5 queContent'>
        <h2 className='fw-6 sub_header_font sub_head_color '>
          Questions you may have
        </h2>
        <p className='m-0 fw-4 content_para sub_head_color'>
          Here you can get answers to common questions about frontend
          development services, their peculiarities, and advantages
        </p>
      </div>
      <BackEndAccordian />
    </div>
  );
};

export default BackEndQueBox;
