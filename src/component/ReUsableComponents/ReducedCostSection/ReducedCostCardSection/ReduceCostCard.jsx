import React from 'react';
import './ReduceCostCard.scss';
function ReduceCostCard({
  flutterimg,
  description,
  ul,
  lists,
  costimg,
  imgname,
  isImg,
}) {
  return (
    <div className='reducecostcard-wrapper'>
      <img
        src={flutterimg}
        alt='flutterimg'
      />
      <div className='reducecost-rightpart'>
        <p className='content_para fw-4'>{description}</p>
        <h3 className='content_para fw-6'>{ul}</h3>

        <div className='card-time'>
          {lists.map((li, i) => (
            <h4
              key={i}
              className='content_para fw-5'
            >
              {li}
            </h4>
          ))}
        </div>
        {isImg && (
          <div className='dart-wrapper'>
            <img src={costimg} />
            <h2>{imgname}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReduceCostCard;
