import React from 'react';
import './RightSideContent.scss';

function RightSideContent({ contents, selectedStack }) {
  const selectedContent = contents[selectedStack];

  if (!selectedContent) {
    return null;
  }

  return (
    <div className='rightside-content-wrapper'>
      <div className='rightside-content-text-wrapper'>
        <div className='header-wrapper'>
          <h3 className='sub_part_header fw-6'>{selectedContent.title}</h3>
          <p className='content_para'>{selectedContent.detail}</p>
          <h2 className='sub_part_header fw-6'>Staff</h2>
          <div className='list-wrapper'>
            {selectedContent.lists.map((list, index) => (
              <h3
                key={index}
                className='content_para'
              >
                {list}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideContent;
