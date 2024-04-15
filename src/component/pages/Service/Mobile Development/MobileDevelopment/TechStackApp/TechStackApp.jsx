import React from 'react';
import TechStackContent from './TechStackContent';
import './TechStackApp.scss';

const TechStackApp = () => {
  return (
    <div className='TechStackAppContainer'>
      <div className='TechStackAppWrapper'>
        <h2 className='sub_header_font'>Tech stack for custom mobile apps</h2>
        <p className='content_para '>
          Our iOS app developers keep up with the latest tech trends and sharpen
          their expertise to deliver software solutions for a rapidly evolving
          market.
        </p>
      </div>
      <TechStackContent />
    </div>
  );
};

export default TechStackApp;
