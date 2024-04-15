import React from 'react';

const WebSiteApp = () => {
  return (
    <div className='container px-5 mx-auto mt-140 mordernSiteWeb'>
      <h2 className='sub_header_font fw-6 sub_head_color mb-3'>
        Modern web apps and websites
      </h2>
      <p className='webinfowidth sub_head_color m-0 fw-5 content_para mb-5'>
        We offer web app development services of any complexity for startups,
        mid-sized companies, and enterprises. Looking out for trends and the
        latest technologies, we monitor performance and work towards continuous
        improvement and optimization of web products.
      </p>
      <div className='row d-flex gap-3 align-items-center'>
        <h2 className='col sub_part_header fw-6 sub_head_color mb-3'>
          Accessible
        </h2>
        <h2 className='col sub_part_header fw-6 sub_head_color mb-3'>
          Performant
        </h2>
        <h2 className='col sub_part_header fw-6 sub_head_color mb-3'>
          Responsive
        </h2>
        <h2 className='col sub_part_header fw-6 sub_head_color mb-3'>Secure</h2>
      </div>
    </div>
  );
};

export default WebSiteApp;
