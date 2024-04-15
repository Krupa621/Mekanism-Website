import React from 'react';
import IoSBuildImg from '../../../../../../assets/images/IoSBuild/IoSBuild.png';
import './AndroidAppBuild.scss';

const AndroidBluid = () => {
  return (
    <>
      <div className='AndroidContainer'>
        <div className='AndroidWrapper'>
          <div className='AndroidContent'>
            <h3 className='sub_header_font'>
              Build Android app for any purpose
            </h3>
            <p className='content_para'>
              Our software engineers design applications with attention to
              detail and bearing in mind every peculiarity of the operating
              system. They take care of the application’s compatibility with all
              Android versions and devices so you can be sure your users will
              get a top-notch final product.
            </p>
          </div>
          <div>
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

export default AndroidBluid;
