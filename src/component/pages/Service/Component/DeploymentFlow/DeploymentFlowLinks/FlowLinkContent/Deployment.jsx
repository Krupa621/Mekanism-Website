import React from 'react';

function Deployment() {
  return (
    <div className='flowlinkcontent-wrapper'>
      <div className='title-description'>
        <h1>Deployment</h1>
        <p>
          Before launching the project, QA engineers perform regression testing
          to ensure that everything works correctly. We help with the app
          release on AppStore or Google Play. In case of the web project, we
          move it to the live server on the release day. Once you’re satisfied
          with the result, the team passes all project materials to you.
        </p>
      </div>

      <div className='contentregarding-staff'>
        <h1>Staff</h1>
        <ul>
          <li>Project Manager</li>
          <li>Software Developers</li>
          <li>QA engineers</li>
          <li>DevOps</li>
        </ul>
        <button>
          Book a consultation <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}

export default Deployment;
