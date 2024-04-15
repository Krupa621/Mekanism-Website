import React from 'react';
import './UiUxDesignProcess.scss';
import ProcessOfDesign from './ProcessOfDesign/ProcessOfDesign';
import { processinfo } from '../../../../../common/processInfo';
function UiUxDesignProcess() {
  return (
    <div className='Uiuxdeginprocess-wrapper'>
      <h2 className='sub_header_font fw-6'>Our UI/UX design process</h2>
      {processinfo.map((data, index) => (
        <ProcessOfDesign
          key={index}
          {...data}
          index={index}
        />
      ))}
    </div>
  );
}

export default UiUxDesignProcess;
