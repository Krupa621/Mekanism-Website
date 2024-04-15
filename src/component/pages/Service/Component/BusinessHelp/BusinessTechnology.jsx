import React from 'react';
import './BusinessTechnology.scss';
import { BusiTechContent } from '../../../../../common/BusinessTechnology/BusinessTech';

const BusinessTechnology = () => {
  return (
    <>
      <div className='businessTechContainer '>
        {BusiTechContent.map((items, index) => (
          <div key={index}>
            <li className='sub_part_header'>{items.heading}</li>
            <p className='content_para'>{items.info}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BusinessTechnology;
