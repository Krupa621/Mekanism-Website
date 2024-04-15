import React from 'react';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import './TitleBar.scss';

const TitleBar = ({
  heroSection,
  extraClassName,
  isFromArrow,
  isToArrow,
  isImage,
}) => {
  return (
    <div
      className={`TitleBarContainer${
        extraClassName ? ` ${extraClassName}` : ''
      }`}
    >
      <Header />
      {heroSection.map((data, i) => (
        <HeroSection
          key={i}
          isFromArrow={isFromArrow}
          isToArrow={isToArrow}
          isImage={isImage}
          {...data}
        />
      ))}
    </div>
  );
};

export default TitleBar;
