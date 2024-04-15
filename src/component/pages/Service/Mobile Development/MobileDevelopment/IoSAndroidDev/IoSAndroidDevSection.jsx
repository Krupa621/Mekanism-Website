import React from 'react';
import './IoSAndroidDevSection.scss';
import { IosAndroidDetails } from '../../../../../../common/constant';

const IoSAndroidDevSection = () => {
  return (
    <div className='IoSAndroidContainer'>
      <h2 className=' sub_header_font'>
        Full-cycle iOS and Android app development
      </h2>
      <p className='content_par'>
        Efficient solutions to fit your business domain and budget requirements.
        We provide custom development for businesses, MVPs to verify your
        startup ideas and launch your product earlier, and development teams to
        support or enhance existing products.
      </p>
      <div className='IoSAndroidWrapper '>
        {IosAndroidDetails?.map((item, index) => (
          <div
            key={index}
            className='IoSAndroidContent'
          >
            <img
              src={item.img}
              alt='iosimage'
            />
            <p className='sub_part_header'>{item.information}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default IoSAndroidDevSection;
