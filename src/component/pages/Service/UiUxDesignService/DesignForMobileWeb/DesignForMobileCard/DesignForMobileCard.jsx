import React from 'react';
import './DesignForMobileCard.scss';
// import img1 from './../../../../../../assets/images/designcard1.png';
function DesignForMobileCard({ img, title, detail, buttonname }) {
  return (
    <div className='Designcard-wrapper'>
      <img src={img} />
      <div className='card-text-wrapper'>
        <h3 className='sub_part_header fw-6'>{title}</h3>
        <p className='content_para fw-4'>{detail}</p>
        <button>
          {buttonname} <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}

export default DesignForMobileCard;
