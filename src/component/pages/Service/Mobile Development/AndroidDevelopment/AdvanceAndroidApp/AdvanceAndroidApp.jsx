import React from 'react';
import AdvanceTechContent from '../../../../../ReUsableComponents/AdvanceTechnology/AdvanceTechContent';
import { AdvanceAndroidAppContent } from '../../../../../../common/AdvanceTech';
import './AdvanceAndroidApp.scss';

const AdvanceAndroidApp = () => {
  return (
    <div className='AdvanceContainer'>
      <div className='AdvanceWrapper'>
        <div className='AdvanceContent'>
          <h2 className='sub_header_font color_white'>
            Technologies for advanced Android apps
          </h2>
          <p>
            Without limiting your functional requirements, we use tools and
            services that ensure the best user experience in your final product.
          </p>
        </div>
      </div>
      <AdvanceTechContent componentInfo={AdvanceAndroidAppContent} />
    </div>
  );
};

export default AdvanceAndroidApp;
