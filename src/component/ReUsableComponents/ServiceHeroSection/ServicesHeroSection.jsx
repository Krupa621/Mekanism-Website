import React from 'react';
import './ServicesHeroSection.scss';
function ServicesHeroSection({ title, subtitles }) {
  return (
    <div className='services-con'>
      <div className='serviceofpages-wrapper'>
        <div className='serviceofpages-text-wrapper mt-60'>
          <h3 className='content_para'>{title}</h3>

          <div className='pages-name mt-20'>
            {subtitles?.map((subtitle, i) => (
              <h4
                key={i}
                className='content_para'
              >
                {subtitle}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHeroSection;
