import React from 'react';
import './AndroidAppBuilt.scss';
import AndroidAppBuild from '../AndroidBuild/AndroidAppBuild';

const AndroidAppBuilt = () => {
  return (
    <>
      <div className='AppBuiltContainer'>
        <h2 className='sub_header_font'>Android apps built to profit</h2>
        <p className='content_para'>
          Mobile apps are able to solve complex business challenges through
          technologies. At company, we build custom Android applications
          tailored to your business needs.
        </p>
      </div>
      <AndroidAppBuild />
    </>
  );
};

export default AndroidAppBuilt;
