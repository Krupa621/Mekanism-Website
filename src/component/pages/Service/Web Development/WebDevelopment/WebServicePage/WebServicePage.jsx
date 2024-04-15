import React from 'react';

const WebServicePage = () => {
  return (
    <div className='container mt-80 serviceContainer px-5'>
      <h3 className='fw-4 sub_part_header sub_content_light_color mb-20'>
        Service
      </h3>
      <div className='d-flex align-items-center justify-content-between ServicesItems gap-5'>
        <h4 className='fw-4 sub_part_header mb-20'>SaaS and Cloud Computing</h4>
        <h4 className='fw-4 sub_part_header mb-20'>Progressive Web Apps</h4>
        <h4 className='fw-4 sub_part_header mb-20'>Technology consulting</h4>
      </div>
    </div>
  );
};

export default WebServicePage;
