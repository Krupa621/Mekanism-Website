import React, { useState } from 'react';
import './TabletviewMenubar.scss';
import HiringButton from './../HiringButton/HiringButton';

function TabletviewMenubar({ onClose }) {
  const [activeSection, setActiveSection] = useState('');

  const handleLinkClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
  };

  const handleMenuIconClick = () => {
    onClose();
  };

  const isLinkActive = (section) => {
    return activeSection === section;
  };

  return (
    <div className='tabletview-menubar-wrapper'>
      <div className='tabletview-titlebar'>
        <div className='logo-button'>
          
          <HiringButton className='hirindbutton' />
        </div>
        <i
          className='fa-solid fa-bars'
          onClick={handleMenuIconClick}
        ></i>
      </div>
      <div className='bottompart-tableview-menu'>
        <div
          className={`link-name ${isLinkActive('service') ? 'active' : ''}`}
          onClick={() => handleLinkClick('service')}
        >
          <h3>Service</h3>
          <i
            className={`fa-solid ${
              isLinkActive('service') ? 'fa-chevron-up' : 'fa-chevron-down'
            }`}
          ></i>
        </div>
        {isLinkActive('service') && (
          <div className='link-content'>
            <div className='servicelink-content'>
              <h3>Mobile Development</h3>
              <div className='subcontent'>
                <i className='fa-brands fa-apple'></i>
                <h2>iOS app Development</h2>
              </div>
              <div className='subcontent'>
                <i className='fa-brands fa-android'></i>
                <h2>Android app development</h2>
              </div>
            </div>
            <div className='servicelink-content'>
              <h3>Web Development</h3>
              <div className='subcontent'>
                <i className='fa-brands fa-edge'></i>
                <h2>Front-end Development</h2>
              </div>
              <div className='subcontent'>
                <i className='fa-solid fa-server'></i>
                <h2>Back-end development</h2>
              </div>
            </div>
            <div className='servicelink-content'>
              <h3>Cross-platform Development</h3>
              <div className='subcontent'>
                <i className='fa-brands fa-apple'></i>
                <h2>Flutter app Development</h2>
              </div>
              <div className='subcontent'>
                <i className='fa-brands fa-react'></i>
                <h2>React native app development</h2>
              </div>
            </div>
          </div>
        )}

        <div
          className={`link-name ${isLinkActive('industries') ? 'active' : ''}`}
          onClick={() => handleLinkClick('industries')}
        >
          <h3>Industries</h3>
          <i
            className={`fa-solid ${
              isLinkActive('industries') ? 'fa-chevron-up' : 'fa-chevron-down'
            }`}
          ></i>
        </div>
        {isLinkActive('industries') && <div className='link-content'></div>}

        <div
          className={`link-name ${isLinkActive('expertise') ? 'active' : ''}`}
          onClick={() => handleLinkClick('expertise')}
        >
          <h3>Expertise</h3>
          <i
            className={`fa-solid ${
              isLinkActive('expertise') ? 'fa-chevron-up' : 'fa-chevron-down'
            }`}
          ></i>
        </div>
        {isLinkActive('expertise') && <div className='link-content'></div>}

        <div
          className={`link-name ${isLinkActive('company') ? 'active' : ''}`}
          onClick={() => handleLinkClick('company')}
        >
          <h3>Company</h3>
          <i
            className={`fa-solid ${
              isLinkActive('company') ? 'fa-chevron-up' : 'fa-chevron-down'
            }`}
          ></i>
        </div>
        {isLinkActive('company') && <div className='link-content'></div>}

        <div className='link-name'>
          <h3>Portfolio</h3>
        </div>

        <div
          className={`link-name ${isLinkActive('blog') ? 'active' : ''}`}
          onClick={() => handleLinkClick('blog')}
        >
          <h3>Blog</h3>
          <i
            className={`fa-solid ${
              isLinkActive('blog') ? 'fa-chevron-up' : 'fa-chevron-down'
            }`}
          ></i>
        </div>
        {isLinkActive('blog') && <div className='link-content'></div>}
      </div>
      <div className='button-tabletviewmenu'>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default TabletviewMenubar;
