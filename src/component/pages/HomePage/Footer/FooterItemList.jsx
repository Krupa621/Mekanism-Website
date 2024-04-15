/* eslint-disable max-len */
import React from 'react';
import './FooterItemList.scss';
import { FooterItemListWrapper } from '../../../../common/Footer/Footer';

const FooterItemList = () => {
  return (
    <>
      {FooterItemListWrapper?.map((item, index) => (
        <div
          key={index}
          className='TabViewFooter'
        >
          <ul className='content_para'>{item.heading}</ul>
          <h4 className='content_para'>{item.SubHeading}</h4>
          <li className='content_para'>{item.subheadingFirst}</li>
          <h4 className='content_para'>{item.Subheading}</h4>
          <li className='content_para'>{item.subheadingSecond}</li>
          <li className='content_para'>{item.subheadingThird}</li>
          <li className='content_para'>{item.subheadingForth}</li>
          <li className='content_para'>{item.subheadingFifth}</li>
          <li className='content_para'>{item.subheadingSix}</li>
          <li className='content_para'>{item.subheadingSeventh}</li>
        </div>
      ))}

      <div className='mobileViewFooter'>
        <div className='mobileViewDetail'>
          <div className='mobViewDetails'>
            <ul className='content_para'>Service</ul>
            <li className='content_para'>iOS app Development</li>
            <li className='content_para'>Android app development</li>
            <li className='content_para'>Flutter App Development</li>
            <li className='content_para'>Web Development</li>
            <li className='content_para'>UI/UX Design</li>
            <li className='content_para'>Quality Assurance</li>
            <li className='content_para'>DevOps Services</li>
          </div>
          <div className='companyDetail'>
            <h4 className='content_para'>Company</h4>
            <h4 className='content_para'>Portfolio</h4>
            <h4 className='content_para'>Blog</h4>
            <h4 className='content_para'>Contacts</h4>
          </div>
        </div>      
      </div>
    </>
  );
};

export default FooterItemList;
