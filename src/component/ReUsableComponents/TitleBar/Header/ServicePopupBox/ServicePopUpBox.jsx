import React from 'react';
import './ServicePopupBox.scss';
function ServicePopUpBox() {
  return (
    <div className='servicepopupbox-container'>
      <div className='technologies'>
        <div className='mobile-development'>
          <h2>Mobile Development</h2>
          <div className='subtechA'>
            <i className='fa-brands fa-apple'></i>
            <div className='detailofsubtask'>
              <h3>iOS app Development</h3>
              <p>Native Swift apps for all Apple devices</p>
            </div>
          </div>
          <div className='subtechA'>
            <i className='fa-brands fa-android'></i>
            <div className='detailofsubtask'>
              <h3>Android app development</h3>
              <p>Build native apps for android with Kotlin</p>
            </div>
          </div>
        </div>

        <div className='mobile-development'>
          <h2>Web Development</h2>
          <div className='subtechA'>
            <i className='fa-brands fa-edge'></i>
            <div className='detailofsubtask'>
              <h3>Front-end development</h3>
              <p>User-centric software with smooth UI</p>
            </div>
          </div>
          <div className='subtechA'>
            <i className='fa-solid fa-server'></i>
            <div className='detailofsubtask'>
              <h3>Back-end development</h3>
              <p>Robust and secure server-side solutions</p>
            </div>
          </div>
        </div>

        <div className='mobile-development'>
          <h2>Cross-Platform Development</h2>
          <div className='subtechA'>
            <i className='fa-brands fa-simplybuilt'></i>
            <div className='detailofsubtask'>
              <h3>Flutter app development</h3>
              <p>Dart-based cross-platform development</p>
            </div>
          </div>
          <div className='subtechA'>
            <i className='fa-brands fa-react'></i>
            <div className='detailofsubtask'>
              <h3>React-native app development</h3>
              <p>Building apps using JavaScript framework</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bottompart'>
        <div className='bottom-title'>
          <h3>Dedicated team</h3>
          <p>Experienced tech staff to extend a team</p>
        </div>
        <div className='bottom-title'>
          <h3>DevOps Services</h3>
          <p>Security, Automation, Cloud consulting</p>
        </div>
        <div className='bottom-title'>
          <h3>UI/UX design</h3>
          <p>Material and HIG design for all platforms</p>
        </div>
      </div>
    </div>
  );
}

export default ServicePopUpBox;
