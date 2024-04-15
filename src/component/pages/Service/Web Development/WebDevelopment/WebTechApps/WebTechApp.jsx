import React from 'react';
import WebTechContent from './WebTechContent';

const WebTechApp = ({ header, detail }) => {
  return (
    <div className='container mx-auto'>
      <div className='row  d-flex align-items-center mb-5 justify-content-between px-3'>
        <h2 className='col-12 col-lg-5 col-sm-6 sub_header_font fw-6 sub_head_color m-0'>
          {header}
        </h2>
        <p className='techinfowidth col-12 col-lg-5 col-sm-6 sub_head_color m-0 fw-5 content_para '>
          {detail}
        </p>
      </div>
      <WebTechContent />
    </div>
  );
};

export default WebTechApp;
