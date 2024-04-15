import React from 'react';
import './DescoveryPhase.scss';
function FirstContent() {
  return (
    <div className='flowlinkcontent-wrapper'>
      <div className='title-description'>
        <h1>First contact</h1>
        <p>
          After you leave a request on our website, it goes straight to our
          manager. After processing it, the manager contacts you within 24 hours
          to schedule a meeting for a more detailed conversation about the
          project. You describe your project requirements and business goals.
          After that, our specialist can provide you with rough estimate.
        </p>
      </div>
      <div className='contentregarding-staff'>
        <h1>Staff</h1>
        <p>Business development manager</p>
        <button>
          Book a consultation <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}

export default FirstContent;
