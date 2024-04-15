import React from 'react';
import './CrossPlatformAppName.scss';
function CrossPlatformAppName({ icon, name, info }) {
  return (
    <div className='crossappname-wrapper'>
      <div className='name-icon'>
        {icon}
        <h3 className='sub_part_header'>{name}</h3>
      </div>
      <p className='content_para'>{info}</p>
      <button className='content_para'>
        Explore more <i className='fa-solid fa-arrow-right'></i>
      </button>
    </div>
  );
}

export default CrossPlatformAppName;
