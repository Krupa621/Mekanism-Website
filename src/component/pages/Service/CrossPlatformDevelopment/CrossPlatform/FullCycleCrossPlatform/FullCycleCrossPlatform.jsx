import React from 'react';
import './FullCycleCrossPlatForm.scss';
import CrossPlatformAppName from './CrossPlatformAppName/CrossPlatformAppName';
import flutter from './../../../../../../assets/images/Flutter.png';
function FullCycleCrossPlatform() {
  return (
    <div className='fullcycle-wrapper'>
      <div className='fullycycle-text-wrapper'>
        <h1 className='sub_header_font'>
          Full-Cycle Cross-Platform App Development
        </h1>
        <p className='pages-name'>
          Cross-platform app development services that fit your business domain
          and requirements, MVPs to verify ideas and launch applications faster,
          support, and enhancement of existing products
        </p>
      </div>
      <div className='crossplatformapp-container mt-60'>
        <CrossPlatformAppName
          icon={<i className='fa-brands fa-react'></i>}
          name='React native'
          info='Flexible and versatile mobile apps suitable for different platforms and business needs'
        />
        <CrossPlatformAppName
          icon={<img src={flutter} />}
          name='Flutter'
          info='High-performant, native-like apps to let you gain both iOS and Android user audience'
        />
      </div>
    </div>
  );
}

export default FullCycleCrossPlatform;
