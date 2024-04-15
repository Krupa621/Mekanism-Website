import React from 'react';
import Accordion from './Accordion';
import './QueContainer.scss';

const QueContainer = () => {
  return (
    <>
      <div className='queContent'>
        <h2 className='sub_header_font'>Questions you may have</h2>
        <p className='content_para'>
          Learn more about our iOS app development workflow.
        </p>
      </div>
      <Accordion />
    </>
  );
};

export default QueContainer;
