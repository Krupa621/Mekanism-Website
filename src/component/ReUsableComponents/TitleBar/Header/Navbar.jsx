import React, { useState } from 'react';
import './Navbar.scss';
// import logo from '../../../../assets/images/meka_logo.png';
import { MenuIcon } from '../../../../icons/icons';
import ServicePopUpBox from './ServicePopupBox/ServicePopUpBox';
import TabletviewMenubar from './TabletviewMenubar/TabletviewMenubar';
import HiringButton from './HiringButton/HiringButton';

const Navbar = () => {
  const [showServicePopup, setShowServicePopup] = useState(false);
  const [showTabletMenu, setShowTabletMenu] = useState(false);

  const toggleServicePopup = () => {
    setShowServicePopup(!showServicePopup);
  };

  const toggleTabletMenu = () => {
    setShowTabletMenu(!showTabletMenu);
  };

  return (
    <>
      <div className='navbarContainer'>
        <div className='navbarLogoSide'>
          {/* <img
            src={logo}
            alt='brand_logo'
            className='brand_logo'
          /> */}
          <HiringButton />
        </div>
        <div className='navbarContentDetails'>
          <div className='listItems'>
            <div className='navContent'>
              <p
                className='content_para'
                onClick={toggleServicePopup}
              >
                Service
              </p>
              <p className='content_para'>Industries</p>
              <p className='content_para'>Expertise</p>
              <p className='content_para'>Company</p>
              <p className='content_para'>Portfolio</p>
              <p className='content_para'>Blog</p>
            </div>
            <div>
              <button>Contact us</button>
              {showServicePopup && <ServicePopUpBox />}
            </div>
          </div>
          <div
            className='MenuIcon'
            onClick={toggleTabletMenu}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
      {showTabletMenu && <TabletviewMenubar onClose={toggleTabletMenu} />}
    </>
  );
};

export default Navbar;
