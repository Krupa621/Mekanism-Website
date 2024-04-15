import React from 'react';
import './DetailContent.scss';
function DetailContent({ name, info, extraClassName, fontWeight, fontSize }) {
  return (
    <div className='DetailContent-wrapper'>
      <i className='fa-solid fa-check'></i>
      <div className='detailcontent-text-wrapper'>
        <h2
          className={`sub_part_header${
            extraClassName ? ` ${extraClassName}` : ''
          }`}
          style={{ fontWeight: fontWeight, fontSize: fontSize }}
        >
          {name}
        </h2>
        <p className='content_para'>{info}</p>
      </div>
    </div>
  );
}

export default DetailContent;
