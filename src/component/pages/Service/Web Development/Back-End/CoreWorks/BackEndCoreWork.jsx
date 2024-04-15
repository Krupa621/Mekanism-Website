import React from 'react';
import BackEndCoreWorkContent from './BackEndCoreWorkContent';
import './BackEndCoreWork.scss';

const BackEndCoreWork = () => {
  return (
    <>
      <div className='BackEndCoreContainer'>
        <h2 className='sub_header_font'>
          Core Technology Stack for Backend Development
        </h2>
        <p>
          Our backend team approaches the best development practices and
          integrations to transform the project requirements into a steady
          software architecture
        </p>
        <BackEndCoreWorkContent />
      </div>
    </>
  );
};

export default BackEndCoreWork;
