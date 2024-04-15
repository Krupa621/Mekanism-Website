import React from 'react';
import './DescoveryPhase.scss';

function DescoveryPhase() {
  return (
    <div className='flowlinkcontent-wrapper'>
      <div className='title-description'>
        <h1>Discovery phase</h1>
        <p>
          The main goal of our discovery phase is to collect your
          requirements—platforms you want to cover, features to include,
          third-party services to integrate (like Stripe or Google Maps), and
          more. With a Solution Architect, we design architecture from the
          ground up to make sure it goes along with your business goals from the
          early stages.
        </p>
      </div>

      <div className='contentregarding-staff'>
        <h1>Staff</h1>

        <ul>
          <li>Sales Manager</li>
          <li>Business Analyst</li>
          <li>Project Manager</li>
          <li>Solution Architect</li>
          <li>QA Engineers</li>
        </ul>

        <button>
          Book a consultation <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}

export default DescoveryPhase;
