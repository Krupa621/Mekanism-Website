import React from 'react';
import './TechName.scss';
import img1 from './../../../../../../assets/images/ui.png';
import img2 from './../../../../../../assets/images/ux.png';
function TechName({ sectionA, img, sectionB }) {
  return (
    <>
      <div className='techname-section-wrapper'>
        <div className='technamesection-a'>
          {sectionA.map((sectiona, i) => (
            <h4
              key={i}
              className='sub_part_header'
            >
              {sectiona}
            </h4>
          ))}
        </div>
        <img src={img} />
        <div className='technamesection-b'>
          {sectionB.map((sectionb, i) => (
            <h4
              key={i}
              className='sub_part_header'
            >
              {sectionb}
            </h4>
          ))}
        </div>
      </div>
      {/* tablet view */}
      <div className='techname-section-wrapper-tablet'>
        <img src={img} />
        <div className='tabletview-text-wrapper'>
          <div className='technamesection-a'>
            {sectionA.map((sectiona, i) => (
              <h4
                key={i}
                className='sub_part_header'
              >
                {sectiona}
              </h4>
            ))}
          </div>
          <div className='technamesection-b'>
            {sectionB.map((sectionb, i) => (
              <h4
                key={i}
                className='sub_part_header'
              >
                {sectionb}
              </h4>
            ))}
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className='techname-section-wrapper-mobile'>
        <div className='tabletview-text-wrapper'>
          <div className='seaction-A'>
            <img src={img1} />
            <div className='technamesection-a'>
              {sectionA.map((sectiona, i) => (
                <h4
                  key={i}
                  className='sub_part_header'
                >
                  {sectiona}
                </h4>
              ))}
            </div>
          </div>
          <div className='seaction-B'>
            <img src={img2} />
            <div className='technamesection-b'>
              {sectionB.map((sectionb, i) => (
                <h4
                  key={i}
                  className='sub_part_header'
                >
                  {sectionb}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechName;
