import React from 'react';
import './LatestInsights.scss';
function LatestInsights({ blognames, infos, date, imgs }) {
  return (
    <>
      <div className='blogcard-wrapper'>
        <div className='blogcard-text-wrapper'>
          <div className='direction'>
            <h4 className='content_para'>Blog</h4>
            <i className='fa-solid fa-arrow-right'></i>
            {blognames?.map((blogname, i) => (
              <h4
                key={i}
                className='content_para'
              >
                {blogname}
              </h4>
            ))}
          </div>

          <h2 className='sub_part_header'>{infos}</h2>

          <h4 className='content_para'>{date}</h4>
        </div>

        <img src={imgs} />
      </div>
    </>
  );
}

export default LatestInsights;
