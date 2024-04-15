import React from 'react';
import './DescoveryPhase.scss';

function Support() {
  return (
    <div className='flowlinkcontent-wrapper'>
      <div className='title-description'>
        <h1>Support and maintenance</h1>
        <p>
          Our cooperation doesn’t end when the software is live. We can continue
          working on the software to add various tweaks based on feedback from
          users and maintain your solution with improvements and new features.
          Project maintenance stands for bug fixing, stability and performance
          improvements, and code optimization.
        </p>
      </div>
      <div className='contentregarding-staff'>
        <h1>Staff</h1>

        <ul>
          <li>Project Manager</li>
          <li>Developers</li>
          <li>QA engineers</li>
          <li>DevOps engineers</li>
        </ul>

        <button>
          Book a consultation <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}

export default Support;
