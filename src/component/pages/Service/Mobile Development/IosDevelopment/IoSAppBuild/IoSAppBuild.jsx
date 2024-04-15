import React from 'react';
import '../../../../../ReUsableComponents/AppBuildSection/AppBuildData.scss';
import AppBuildData from '../../../../../ReUsableComponents/AppBuildSection/AppBuildData';
import {
  IoSAppBuildItems,
  IoSAppBuildertabs,
  IoSDetails,
} from '../../../../../../common/AppBuildSection';
import AppBuildDetails from '../../../../../ReUsableComponents/AppBuildSection/AppBuildDetails';
import './IoSAppBuild.scss';

const IoSAppBuild = () => {
  return (
    <>
      <div className='iOSBuildContainer'>
        <AppBuildDetails contentDetails={IoSDetails} />
        <AppBuildData
          contentData={IoSAppBuildItems}
          tabs={IoSAppBuildertabs}
        />
      </div>
    </>
  );
};

export default IoSAppBuild;
