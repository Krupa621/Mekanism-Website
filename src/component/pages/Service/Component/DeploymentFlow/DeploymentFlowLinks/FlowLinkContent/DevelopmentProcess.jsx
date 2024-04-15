import React from 'react';
import './DescoveryPhase.scss';
function DevelopmentProcess() {
  return (
    <div className='flowlinkcontent-wrapper'>
      <div className='title-description'>
        <h1>Development process</h1>
        <p>
          The development team implements the required features. Depending on
          the project, you can cooperate with various tech experts like iOS,
          Android, or web developers (front-end and back-end). We create
          software in sprints — 2-week periods during which a development team
          has to complete a discussed amount of work.
        </p>
      </div>
      <div className='contentregarding-staff'>
        <h1>Staff</h1>

        <ul>
          <li>Software Developers</li>
        </ul>
        <button>
          Book a consultation <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}

export default DevelopmentProcess;
