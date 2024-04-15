import React from 'react';

function UiUx() {
  return (
    <div className='flowlinkcontent-wrapper'>
      <div className='title-description'>
        <h1>UI/UX design</h1>
        <p>
          Our UI/UX designers create wireframes, a style guide, and prepare all
          the screens and their possible conditions. If you approve our work,
          the UI/UX designer handles the project over to developers. We prepare
          a style guide containing all the information designers and developers
          may need, including colors, gradients, and typography.
        </p>
      </div>
      <div className='contentregarding-staff'>
        <h1>Staff</h1>

        <ul>
          <li>UI/UX Designers</li>
          <li>QA Engineers</li>
        </ul>

        <button>
          Book a consultation <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}

export default UiUx;
