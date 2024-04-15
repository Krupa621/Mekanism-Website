import React from 'react';
import './LifeCycleContent.scss';

function LifeCycleContent({ contents, setSelectedStack, selectedStack }) {
  function handlename(index) {
    setSelectedStack(selectedStack === index ? null : index);
  }

  return (
    <div className='lifecyclecontent-wrapper'>
      {contents.map((item, index) => (
        <div
          className='left-side-content'
          key={index}
        >
          {item.names.map((name, index) => (
            <div
              className={`left-side-text-wrapper ${
                selectedStack === index ? 'active' : ''
              }`}
              onClick={() => handlename(index)}
              key={index}
            >
              <h3 className='sub_part_header fw-6'>0{index + 1}</h3>
              <h2 className='sub_part_header fw-6'>{name}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LifeCycleContent;
