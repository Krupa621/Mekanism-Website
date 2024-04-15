import React from 'react';
import AppBuildData from '../../../../../ReUsableComponents/AppBuildSection/AppBuildData';
import './AndroidAppBuild.scss';
import {
  AndroidAppBuildItems,
  AndroidDetails,
  AndroidTabs,
} from '../../../../../../common/AppBuildSection';
import AppBuildDetails from '../../../../../ReUsableComponents/AppBuildSection/AppBuildDetails';

const AndroidAppBuild = () => {
  return (
    <>
      <div className='androidAppBuildContainer'>
        <AppBuildDetails contentDetails={AndroidDetails} />
        <AppBuildData
          contentData={AndroidAppBuildItems}
          tabs={AndroidTabs}
        />
      </div>
    </>
  );
};
export default AndroidAppBuild;
