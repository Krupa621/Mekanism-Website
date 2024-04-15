import React from 'react';
import './DesignToolLogo.scss';
function DesignToolLogo({ logos, name }) {
  return (
    <div className='desgintoollogo-wrapper'>
      <h3 className='sub_part_header fw-6'>{name}</h3>
      <div className='toollogos-wrapper'>
        {logos.map((item, index) => (
          <div
            className='toollogo-wrapper'
            key={index}
          >
            <img src={item.logo} />
            <h4 className='content_para'>{item.toolname}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignToolLogo;
