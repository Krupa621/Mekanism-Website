import React from 'react';

import {
  WebCustomDetails,
  WebDevDetails,
  WebDevTabs,
} from '../../../../../../common/AppBuildSection';
import AppBuildData from '../../../../../ReUsableComponents/AppBuildSection/AppBuildData';
import AppBuildDetails from '../../../../../ReUsableComponents/AppBuildSection/AppBuildDetails';

const WebSupport = () => {
  return (
    <div className='container mt-140 mx-auto'>
      <AppBuildDetails contentDetails={WebDevDetails} />
      <AppBuildData
        contentData={WebCustomDetails}
        tabs={WebDevTabs}
      />
    </div>
  );
};

export default WebSupport;
