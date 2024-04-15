import React from 'react';
import IoSBuildImg from '../../../../../../assets/images/IoSBuild/IoSBuild.png';
import './IoSBuild.scss';

const IoSBuild = () => {
  return (
    <>
      <div className='IoSBuildContainer'>
        <div className='IoSBuildWrapper'>
          <div className='IoSBuildContent'>
            <h3 className='sub_header_font'>Build iOS app for any purpose</h3>
            <p className='content_para '>
              We are passionate about introducing new technologies as well as
              checking how the application performs across all the devices and
              iOS versions supported by Apple. It helps to ensure the clients
              get the product that best fits their expectations.
            </p>
          </div>
          <div className='IoSBuildImage'>
            <img
              src={IoSBuildImg}
              alt='IoSBuild'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IoSBuild;
