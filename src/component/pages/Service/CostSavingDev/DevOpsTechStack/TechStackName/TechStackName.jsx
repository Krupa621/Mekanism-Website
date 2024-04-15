import React from 'react';
import './TechStackName.scss';

function TechStackName({ names, setSelectedStack, selectedStack }) {
  function handlename(i) {
    setSelectedStack(selectedStack === i ? null : i);
  }

  return (
    <div className='techstack-names-wrapper'>
      {names.map((name, i) => (
        <div
          className={`techstack-name-wrapper ${
            selectedStack === i ? 'active' : ''
          }`}
          key={i}
          onClick={() => handlename(i)}
        >
          <h2 className='content_para fw-6'>{name}</h2>
        </div>
      ))}
    </div>
  );
}

export default TechStackName;
