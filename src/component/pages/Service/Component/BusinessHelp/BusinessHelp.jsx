import React from 'react';
import './BusinessHelp.scss';
import BusinessTechnology from './BusinessTechnology';

const BusinessHelp = () => {
  return (
    <>
      <div className='container HelpContainer'>
        <div className='helpWrapper '>
          <h2 className='sub_header_font'>How we can help your business</h2>
          <p className='content_para'>
            As a software development company, we can deliver a wide range of
            modernization options htmlFor your software
          </p>
        </div>
        <BusinessTechnology />
      </div>
    </>
  );
};

export default BusinessHelp;
