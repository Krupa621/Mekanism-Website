import React from 'react';
import './AdvanceIoSApp.scss';
import AdvancedIoSAppContent from '../AdvancedIoSAppContent/AdvancedIoSAppContent';

const AdvanceIoSApp = () => {
  return (
    <div className='AdvanceContainer'>
      <div className='AdvanceWrapper'>
        <h2 className='sub_header_font'>Technologies for advanced iOS apps</h2>
        <p className='content_para'>
          Without limiting your functional requirements, we use tools and
          services that ensure the best user experience in your final product.
        </p>
      </div>
      <AdvancedIoSAppContent />
    </div>
  );
};

export default AdvanceIoSApp;
