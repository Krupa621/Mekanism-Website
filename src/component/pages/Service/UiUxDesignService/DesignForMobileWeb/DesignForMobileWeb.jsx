import React from 'react';
import './DesignForMobileWeb.scss';
import DesignForMobileCard from './DesignForMobileCard/DesignForMobileCard';

function DesignForMobileWeb({ designcard }) {
  return (
    <div className='Designformobileweb-wrapper'>
      <div className='designformobile-text-wrapper'>
        <h2 className='sub_header_font fw-6'>
          Design for mobile and web products
        </h2>
        <p className='content_para'>
          Creating the same distinct style and brand identity for all platforms
          using best-proven design practices
        </p>
      </div>
      <div className='designcards-container'>
        {designcard.map((data, i) => (
          <DesignForMobileCard
            key={i}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}

export default DesignForMobileWeb;
