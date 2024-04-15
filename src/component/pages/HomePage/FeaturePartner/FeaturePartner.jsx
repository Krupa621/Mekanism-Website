import React from 'react';
import './FeaturePartner.scss';
import FeatureItems from './FeatureItems';

const FeaturePartner = () => {
  return (
    <div className='featurContainer'>
      <h2 className='sub_header_font'>Featured Partners & Clients</h2>
      <p className='content_para'>
        Clients and partners we’ve worked with frequently recommend us to others
        thanks to our individual approach to tech problems
      </p>
      <FeatureItems />
    </div>
  );
};

export default FeaturePartner;
