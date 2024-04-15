/* eslint-disable max-len */
import React from 'react';
import './BackEndCOntentInfo.scss';
import { TickMark } from '../../../../../../icons/icons';

const BAckEndCOntentInfo = () => {
  return (
    <div className='BackendInfoContainer'>
      <p className='content_para '>
        Backend development service stands for creation, improvement, and
        management of functionality “behind-the-scenes”: the engine of your
        software
      </p>
      <div className='BackendInfoWrapper'>
        <div className='BackendInfoContent'>
          <TickMark />
          <h3 className='sub_part_header'>Server side and databases</h3>
        </div>
        <div className='BackendInfoContent'>
          <TickMark />
          <h3 className='sub_part_header'>Cost-effective refactoring</h3>
        </div>
        <div className='BackendInfoContent'>
          <TickMark />
          <h3 className='sub_part_header'>Secure clouds and APIs</h3>
        </div>
      </div>
    </div>
  );
};

export default BAckEndCOntentInfo;
