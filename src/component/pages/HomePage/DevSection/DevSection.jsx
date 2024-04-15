import React from 'react';
import '../DevSection/DevSection.scss';

import { Arrow } from '../../../../icons/icons';
import { DevSectionContent } from '../../../../common/DevSection/DevSection';

const DevSection = () => {
  return (
    <>
      <div className='DevSection_container'>
        <div className='DevSection_wrapper'>
          {DevSectionContent?.map((item, index) => (
            <div
              key={index}
              className='devSection_content'
            >
              <div>
                <h2 className='sub_part_header'>{item.title}</h2>
                <Arrow />
              </div>
              <p className='content_para'>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DevSection;
