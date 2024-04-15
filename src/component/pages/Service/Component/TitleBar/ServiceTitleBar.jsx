import React from 'react';
import './ServiceTitleBar.scss';
import { ServiceTitleDetails } from '../../../../../common/TitleBar';
// import TitleBar from '../../../../ReUsableComponents/TitleBar/TitleBar';
import Header from '../../../../ReUsableComponents/TitleBar/Header/Header';
import HeroSection from '../../../../ReUsableComponents/TitleBar/HeroSection/HeroSection';

const ServiceTitleBar = () => {
  return (
    <>
      <div className='HomeService'>
        <Header />
        <HeroSection
          titleBarInfo={ServiceTitleDetails}
          isImage={false}
        />
      </div>
    </>
  );
};

export default ServiceTitleBar;
