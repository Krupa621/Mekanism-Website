import React from 'react';

const BuildLooking = () => {
  return (
    <>
      <div className='row container mx-auto mt-140 buildLookingContainer align-items-center justify-content-between'>
        <div className='col-lg-6 col-md-12'>
          <p className='m-0 content_para color_white FEbuildWidth'>
            Get customized front-end development services to create a modern
            interface for effective user involvement. Contact us to receive a
            full consultation and project cost estimation.
          </p>
        </div>
        <div className='col-lg-6 col-md-12'>
          <h2 className='m-0 fw-6 sub_header_font color_white mb-4'>
            Looking to build impressive front ends?
          </h2>
          <button className='contactBtn'>Get Consultation </button>
        </div>
      </div>
      {/* * mobileview * */}
      <div className='row container mx-auto mt-140  buildLookingContainerMobView align-items-center justify-content-between'>
        <h2 className='m-0 fw-6 sub_header_font color_white mb-4'>
          Looking to build impressive front ends?
        </h2>
        <p className='m-0 content_para color_white'>
          Get customized front-end development services to create a modern
          interface for effective user involvement. Contact us to receive a full
          consultation and project cost estimation.
        </p>
        <div className='mt-4'>
          <button className='contactBtn'>Get Consultation </button>
        </div>
      </div>
      ;
    </>
  );
};

export default BuildLooking;
