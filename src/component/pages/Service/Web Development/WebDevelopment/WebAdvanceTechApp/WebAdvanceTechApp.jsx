import React from 'react';
import WebAdvanceTechAppContent from './WebAdvanceTechAppContent';

const WebAdvanceTechApp = () => {
  return (
    <div className='container-fluid AdvanceIoSAppContainer mt-140'>
      <div className='row container mx-auto justify-content-between px-lg-5 py-5'>
        <h2 className='col-lg-5 col-md-12 fw-6 sub_header_font color_white'>
          Technologies for advanced web apps
        </h2>
        <p className='col-lg-5 col-md-12 content_para mt-2 color_white'>
          Without limiting your functional requirements, we use tools and
          services that ensure the best user experience in your final product.
        </p>
      </div>
      <WebAdvanceTechAppContent />
    </div>
  );
};

export default WebAdvanceTechApp;
