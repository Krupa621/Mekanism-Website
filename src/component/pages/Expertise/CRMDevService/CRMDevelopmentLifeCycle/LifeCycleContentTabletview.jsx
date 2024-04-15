import React, { useState } from 'react';
import './LifeCycleContent/LifeCycleContent.scss';

function LifeCycleContentTabletview({ contents }) {
  const [selectedStack, setSelectedStack] = useState(null);

  function handlename(index) {
    setSelectedStack(selectedStack === index ? null : index);
  }

  return (
    <div className='lifecyclecontent-tabletview-wrapper'>
      {contents.map((item, index) => (
        <div
          className='left-side-content'
          key={index}
        >
          <div
            className={`left-side-text-wrapper ${
              selectedStack === index ? 'active' : ''
            }`}
            onClick={() => handlename(index)}
          >
            <h3 className='sub_part_header fw-6'>0{index + 1}</h3>
            <h2 className='sub_part_header fw-6'>{item.name}</h2>{' '}
          </div>
          {selectedStack === index && (
            <div className='content-details'>
              <div className='header-wrapper'>
                <p className='content_para'>{item.detail}</p>{' '}
                <h2 className='sub_part_header fw-6'>Staff</h2>
                <div className='list-wrapper'>
                  {item.lists.map((listItem, listItemIndex) => (
                    <h3
                      key={listItemIndex}
                      className='content_para'
                    >
                      {listItem}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LifeCycleContentTabletview;
