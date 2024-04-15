import React from 'react';
import './MemberDetail.scss';
import member from './../../../../../../../assets/images/member.png';
function MemberDetail({ name, position }) {
  return (
    <div className='detailpart-wrapper'>
      <img
        src={member}
        alt='member'
      />
      <div className='member-detail-container'>
        <div className='name-secialmedia-wrapper mt-20'>
          <h3 className='content_para'>{name}</h3>
          <div className='social-media'>
            <i className='fa-regular fa-envelope'></i>
            <i className='fa-brands fa-linkedin'></i>
          </div>
        </div>
        <h2 className='content_para'>{position}</h2>
        <button className='content_para mt-20'>Book Consultation</button>
      </div>
    </div>
  );
}

export default MemberDetail;
