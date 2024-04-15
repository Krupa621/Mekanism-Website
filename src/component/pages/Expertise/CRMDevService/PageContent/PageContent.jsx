import React from 'react';
import './PageContent.scss';

function PageContent({ title, infos }) {
  return (
    <div className='pagecontent-wrapper'>
      <h2 className='content_para'>{title}</h2>
      <div className='contents-list'>
        {infos.map((info, index) => (
          <div
            className='content-list'
            key={index}
          >
            <i className='fa-solid fa-check'></i>
            <h3 className='sub_part_header '>{info}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageContent;
