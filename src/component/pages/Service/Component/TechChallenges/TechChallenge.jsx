import React from 'react';
import './TechChallenge.scss';

const TechChallenge = ({ ServicePageTechChallenge }) => {
  return (
    <div className='techChallengeContainer'>
      {ServicePageTechChallenge.map((item) => (
        <>
          <h2 className='sub_header_font'>{item.heading}</h2>
          <div className='challangeContain'>
            <p className='content_para'>{item.info}</p>
            <button>{item.button}</button>
          </div>
        </>
      ))}
    </div>
  );
};

export default TechChallenge;
