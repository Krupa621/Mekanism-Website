import React from 'react';

const TechIconList = ({ imgSrc, subTitle }) => {
  return (
    <>
      <img
        src={imgSrc}
        alt='TechImage'
      />
      <p className='content_para fw-4 sub_head_color mt-10'>{subTitle}</p>
    </>
  );
};
export default TechIconList;
