import React from 'react';
import './ListDetails.scss';
import AppleIcon from '../../../../assets/images/apple.svg';

const ListDetails = () => {
  return (
    <div className='ListDetailscontainer'>
      <div className='ListDetailsWrapper'>
        <h2 className='sub_part_header'>Mobile Development</h2>
        <div className='ListContent'>
          <img
            src={AppleIcon}
            alt='AppleIcon'
            className='AppleIcon'
          />
          <div>
            <h3 className='content_para'>iOS app Development</h3>
            <p className='content_para'>
              Native Swift apps for all Apple devices
            </p>
          </div>
        </div>
        <div className='ListContent'>
          <img
            src={AppleIcon}
            alt='AppleIcon'
            className='AppleIcon'
          />
          <div>
            <h3 className='content_para'>iOS app Development</h3>
            <p className='content_para'>
              Native Swift apps for all Apple devices
            </p>
          </div>
        </div>
      </div>
      <div className='ListDetailsWrapper'>
        <h2 className='sub_part_header'>Mobile Development</h2>
        <div className='ListContent'>
          <img
            src={AppleIcon}
            alt='AppleIcon'
            className='AppleIcon'
          />
          <div>
            <h3 className='content_para'>iOS app Development</h3>
            <p className='content_para'>
              Native Swift apps for all Apple devices
            </p>
          </div>
        </div>
        <div className='ListContent'>
          <img
            src={AppleIcon}
            alt='AppleIcon'
            className='AppleIcon'
          />
          <div>
            <h3 className='content_para'>iOS app Development</h3>
            <p className='content_para'>
              Native Swift apps for all Apple devices
            </p>
          </div>
        </div>
      </div>
      <div className='ListDetailsWrapper'>
        <h2 className='sub_part_header'>Mobile Development</h2>
        <div className='ListContent'>
          <img
            src={AppleIcon}
            alt='AppleIcon'
            className='AppleIcon'
          />
          <div>
            <h3 className='content_para'>iOS app Development</h3>
            <p className='content_para'>
              Native Swift apps for all Apple devices
            </p>
          </div>
        </div>
        <div className='ListContent'>
          <img
            src={AppleIcon}
            alt='AppleIcon'
            className='AppleIcon'
          />
          <div>
            <h3 className='content_para'>iOS app Development</h3>
            <p className='content_para'>
              Native Swift apps for all Apple devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
