import React from 'react';
import FrontEndServicesContent from './FrontEndServicesContent';

const FrontEndServices = () => {
  return (
    <>
      <div className='row d-flex align-items-center justify-content-between mb-5 container mx-auto mt-140'>
        <h2 className='col-lg-5 col-md-6 col-12 sub_header_font fw-6 sub_head_color m-0'>
          Front End Development Service You Can Get
        </h2>
        <p className='col-lg-4 col-md-6 col-12 sub_head_color m-0 fw-5 content_para '>
          We offer custom front end development services that help your software
          stand out, improve, modernize, and serve your business goals better
        </p>
      </div>
      <FrontEndServicesContent />
    </>
  );
};

export default FrontEndServices;
