import React from 'react';
import './DescoveryPhase.scss';
function QA() {
  return (
    <div className='flowlinkcontent-wrapper'>
      <div className='title-description'>
        <h1>Quality assurance</h1>
        <p>
          Developers implement features by sprints, while QA engineers test the
          product to find bugs. They test both back end and front end and create
          reports for software developers to fix issues. QA engineers take part
          in the project till release. That’s because their role here is to
          check the functionality developed during each sprint.
        </p>
      </div>
      <div className='contentregarding-staff'>
        <h1>Staff</h1>

        <ul>
          <li>Software Developers</li>
          <li>QA Engineers </li>
        </ul>

        <button>
          Book a consultation <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}

export default QA;
