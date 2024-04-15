import React from 'react';
import './ExperienceCard.scss';

function ExperienceCard({
  header,
  techName,
  detail1,
  detail2,
  experienceCardImg,
  icon,
}) {
  return (
    <div className='experiencecard-wrapper'>
      <div className='experiencecard-leftside'>
        <h2 className='sub_part_header fw-6'>{header}</h2>
        <div className='github'>
          {icon.map((icon, index) => (
            <React.Fragment key={index}>
              {icon}
              <h4 className='content_para fw-4'>{techName[index]}</h4>
            </React.Fragment>
          ))}
        </div>
        <p className='content_para fw-4'>{detail1}</p>
        <p className='content_para fw-4'>{detail2}</p>
        <div className='button-wrapper'>
          {techName.map((t, index) => (
            <button
              key={index}
              className='content_para'
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className='experiencecard-img-side'>
        <img
          src={experienceCardImg}
          alt='experience-card-img'
        />
      </div>
    </div>
  );
}

export default ExperienceCard;
