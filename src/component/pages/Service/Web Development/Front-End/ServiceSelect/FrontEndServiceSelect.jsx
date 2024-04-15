import React from 'react';
import './ServiceSelect.css';
import FrontEndConsultantDetail from './FrontEndConsultantDetail';

const FrontEndServiceSelect = () => {
  return (
    <div className='container mx-auto mt-140'>
      <h2 className='sub_header_font fw-6 sub_head_color mb-3'>
        Why Choose Our Frontend Services
      </h2>
      <p className='SelectServiceWidth sub_head_color m-0 fw-5 content_para mb-5'>
        Our frontend team is fully staffed by experienced developers who are
        constantly learning new technologies to ensure the best quality of your
        software
      </p>
      <FrontEndConsultantDetail />
    </div>
  );
};

export default FrontEndServiceSelect;
