import React, { useState } from 'react';
import './PrevNextSection.scss';

function PrevNextSection({ info }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = info.length;

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < totalSlides - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const getTranslate = () => {
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 768) {
      if (activeIndex <= 1) {
        console.log(activeIndex);
        return activeIndex * 440;
      }
    } else {
      return activeIndex * 440;
    }
  };

  return (
    <div className='prev-next-wrapper'>
      <div className='prenext-button'>
        <h3
          className={`arrow_number_size fw-6 ${
            activeIndex === totalSlides - 1 ? 'active' : ''
          }`}
          onClick={handlePrev}
        >
          Prev
        </h3>
        <div className='line'></div>
        <h3
          className={`arrow_number_size fw-6 ${
            activeIndex === 0 ? 'active' : ''
          }`}
          onClick={handleNext}
        >
          Next
        </h3>
      </div>
      <div className='prev-next-contant'>
        <div
          className='content-wrapper'
          style={{ transform: `translateX(-${getTranslate()}px)` }}
        >
          {info.map((item, index) => (
            <div
              className='content'
              key={index}
            >
              <div className='dot'>
                {activeIndex === index ? (
                  <span className='slide-number sub_part_header fw-6'>
                    0{index + 1}
                  </span>
                ) : (
                  <img
                    src={item.img}
                    alt='Circle'
                  />
                )}
              </div>
              <h4 className='sub_part_header fw-6'>{item.title}</h4>
              <h5 className='content_para'>{item.detail}</h5>
              {item.isLine && <div className='line1'></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrevNextSection;
