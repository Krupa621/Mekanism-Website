import React from 'react';
import BackEndServicesContent from './BackEndServicesContent';
import './BackEndService.scss';

const BackEndService = () => {
  return (
    <>
      <div className='BackEndServiceContainer'>
        <h2 className='sub_header_font'>
          Back End Development Service You Can Get
        </h2>
        <p className='content_para '>
          We offer custom back end development services that help your software
          become performant, secure, resilient and serve your business goals
          better
        </p>
      </div>
      <BackEndServicesContent />
    </>
  );
};

export default BackEndService;
