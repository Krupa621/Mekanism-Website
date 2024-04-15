import React from 'react';
import upper_logo from '../../../../assets/images/upper.png';
import FooterItemList from './FooterItemList';
import './FooterList.scss';

function FooterList() {
  function handlearrow() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className='footerWrapper'>
      <div className='footerContent'>
        <FooterItemList />
      </div>
      <div className='upperLogoContainer'>
        <a
          id='link'
          href='#upperLogoItem'
        >
          <img
            src={upper_logo}
            alt=''
            className='upperLogoWrapper'
            onClick={handlearrow}
          />
        </a>
      </div>
      <div className='socialDetails'>
        <div>
          <div className='socialDetailsMobView'>
            <h3 className='content_para'>company</h3>
            <div>
              <p className='content_para'>Facebook</p>
              <p className='content_para'>Instagram</p>
              <p className='content_para'>Twitter</p>
              <p className='content_para'>Dribbble</p>
              <p className='content_para'>Linkedin</p>
            </div>
          </div>
          <div className='siteDetails'>
            <h4 className='content_para'>
              © company 2011-2023. All rights reserved
            </h4>
            <div>
              <p className='content_para'>Privacy Policy</p>
              <p className='content_para'>Cookies Policy</p>
              <p className='content_para'>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
      <div className='MobSocialDetails'>
        <div className='mobDetails'>
          <div>
            <h4 className='content_para'>
              © company 2011-2023. All rights reserved
            </h4>
            <p className='m-0 content_para'>Privacy Policy</p>
          </div>
          <div>
            <p className='m-0 content_para'>Cookies Policy</p>
            <p className='m-0 content_para'>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterList;
