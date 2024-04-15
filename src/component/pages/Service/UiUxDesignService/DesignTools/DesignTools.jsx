import React from 'react';
import './DesignTools.scss';
import DesignToolLogo from './DesignToolLogo/DesignToolLogo';
import { designtool } from '../../../../../common/DesignTool';
function DesignTools() {
  return (
    <div className='designtool-wrapper'>
      <div className='designtool-textwrapper'>
        <h2 className='sub_header_font fw-6'>
          Our expertise in software design tools
        </h2>
        <p className='content_para'>
          We are proficient in various UI/UX design tools so our clients can be
          sure they receive functional and appealing interfaces designed within
          set time frames
        </p>
      </div>
      <div className='designtool-container'>
        {designtool.map((data, i) => (
          <DesignToolLogo
            key={i}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}

export default DesignTools;
