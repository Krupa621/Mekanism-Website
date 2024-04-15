import React from 'react';
import './AboutUs.scss';
import arrowIcon from '../../../../assets/images/arrow.svg';
import about1 from '../../../../assets/images/about1.png';
import about2 from '../../../../assets/images/about2.png';
import about3 from '../../../../assets/images/about3.png';

const AboutUs = () => {
  return (
    <div className='AboutContainer'>
      <div className='AboutWrapper'>
        <h2 className='sub_header_font'>About company</h2>
        <div className='explore_btn'>
          <p className='content_para'>More About Company</p>
          <img
            src={arrowIcon}
            alt='ArrowIcon'
          />
        </div>
      </div>
      <div className='AboutContent'>
        <div className=''>
          <p className='content_para sub_head_color '>
            company is a custom application development company that has been
            helping clients all over the world to reach their goals since 2011.
            Our multi-industry expertise and customer-oriented approach add
            business value and help clients get the digital products best fit
            their needs
          </p>
          <div>
            <img
              src={about1}
              alt='about1'
              className='aboutImageOne'
            />
            <img
              src={about2}
              alt='about2'
              className='aboutImageTwo'
            />
          </div>
        </div>
        <div className='col-4 p-0'>
          <img
            src={about3}
            alt='about3'
            className='aboutImageThree'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
