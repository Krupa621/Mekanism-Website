import React from 'react';
import { WebAdvanceAppContent } from '../../../../../../common/constant';

const WebAdvanceTechAppContent = () => {
  return (
    <div className='container mx-auto'>
      <div className='row justify-content-end appContentItem'>
        {WebAdvanceAppContent.map((item, i) => (
          <div
            key={i}
            className='col-md-5 col-sm-6 mb-5 AdvanceIoSContentWrapper'
          >
            <ul className='fw-6 sub_part_header color_white p-0'>
              {item.heading}
            </ul>
            <li className='content_para color_white'> {item.listItem1}</li>
            <li className='content_para color_white'>{item.listItem2} </li>
            <li className='content_para color_white'>{item.listItem3} </li>
            <li className='content_para color_white'>{item.listItem4} </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebAdvanceTechAppContent;
