import React from 'react';
import TechStackAndroidContent from './TechStackAndroidContent';
import './TechStackAndroidContent.scss';

const TechStakeAndroidDev = () => {
  return (
    <div className='TechContainer'>
      <h2 className='sub_header_font'>Android app technology stack we use</h2>
      <p className='content_para'>
        Our iOS app developers keep up with the latest tech trends and sharpen
        their expertise to deliver software solutions for a rapidly evolving
        market.
      </p>
      <TechStackAndroidContent />
    </div>
  );
};

export default TechStakeAndroidDev;
