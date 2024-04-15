import React from 'react';
import './FrontEndCorkWork.css';
import FrontEndCoreWorkContent from './FrontEndCoreWorkContent';

const FrontEndCoreWork = () => {
  return (
    <>
      <div className='container  mx-auto'>
        <h2 className='sub_header_font fw-6 sub_head_color mb-3'>
          Core Frameworks of Frontend Web Development
        </h2>
        <p className='coreWidth sub_head_color m-0 fw-5 content_para mb-5'>
          Our experienced frontend team uses only the best development practices
          and frameworks to deliver excellent user experience by locking rich
          functionality in appealing user interfaces
        </p>
        <FrontEndCoreWorkContent />
      </div>
    </>
  );
};

export default FrontEndCoreWork;
