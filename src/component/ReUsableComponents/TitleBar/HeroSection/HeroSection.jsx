import React from 'react';
import './HeroSection.scss';
import '../../../../assets/style/CommonClass.scss';
import { BreadCrumArrow } from '../../../../icons/icons';
// import heroImg from '../../../../assets/images/hero_img.png';

const HeroSection = ({
  breadCrumOne,
  breadCrumTwo,
  breadCrumThree,
  heading,
  info,
  button,
  image,
  isFromArrow,
  isToArrow,
  isImage,
}) => {
  return (
    <div className='HeroSectionContainer'>
      <>
        <div className='HeroSectionWrapper'>
          <div className='HeroContent'>
            <div className='BreadCrumsSection'>
              <p className='content_para_info'>{breadCrumOne}</p>
              {isToArrow && (
                <div className='from'>
                  <BreadCrumArrow />
                </div>
              )}
              <p className='content_para_info breadcometwo'>{breadCrumTwo}</p>
              {isFromArrow && (
                <div>
                  <BreadCrumArrow />
                </div>
              )}
              <p className='content_para_info'>{breadCrumThree}</p>
            </div>
            <h1 className='header_font'>{heading}</h1>
            <p className='content_para'>{info}</p>
            <div>
              <button>{button}</button>
            </div>
          </div>
          {isImage && (
            <div className='HeroImage'>
              <img
                src={image}
                alt='ArrowIcon'
              />
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default HeroSection;
