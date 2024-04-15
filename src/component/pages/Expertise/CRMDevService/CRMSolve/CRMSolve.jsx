import React from 'react';
import './CRMSolve.scss';
import Challenges from './Challenges/Challenges';
function CRMSolve({ challengesCrmData }) {
  return (
    <div className='crm-solve-wrapper'>
      <div className='crm-solve-text-wrapper'>
        <h2 className='sub_header_font fw-6'>How we solve CRM challenges</h2>
        <p className='content_para'>
          Our developers come up with a personalized solution to each challenge
          that complies with customer requirements for a new CRM.
        </p>
      </div>
      <div className='challenges-container'>
        {challengesCrmData.map((data, i) => (
          <Challenges
            key={i}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}

export default CRMSolve;
