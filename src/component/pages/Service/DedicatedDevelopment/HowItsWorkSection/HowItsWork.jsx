import React from 'react';
import './HowItsWork.scss';
import PrevNextSection from './PrevNextSection/PrevNextSection';
import { prenextDedicated } from '../../../../../common/preNextinfo';

function HowItsWork() {
  return (
    <div className='howitswork-wrapper'>
      <div className='howitswork-contant'>
        <h1 className='sub_header_font fw-6'>How it works</h1>
        <p className='content_para'>
          We follow a proven multi-step assembling process to provide the best
          dedicated development team that meets your requirements.
        </p>
        <PrevNextSection info={prenextDedicated} />
      </div>
    </div>
  );
}

export default HowItsWork;
